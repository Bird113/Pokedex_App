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

pokemomRepository.getAll().forEach(function (pokemon) {
  let pokemonDetails = pokemon.name + " , Height: " + pokemon.height ;

  if(pokemon.height > 0.6) {
  document.write (pokemonDetails + " - THATS A BIG POKEMON!" + "<br>") ;
}
  else{
  conso(pokemonDetails + "<br>");
}
})
