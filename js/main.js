var $searchInput = document.querySelector('#search-bar');
var $searchForm = document.querySelector('form');
var $homePage = document.querySelector('div[data-view="home-page"]');
var $searchResult = document.querySelector('div[data-view="search-result"]');
var $searchTab = document.querySelector('.search-tab');
var $favoritesTab = document.querySelector('#favorites-tab');
var $favorites = document.querySelector('div[data-view="favorites"]');
var $favoritesButton;
var $searchedPokemonUl = document.querySelector('#searched-pokemon');
var $favoritedPokemonUl = document.querySelector('#favorite-pokemon');
var currentPokemon = {};

$searchForm.addEventListener('submit', function () {
  event.preventDefault();
  $searchedPokemonUl.innerHTML = '';
  getPokemonData($searchInput.value);
  viewSwap('search-result');
});

$searchTab.addEventListener('click', function () {
  viewSwap('home-page');
  $searchInput.value = '';
});

$favoritesTab.addEventListener('click', function () {
  viewSwap('favorites');
});

function getPokemonData(name) {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function (e) {
    renderDomTree(xhr.response);
    var response = xhr.response;
    currentPokemon = {};
    currentPokemon.dataId = data.nextDataId;
    currentPokemon.name = response.name.charAt(0).toUpperCase() + response.name.slice(1);
    currentPokemon.img = response.sprites.other['official-artwork'].front_default;
    currentPokemon.typeName = response.types[0].type.name.charAt(0).toUpperCase() + response.types[0].type.name.slice(1);
    currentPokemon.typeIcon = document.querySelector('.type').getAttribute('src');
    currentPokemon.hp = response.stats[0].base_stat;
    currentPokemon.atk = response.stats[1].base_stat;
    currentPokemon.def = response.stats[2].base_stat;
    currentPokemon.spAtk = response.stats[3].base_stat;
    currentPokemon.spDef = response.stats[4].base_stat;
    currentPokemon.speed = response.stats[5].base_stat;
  });
  xhr.send();
}

