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
        plantila += /*html*/ `
            <my-card name="${data_pokemon.forms[0].name}" img_front="" img_back="" species="" hp=""  speed="" defense="" attack="" ></my-card>    

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
        
            <div class="card_poke"
            >
                ${html.map((item) => item).join("")}
            </div>
        `
        console.log(html)
        return html;
      }
}


self.addEventListener("message", async(e) => {
    postMessage(await template.renders());    
});