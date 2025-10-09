let pokemonList = [
  { name: 'Chespin', height: 0.4, types: ['grass'] },
  { name: 'Quilladin', height: 0.7, types: ['grass'] },
  { name: 'Chesnaught', height: 1.6, types: ['grass', 'fighting'] },
  { name: 'Fennekin', height: 0.4, types: ['fire'] },
  { name: 'Braixen', height: 1, types: ['fire'] },
  { name: 'Delphox', height: 1.5, types: ['fire', 'psychic'] },
  { name: 'Froakie', height: 0.3, types: ['water'] },
  { name: 'Frogadier', height: 0.6, types: ['water'] },
  { name: 'Greninja', height: 1.5, types: ['water', 'dark'] }
];

// the pokemonList for loop. (makes a list of the items it the array)
for (let i = 0; i < pokemonList.length; i++) {
  // makes the height values appear in the console.
  console.log(pokemonList[i].height);
  // makes the names and heights of the pokemon appear in the body.html
  document.write(pokemonList[i].name + ' (height:' + pokemonList[i].height + ') ');

  // if / then statement (if the height exceeds 1.5 then say 'wow, thats big' in the console.)
  if (pokemonList[i].height > 1.5) {
    console.log('Wow, that\’s big!')
    { document.write(" - Wow, that\’s big!"); } document.write("<br>");
  };
}