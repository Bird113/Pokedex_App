let pokemonRepository = (function () {
  let pokemonList=[];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container')
  
  
//  will add pokemon to list
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
//  will show all objects in list
  function getAll() {
    return pokemonList
  }
  function addListItem(pokemon) {
    // assigned elements
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    // Button for each pokemon
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    addEventListenerToButton(button, pokemon);
  }
    // Event listner
    function addEventListenerToButton (button, pokemon) {
    button.addEventListener('click', function(e) {
      showDetails(pokemon)
    });
  }

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

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
  });
}
  

  
  

  
//  shows details of pokemon 
  function showDetails(item){
    loadDetails(item).then(function () {
    // Shows modal when clicked
  
    modalContainer.innerHTML = '';

    let modal = document.createElement('div') 
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close')
    closeButtonElement.innerText='Return';
    closeButtonElement.addEventListener("click", hideModal);
// hides model with esc key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape'  && modalContainer.classList.contains('is-visible')){
        hideModal();
    }
}); 
// hides model when clicking outside model
    modalContainer.addEventListener('click', (e) => {
    let target = e.target;
      if (target === modalContainer) {
      hideModal();
    }
  });
    let imgElement = document.createElement('img');
    imgElement.src = item.imageUrl;
    imgElement.alt = item.name;
    imgElement.classList.add('pokemon-img')

    let titleElement = document.createElement('h1');
    titleElement.innerText = item.name;
    titleElement.classList.add('pokemon-content')
  
    let contentElement = document.createElement('p');
    contentElement.innerText= 'Height: ' + item.height + "'";
    contentElement.classList.add('pokemon-content')
  

    modal.appendChild(closeButtonElement)
    modal.appendChild(imgElement)
    modal.appendChild(titleElement)
    modal.appendChild(contentElement)

    modalContainer.appendChild(modal)
    modalContainer.classList.add('is-visible');
  });
} 

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  
  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();
// will display all pokemon within list
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  });
});
