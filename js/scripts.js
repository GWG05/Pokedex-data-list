let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon//?limit=151';

  function add(pokemon) {
    if (
      typeof pokemon === "object" && "name" in pokemon
    ) {
    pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  // Makes <ul> on body
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement('li');
    listpokemon.classList.add('list-group-item');
    let button = document.createElement('button')
    button.innerText = pokemon.name
    button.classList.add('dex-info')
    button.classList.add("btn")
    button.classList.add('btn-info')
    button.setAttribute('data-toggle', 'modal')
    button.setAttribute('data-target', '#modal-container')
    // Calls event listener
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });

    listpokemon.appendChild(button)
    pokemonList.appendChild(listpokemon)
  }

  // Event Listener.
  // listens to user interactions


  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
     showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');

    // clear all existing modal content
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Add new modal content
    let closeButtonElement = document.createElement('button');
    // lets the close button close the modal.
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = 'Dex Entry';

    let nameElement = document.createElement('p');
    nameElement.innerText = pokemon.name;

    let imageElement = document.createElement('img');
    imageElement.src = pokemon.imageUrl;

    let heightElement = document.createElement('p');
    heightElement.innerText = `Height: ${pokemon.height}`;

    let typesElement = document.createElement('p');
    typesElement.innerText =`Types: ${pokemon.types
      .map(({ type }) => type.name)
      .join(", ")}`;
  

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(typesElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

    // lets the user close the modal by clicking on the background
    modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }



  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible')
  }
  // lets the user close the model with the escape key.
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
