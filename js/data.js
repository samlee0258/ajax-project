/* exported data */

var data = {
  view: 'home-page',
  pokemons: [],
  nextDataId: 1
};

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('pokestats', dataJSON);
});

var pokemonEntries = localStorage.getItem('pokemons');

if (pokemonEntries !== null) {
  data = JSON.parse(pokemonEntries);
}
