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
 
 
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
 
  function getAll() {
    return pokemonList
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemomRepository.getAll().forEach(function (pokemon) {
  
  pokemomRepository.addListItem(pokemon);
});
