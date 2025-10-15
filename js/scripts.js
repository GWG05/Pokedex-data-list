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

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + " (height:" + pokemon.height + ") ");
  if (pokemon.height > 1.5) {
    document.write(" - Wow, that’s big!");
  }
  document.write("<br>");
});