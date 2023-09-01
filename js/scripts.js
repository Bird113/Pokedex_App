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
]

  pokemonList.forEach(function(pokemon){
    document.write(' ' + pokemon.name + pokemon.height + ' ');
  });  
   
  if(pokemonList.height > 0.6)  {
    document.write( 'Wow, that’s big!')
  }
 
