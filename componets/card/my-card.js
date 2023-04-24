export default {
    name: new URL(import.meta.url).pathname,
    async show(){
        let peticion = await fetch(`${this.name.replace(".js", ".html")}`);
        let html = await peticion.text();
        this.template(html)
    },
    template(html){
        let file = this.name.split("/").pop().replace(".js", "");
        this.name = class extends HTMLElement {
            constructor(){
                super();
                let shadowRoot = this.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = html;
            }
            static get observedAttributes() {
                return ['name','img_front','img_back','hp','attack','defense','speed','species'];
            }
            attributeChangedCallback(attr, oldValue, newValue) {
                // console.log(attr);
                // console.log(oldValue);
                // console.log(newValue);
                switch (attr) {
                    case 'name':
                        
                        this.shadowRoot.querySelector('#name').textContent = newValue

                        break;
                    case 'img_front':

                        this.shadowRoot.querySelector('#img_front_face').setAttribute('src', newValue);

                        break;
                    
                    case 'img_back':

                        this.shadowRoot.querySelector('#img_back_face').setAttribute('src', newValue);

                        break;
                    
                    case 'hp':

                        this.shadowRoot.querySelector('#hp').textContent = newValue

                        break;

                    case 'attack':
                        this.shadowRoot.querySelector('#attack').textContent = newValue
                        break;
                    case 'defense':
                        this.shadowRoot.querySelector('#defense').textContent = newValue
                        break;
                    case 'speed':
                        this.shadowRoot.querySelector('#speed').textContent = newValue
                        break;
                    case 'species':
                        this.shadowRoot.querySelector('#species').textContent = newValue
                        break;
                    default:
                        break;
                }
                
                
            }
            connectedCallback() {
                
            }
        }
        window.customElements.define(file, this.name);
    }
}