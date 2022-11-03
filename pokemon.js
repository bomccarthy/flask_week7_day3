function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

let form = document.querySelector('#pokemonForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let pokemon = event.path[0][0].value
    loadPokemon(pokemon)
    form.reset()
});

let getPokemon = async (pokemon) => {
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

let loadPokemon = async (pokemon) => {
    console.log(`<div id="${pokemon}">`)
    let data = await getPokemon(pokemon);
    let loadAbility2 = {
        loadAb2(){
        try {
            `<div>
                <h4 class="card-text">Ability 2: ${toTitleCase(data.abilities[1].ability.name)}</h4>
            </div>`
        }
        catch {``}
    }};
    console.log(loadAbility2.loadAb2())
    let loadAbility3 = {
        loadAb3(){
        try {
            `<div>
                <h4 class="card-text">Ability 3: ${toTitleCase(data.abilities[2].ability.name)}</h4>
            </div>`
        }
        catch {``}
    }};
    console.log(loadAbility3)
    let new_row1 = `<div class="col p-3">
                        <div class="card card-style" style="width: 20rem;" id="${pokemon}">
                            <img src="${data.sprites.other["official-artwork"].front_default}" class="card-img-top mx-auto border-0 backcolor" style="height: 18rem; border-radius: 1.5rem;" alt="...">
                            <div class="card-body text-dark">
                                <div>
                                    <h4 class="card-text">Ability 1: ${toTitleCase(data.abilities[0].ability.name)}</h4>
                                </div>
                                ${loadAbility2.loadAb2()}  // Hey Brandt, this needs more work, if you would like to help
                                ${loadAbility3.loadAb3()}
                                <div class="row justify-content-md-center">
                                    <div class="col">
                                        <p class="card-text">
                                            <li class="col offset-md-2 list-text arrow">HP:  ${data['stats'][0]['base_stat']}</li>
                                            <li class="col offset-md-2 list-text arrow">ATT:  ${data['stats'][1]['base_stat']}</li>
                                            <li class="col offset-md-2 list-text arrow">DEF:  ${data['stats'][2]['base_stat']}</li>
                                        </p>
                                    </div>
                                    <div class="col">
                                        <p class="card-text">
                                            <li class="col list-text arrow">SP ATT:  ${data['stats'][3]['base_stat']}</li>
                                            <li class="col list-text arrow">SP DEF:  ${data['stats'][4]['base_stat']}</li>
                                            <li class="col list-text arrow">Speed:  ${data['stats'][5]['base_stat']}</li>
                                        </p>
                                    </div>
                                    <h5 class="text-center">Base Experience:  ${data['base_experience']}</h5>
                                </div>
                                <div class="text-center m-2">
                                    <a class="btn btn-danger display-1 border border-light" onclick="clearPokemon(${pokemon})"><span style="font-size: 1.5rem">KILL ${data.name.toUpperCase()}</span></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
    document.getElementById('pokeBody').insertAdjacentHTML('beforeend', new_row1);
};

let clearPokemon = (pokemon) => {
    document.getElementById(pokemon).outerHTML='';
};

let clearAllPokemon = () => {
    document.getElementById('pokeBody').innerHTML='';
};