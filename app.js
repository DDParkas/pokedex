const fetchPokemon = () => {
    const url = id => ` https://pokeapi.co/api/v2/pokemon/${id}`
    
    const pokemonPromises = []

    for(let i = 1; i<= 150; i++){
        pokemonPromises.push(fetch(url(i)).then(response => response.json()))
    }
    Promise.all(pokemonPromises)
    .then(
        pokemons =>{
            

            const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
                accumulator +=`
                <li class="card ${pokemon.types[0].type.name}" >
                    <img class="images" src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg">
                    <h2 class="title"> ${pokemon.id} . ${pokemon.name}</h2>
                    <p class="subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p>
                </li>`
                console.log(pokemon.types[0].type.name)
                return accumulator
            }, '')
            const ul = document.getElementById('uls')
            ul.innerHTML = lisPokemons
            
        
        }
    )
}


fetchPokemon()

