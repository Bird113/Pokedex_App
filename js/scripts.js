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

  return{
    add:add,
    getAll:getAll
  };
})();