function renderDomTree(pokemon) {
  var $li = document.createElement('li');
  $li.setAttribute('data-id', pokemon.id);
  $searchedPokemonUl.appendChild($li);

  var $outerDiv = document.createElement('div');
  $outerDiv.className = 'row';
  $li.appendChild($outerDiv);

  var $imgDivContainer = document.createElement('div');
  $imgDivContainer.className = 'column-half image-container';
  $outerDiv.appendChild($imgDivContainer);

  var $pokemonImage = document.createElement('img');
  if (pokemon.sprites) {
    $pokemonImage.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default);
  } else {
    $pokemonImage.setAttribute('src', pokemon.img);
  }
  $pokemonImage.className = 'pokemon-image';
  $imgDivContainer.appendChild($pokemonImage);

  var $pokemonContainer = document.createElement('div');
  $pokemonContainer.className = 'column-half pokemon-container';
  $outerDiv.appendChild($pokemonContainer);

  var $pokemonName = document.createElement('h2');
  $pokemonName.className = 'pokemon-name';
  $pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  $pokemonContainer.appendChild($pokemonName);

  var $typeContainer = document.createElement('div');
  $typeContainer.className = 'row type-container';
  $pokemonContainer.appendChild($typeContainer);

  var $typeImage = document.createElement('img');
  if (pokemon.types) {
    if (pokemon.types[0].type.name === 'bug') {
      $typeImage.setAttribute('src', 'images/icons/bug.svg');
      $typeImage.className = 'type type-bug';
    } else if (pokemon.types[0].type.name === 'dark') {
      $typeImage.setAttribute('src', 'images/icons/dark.svg');
      $typeImage.className = 'type type-dark';
    } else if (pokemon.types[0].type.name === 'dragon') {
      $typeImage.setAttribute('src', 'images/icons/dragon.svg');
      $typeImage.className = 'type type-dragon';
    } else if (pokemon.types[0].type.name === 'electric') {
      $typeImage.setAttribute('src', 'images/icons/electric.svg');
      $typeImage.className = 'type type-electric';
    } else if (pokemon.types[0].type.name === 'fairy') {
      $typeImage.setAttribute('src', 'images/icons/fairy.svg');
      $typeImage.className = 'type type-fairy';
    } else if (pokemon.types[0].type.name === 'fighting') {
      $typeImage.setAttribute('src', 'images/icons/fighting.svg');
      $typeImage.className = 'type type-fighting';
    } else if (pokemon.types[0].type.name === 'fire') {
      $typeImage.setAttribute('src', 'images/icons/fire.svg');
      $typeImage.className = 'type type-fire';
    } else if (pokemon.types[0].type.name === 'flying') {
      $typeImage.setAttribute('src', 'images/icons/flying.svg');
      $typeImage.className = 'type type-flying';
    } else if (pokemon.types[0].type.name === 'ghost') {
      $typeImage.setAttribute('src', 'images/icons/ghost.svg');
      $typeImage.className = 'type type-ghost';
    } else if (pokemon.types[0].type.name === 'grass') {
      $typeImage.setAttribute('src', 'images/icons/grass.svg');
      $typeImage.className = 'type type-grass';
    } else if (pokemon.types[0].type.name === 'ground') {
      $typeImage.setAttribute('src', 'images/icons/ground.svg');
      $typeImage.className = 'type type-ground';
    } else if (pokemon.types[0].type.name === 'ice') {
      $typeImage.setAttribute('src', 'images/icons/ice.svg');
      $typeImage.className = 'type type-ice';
    } else if (pokemon.types[0].type.name === 'normal') {
      $typeImage.setAttribute('src', 'images/icons/normal.svg');
      $typeImage.className = 'type type-normal';
    } else if (pokemon.types[0].type.name === 'poison') {
      $typeImage.setAttribute('src', 'images/icons/poison.svg');
      $typeImage.className = 'type type-poison';
    } else if (pokemon.types[0].type.name === 'psychic') {
      $typeImage.setAttribute('src', 'images/icons/psychic.svg');
      $typeImage.className = 'type type-psychic';
    } else if (pokemon.types[0].type.name === 'rock') {
      $typeImage.setAttribute('src', 'images/icons/rock.svg');
      $typeImage.className = 'type type-rock';
    } else if (pokemon.types[0].type.name === 'steel') {
      $typeImage.setAttribute('src', 'images/icons/steel.svg');
      $typeImage.className = 'type type-steel';
    } else if (pokemon.types[0].type.name === 'water') {
      $typeImage.setAttribute('src', 'images/icons/water.svg');
      $typeImage.className = 'type type-water';
    }
  } else {
    if (pokemon.typeName === 'bug') {
      $typeImage.setAttribute('src', 'images/icons/bug.svg');
      $typeImage.className = 'type type-bug';
    } else if (pokemon.typeName === 'dark') {
      $typeImage.setAttribute('src', 'images/icons/dark.svg');
      $typeImage.className = 'type type-dark';
    } else if (pokemon.typeName === 'dragon') {
      $typeImage.setAttribute('src', 'images/icons/dragon.svg');
      $typeImage.className = 'type type-dragon';
    } else if (pokemon.typeName === 'electric') {
      $typeImage.setAttribute('src', 'images/icons/electric.svg');
      $typeImage.className = 'type type-electric';
    } else if (pokemon.typeName === 'fairy') {
      $typeImage.setAttribute('src', 'images/icons/fairy.svg');
      $typeImage.className = 'type type-fairy';
    } else if (pokemon.typeName === 'fighting') {
      $typeImage.setAttribute('src', 'images/icons/fighting.svg');
      $typeImage.className = 'type type-fighting';
    } else if (pokemon.typeName === 'fire') {
      $typeImage.setAttribute('src', 'images/icons/fire.svg');
      $typeImage.className = 'type type-fire';
    } else if (pokemon.typeName === 'flying') {
      $typeImage.setAttribute('src', 'images/icons/flying.svg');
      $typeImage.className = 'type type-flying';
    } else if (pokemon.typeName === 'ghost') {
      $typeImage.setAttribute('src', 'images/icons/ghost.svg');
      $typeImage.className = 'type type-ghost';
    } else if (pokemon.typeName === 'grass') {
      $typeImage.setAttribute('src', 'images/icons/grass.svg');
      $typeImage.className = 'type type-grass';
    } else if (pokemon.typeName === 'ground') {
      $typeImage.setAttribute('src', 'images/icons/ground.svg');
      $typeImage.className = 'type type-ground';
    } else if (pokemon.typeName === 'ice') {
      $typeImage.setAttribute('src', 'images/icons/ice.svg');
      $typeImage.className = 'type type-ice';
    } else if (pokemon.typeName === 'normal') {
      $typeImage.setAttribute('src', 'images/icons/normal.svg');
      $typeImage.className = 'type type-normal';
    } else if (pokemon.typeName === 'poison') {
      $typeImage.setAttribute('src', 'images/icons/poison.svg');
      $typeImage.className = 'type type-poison';
    } else if (pokemon.typeName === 'psychic') {
      $typeImage.setAttribute('src', 'images/icons/psychic.svg');
      $typeImage.className = 'type type-psychic';
    } else if (pokemon.typeName === 'rock') {
      $typeImage.setAttribute('src', 'images/icons/rock.svg');
      $typeImage.className = 'type type-rock';
    } else if (pokemon.typeName === 'steel') {
      $typeImage.setAttribute('src', 'images/icons/steel.svg');
      $typeImage.className = 'type type-steel';
    } else if (pokemon.typeName === 'water') {
      $typeImage.setAttribute('src', 'images/icons/water.svg');
      $typeImage.className = 'type type-water';
    }
  }
  $typeContainer.appendChild($typeImage);

  var $typeName = document.createElement('p');
  if (pokemon.types) {
    $typeName.textContent = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1);
  } else {
    $typeName.textContent = pokemon.typeName;
  }
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
  if (pokemon.stats) {
    $hp.textContent = 'HP: ' + pokemon.stats[0].base_stat;
  } else {
    $hp.textContent = 'HP: ' + pokemon.hp;
  }
  $columnOne.appendChild($hp);

  var $atk = document.createElement('p');
  if (pokemon.stats) {
    $atk.textContent = 'ATK: ' + pokemon.stats[1].base_stat;
  } else {
    $atk.textContent = 'ATK: ' + pokemon.atk;
  }
  $columnOne.appendChild($atk);

  var $def = document.createElement('p');
  if (pokemon.stats) {
    $def.textContent = 'DEF: ' + pokemon.stats[2].base_stat;
  } else {
    $def.textContent = 'DEF: ' + pokemon.def;
  }
  $columnOne.appendChild($def);

  var $columnTwo = document.createElement('div');
  $columnTwo.className = 'col-2';
  $statColumnSpacing.appendChild($columnTwo);

  var $spAtk = document.createElement('p');
  if (pokemon.stats) {
    $spAtk.textContent = 'Sp-ATK: ' + pokemon.stats[3].base_stat;
  } else {
    $spAtk.textContent = 'Sp-ATK: ' + pokemon.spAtk;
  }
  $columnTwo.appendChild($spAtk);

  var $spDef = document.createElement('p');
  if (pokemon.stats) {
    $spDef.textContent = 'Sp-DEF: ' + pokemon.stats[4].base_stat;
  } else {
    $spDef.textContent = 'Sp-DEF: ' + pokemon.spDef;
  }
  $columnTwo.appendChild($spDef);

  var $speed = document.createElement('p');
  if (pokemon.stats) {
    $speed.textContent = 'Speed: ' + pokemon.stats[5].base_stat;
  } else {
    $speed.textContent = 'Speed: ' + pokemon.speed;
  }
  $columnTwo.appendChild($speed);

  var $buttonContainer = document.createElement('div');
  $buttonContainer.className = 'button-container';
  $pokemonContainer.appendChild($buttonContainer);

  $favoritesButton = document.createElement('button');
  $favoritesButton.textContent = 'Add to Favorites';
  $favoritesButton.className = 'favorites-button';
  $buttonContainer.appendChild($favoritesButton);

  return $li;
}

