let pokemonList=[
  {Name: 'Charmander', 
  height: 0.6, 
  type: ['fire']},

  {Name: 'Squirtle', 
  height: 0.5, 
  type: ['water']},

  {Name: 'Bulbasaur', 
  height: 0.7, 
  type: ['grass', 'poisin']}  
]

for (let i = 0; i < pokemonList.length; i++) {
  document.write(`${pokemonList[i].Name} (height: ${pokemonList[i].height})`)
  
  if(pokemonList[i].height > 0.6)  {
    document.write( 'Wow, that’s big!')
  }
 
}