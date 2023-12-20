const urlBase = 'https://pokeapi.co/api/v2/pokemon/'

const pokeEntry = {
  number: 0,
  name: '',
  altura: 0,
  peso: 0
}

const pokedexEntry = (pokeName) => {
  fetch(urlBase+pokeName, {
    method: 'get' // opcional
  })
  .then(function(response) {
    response.json().then(function(result) {
      console.log(result);

      const pokeEntry = {
        numero: result.id,
        nome: result.name,
        altura: result.height/10,
        peso: result.weight/10,
        sprite: Math.random() < 1/256 ? result.sprites['front_shiny'] : result.sprites['front_default']
      }

      document.querySelector('#front-sprite')['src'] = pokeEntry.sprite;
      document.querySelector('#poke-number-name')['innerText'] = `N° ${pokeEntry.numero} ${pokeEntry.nome.toUpperCase()}`;
      document.querySelector('#poke-height')['innerText'] = `Altura ${pokeEntry.altura}m`;
      document.querySelector('#poke-weight')['innerText'] = `Peso ${pokeEntry.peso}kg`;
    })
  })
  .catch(function(err) { 
    console.error(err);
  });
};

const readEntry = () => {
  const entryName = document.querySelector('#entry-name').value;
  pokedexEntry(entryName);
}

const pokeNames = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', {
    method: 'get' // opcional
  })
  .then(function(response) {
    response.json().then(function(result) {
      // console.log(result);

      const pokeNames = result.results.map(poke => poke.name)

      // console.log(pokeNames)
    })
  })
  .catch(function(err) { 
    console.error(err);
  });
}