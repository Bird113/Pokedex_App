let pokemomRepository = (function () {
  let pokemonList=[
    {name: 'Charmander', 
    height: 0.6, 
    type: ['fire']},

    {name: 'Squirtle', 
    height: 0.5, 
    type: ['water']},

    {name: 'Bulbasaur', 
    height: 0.7, 
    type: ['grass', 'poisin']}  
];
 
//  will add pokemon to list
  function add(pokemon) {
    pokemonList.push(pokemon);
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
    // Event listner
    button.addEventListener('click', function(event) {
      showDetails(pokemon)
    });
  }
  function showDetails(pokemon){
    console.log(pokemon)
  } 
  
  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
// will display all pokemon within list
pokemomRepository.getAll().forEach(function (pokemon) {
  
  pokemomRepository.addListItem(pokemon);
});

