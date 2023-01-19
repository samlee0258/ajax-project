var $searchInput = document.querySelector('#search-bar');
var $searchForm = document.querySelector('form');
var $homePage = document.querySelector('div[data-view="home-page"]');
var $searchResult = document.querySelector('div[data-view="search-result"]');
var $searchTab = document.querySelector('.search-tab');
var $ul = document.querySelector('ul');

// document.addEventListener('DOMContentLoaded', handlePageLoad);

$searchForm.addEventListener('submit', function () {
  event.preventDefault();
  // console.log($searchInput.value);
  getPokemonData($searchInput.value);
  viewSwap('search-result');
});

$searchTab.addEventListener('click', function () {
  viewSwap('home-page');
  $searchInput.value = '';
});

function getPokemonData(name) {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function (e) {
    // console.log(xhr.status);
    // console.log(xhr.response);
    // console.log(xhr.response.sprites.other['official-artwork'].front_default);
    // console.log(xhr.response.stats[0].base_stat);
    // console.log(xhr.response.types[0].type.name);
    // renderSearchResult();
    var $li = document.createElement('li');
    $li.setAttribute('data-id', xhr.response.id);
    $ul.appendChild($li);

    var $outerDiv = document.createElement('div');
    $outerDiv.className = 'row';
    $li.appendChild($outerDiv);

    var $imgDivContainer = document.createElement('div');
    $imgDivContainer.className = 'column-half image-container';
    $outerDiv.appendChild($imgDivContainer);

    var $pokemonImage = document.createElement('img');
    $pokemonImage.setAttribute('src', xhr.response.sprites.other['official-artwork'].front_default);
    $pokemonImage.className = 'pokemon-image';
    $imgDivContainer.appendChild($pokemonImage);

    var $pokemonContainer = document.createElement('div');
    $pokemonContainer.className = 'column-half pokemon-container';
    $outerDiv.appendChild($pokemonContainer);

    var $pokemonName = document.createElement('h2');
    $pokemonName.className = 'pokemon-name';
    $pokemonName.textContent = xhr.response.name.charAt(0).toUpperCase() + xhr.response.name.slice(1);
    $pokemonContainer.appendChild($pokemonName);

    var $typeContainer = document.createElement('div');
    $typeContainer.className = 'row type-container';
    $pokemonContainer.appendChild($typeContainer);

    // var $typeImage = document.createElement('img');

    var $typeName = document.createElement('p');
    $typeName.textContent = xhr.response.types[0].type.name.charAt(0).toUpperCase() + xhr.response.types[0].type.name.slice(1);
    $typeContainer.appendChild($typeName);

    var $statContainer = document.createElement('div');
    $statContainer.className = 'stat-container';
    $pokemonContainer.appendChild($statContainer);

    var $statTitle = document.createElement('h2');
    $statTitle.className = 'stat-title';
    $statTitle.textContent = 'Base Stats';
    $statContainer.appendChild($statTitle);

    var $statColumnSpacing = document.createElement('div');
    $statColumnSpacing.className = 'row column-spacing';
    $statContainer.appendChild($statColumnSpacing);

    var $columnOne = document.createElement('div');
    $columnOne.className = 'spacing col-1';
    $statColumnSpacing.appendChild($columnOne);

    var $hp = document.createElement('p');
    $hp.textContent = 'HP: ' + xhr.response.stats[0].base_stat;
    $columnOne.appendChild($hp);

    var $atk = document.createElement('p');
    $atk.textContent = 'ATK: ' + xhr.response.stats[1].base_stat;
    $columnOne.appendChild($atk);

    var $def = document.createElement('p');
    $def.textContent = 'DEF: ' + xhr.response.stats[2].base_stat;
    $columnOne.appendChild($def);

    var $columnTwo = document.createElement('div');
    $columnTwo.className = 'col-2';
    $statColumnSpacing.appendChild($columnTwo);

    var $spAtk = document.createElement('p');
    $spAtk.textContent = 'Sp-ATK: ' + xhr.response.stats[3].base_stat;
    $columnTwo.appendChild($spAtk);

    var $spDef = document.createElement('p');
    $spDef.textContent = 'Sp-DEF: ' + xhr.response.stats[4].base_stat;
    $columnTwo.appendChild($spDef);

    var $speed = document.createElement('p');
    $speed.textContent = 'Speed: ' + xhr.response.stats[5].base_stat;
    $columnTwo.appendChild($speed);

    // return $li;
  });
  xhr.send();
}