function viewSwap(dataView) {
  data.view = dataView;
  if (data.view === 'home-page') {
    $homePage.className = 'home-page';
    $searchResult.className = 'hidden';
    $favorites.className = 'hidden';
  } else if (data.view === 'search-result') {
    $searchResult.className = 'search-result';
    $homePage.className = 'hidden';
    $favorites.className = 'hidden';
  } else if (data.view === 'favorites') {
    $favorites.className = 'favorites';
    $homePage.className = 'hidden';
    $searchResult.className = 'hidden';
  }
}

$searchedPokemonUl.addEventListener('click', function (e) {
  var pokemonExists = false;
  if (e.target.tagName === 'BUTTON') {
    for (var index = 0; index < data.pokemons.length; index++) {
      if (data.pokemons[index].name === currentPokemon.name) {
        pokemonExists = true;
        return;
      }
    }
    if (pokemonExists === false) {
      data.pokemons.unshift(currentPokemon);
      data.nextDataId++;
      var renderFavorite = renderDomTree(data.pokemons);
      $favoritedPokemonUl.appendChild(renderFavorite);
      viewSwap('favorites');
    }
  }
});

function toggleNoPokemons() {
  var $noFavorites = document.querySelector('.no-favorites');
  if (data.pokemons.length > 0) {
    $noFavorites.className = 'row no-favorites hidden';
  } else {
    $noFavorites.className = 'row no-favorites';
  }
}
toggleNoPokemons();
