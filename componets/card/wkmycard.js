const template = {
    
    URL: 'https://pokeapi.co/api/v2/pokemon' ,

    async fetchs(url){
        let fetchRequest = fetch(url);
        let response = await fetchRequest;
        let data = await response.json();
        return data;
    },

    async pokemonRenderer(data_pokemon) {
        plantila = ''
        console.log()
        plantila += /*html*/ `

            <my-card name="${data_pokemon.forms[0].name}" img_front="${data_pokemon.sprites.other.home['front_default']}" img_back="${data_pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}" species="${data_pokemon.species.name}" hp="${data_pokemon.stats[0].base_stat}"  speed="${data_pokemon.stats[5].base_stat}" defense="${data_pokemon.stats[2].base_stat}" attack="${data_pokemon.stats[1].base_stat}" ></my-card>    

        `
        return plantila;
      },
      async renders() {
        let data = await this.fetchs(this.URL);
        let pokemonData = await Promise.all(data.results.map(async (item) => {
          return await this.fetchs(item.url);
        }));
        let html = await Promise.all(pokemonData.map(async (item) => {
            
            return await this.pokemonRenderer(item);
        }));
        html = `
        
            <div class="card_poke">

                ${html.map((item) => item).join("")}
            
            </div>
        `
        return html;
      }
}


self.addEventListener("message", async(e) => {
    postMessage(await template.renders());    
});