// function renderSearchResult(xhr) {
// var $li = document.createElement('li');
// $li.setAttribute('data-id', xhr.response.id);

// var $outerDiv = document.createElement('div');
// $outerDiv.className = 'row';
// $li.appendChild($outerDiv);

// var $imgDivContainer = document.createElement('div');
// $imgDivContainer.className = 'column-half image-container';
// $outerDiv.appendChild($imgDivContainer);

// var $pokemonImage = document.createElement('img');
// $pokemonImage.setAttribute('src', xhr.response.sprites.other['official-artwork'].front_default);
// $pokemonImage.className = 'pokemon-image';
// $imgDivContainer.appendChild($pokemonImage);

// var $pokemonContainer = document.createElement('div');
// $pokemonContainer.className = 'column-half pokemon-container';
// $outerDiv.appendChild($pokemonContainer);

// var $pokemonName = document.createElement('h2');
// $pokemonName.className = 'pokemon-name';
// $pokemonName.textContent = 'xhr.response.name';
// $pokemonContainer.appendChild($pokemonName);

// var $typeContainer = document.createElement('div');
// $typeContainer.className = 'row type-container';
// $pokemonContainer.appendChild($typeContainer);

// // var $typeImage = document.createElement('img');

// var $typeName = document.createElement('p');
// $typeName.textContent = xhr.response.types[0].type.name;
// $typeContainer.appendChild($typeName);

// var $statContainer = document.createElement('div');
// $statContainer.className = 'stat-container';
// $pokemonContainer.appendChild($statContainer);

// var $statTitle = document.createElement('h2');
// $statTitle.className = 'stat-title';
// $statTitle.textContent = 'Base Stats';
// $statContainer.appendChild($statTitle);

// var $statColumnSpacing = document.createElement('div');
// $statColumnSpacing.className = 'row column-spacing';
// $statContainer.appendChild($statColumnSpacing);

// var $columnOne = document.createElement('div');
// $columnOne.className = 'spacing col-1';
// $statColumnSpacing.appendChild($columnOne);

// var $hp = document.createElement('p');
// $hp.textContent = 'HP: ' + xhr.response.stats[0].base_stat;
// $columnOne.appendChild($hp);

// var $atk = document.createElement('p');
// $atk.textContent = 'ATK: ' + xhr.response.stats[1].base_stat;
// $columnOne.appendChild($atk);

// var $def = document.createElement('p');
// $def.textContent = 'DEF: ' + xhr.response.stats[2].base_stat;
// $columnOne.appendChild($def);

// var $columnTwo = document.createElement('div');
// $columnTwo.className = 'col-2';
// $statColumnSpacing.appendChild($columnTwo);

// var $spAtk = document.createElement('p');
// $spAtk.textContent = 'Sp-ATK: ' + xhr.response.stats[3].base_stat;
// $columnOne.appendChild($spAtk);

// var $spDef = document.createElement('p');
// $spDef.textContent = 'Sp-DEF: ' + xhr.response.stats[4].base_stat;
// $columnOne.appendChild($spDef);

// var $speed = document.createElement('p');
// $speed.textContent = 'Speed: ' + xhr.response.stats[5].base_stat;
// $columnOne.appendChild($speed);

// return $li;
// }

// function handlePageLoad(event) {
//   for (var i = 0; i < data.entries.length; i++) {
//     var $searchObjects = renderSearchResult(data.entries[i]);
//     $ul.appendChild($searchObjects);
//   }
//   viewSwap('search-result');
// }

function viewSwap(dataView) {
  data.view = dataView;
  if (data.view === 'home-page') {
    $homePage.className = 'home-page';
    $searchResult.className = 'hidden';
  } else if (data.view === 'search-result') {
    $homePage.className = 'hidden';
    $searchResult.className = 'search-result';
  }
}
