var $searchInput = document.querySelector('#search-bar');
var $searchForm = document.querySelector('form');
var $homePage = document.querySelector('div[data-view="home-page"]');
var $searchResult = document.querySelector('div[data-view="search-result"]');
// var $searchTab = document.querySelector('.search-tab');

$searchForm.addEventListener('submit', function () {
  event.preventDefault();
  // console.log($searchInput.value);
  getPokemonData($searchInput.value);
  viewSwap('search-result');
});

// $searchTab.addEventListener('click', function () {
//   viewSwap('home-page');
//   $searchInput.value = '';
// });

function getPokemonData(name) {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function (e) {
    // console.log(xhr.status);
    // console.log(xhr.response);
    // console.log(xhr.response.sprites.other['official-artwork'].front_default);
    // console.log(xhr.response.stats[0]);
  });
  xhr.send();
}

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
