let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Chespin", height: 0.4, types: ["grass"] },
    { name: "Quilladin", height: 0.7, types: ["grass"] },
    { name: "Chesnaught", height: 1.6, types: ["grass", "fighting"] },
    { name: "Fennekin", height: 0.4, types: ["fire"] },
    { name: "Braixen", height: 1, types: ["fire"] },
    { name: "Delphox", height: 1.5, types: ["fire", "psychic"] },
    { name: "Froakie", height: 0.3, types: ["water"] },
    { name: "Frogadier", height: 0.6, types: ["water"] },
    { name: "Greninja", height: 1.5, types: ["water", "dark"] },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  // Makes <ul> on body
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement('li');
    let button = document.createElement('button')
    button.innerText = pokemon.name
    button.classList.add("button-class")
    // Calls event listener
    button.addEventListener('click', function (showDetails) {
      console.log(pokemon.name);
    });
    listpokemon.appendChild(button)
    pokemonList.appendChild(listpokemon)
  }

  // Event Listener.
  // listens to user interactions
  function showDetails(pokemon){
    console.log(pokemon.name)
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

// Runs <ul> on body.
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)
});