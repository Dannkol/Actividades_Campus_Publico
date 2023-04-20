export default {
    name: new URL(import.meta.url).pathname,
    async show(){
        let peticion = await fetch(`${this.name.replace(".js", ".html")}`);
        let html = await peticion.text();
        console.log(html)
        this.template(html)
    },
    template(html){
        console.log(this.name)
        let file = this.name.split("/").pop().replace(".js", "");
        console.log(file)
        this.name = class extends HTMLElement {
            count = 0;
            constructor(){
                super();
                let shadowRoot = this.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = html;
            }
            static get observedAttributes() {
                return ['nombre','apellido'];
            }
            attributeChangedCallback(attr, oldValue, newValue) {
                // console.log(attr);
                //console.log(oldValue);
                // console.log(newValue);
                console.log(newValue);
                
            }
            connectedCallback() {
                let btn = this.shadowRoot.querySelector('#mybtn');
                btn.addEventListener("click",(e)=>{
                    console.log("Hice clik");
                    this.attributes.nombre.value += `${++this.count}`; 
                });
            }
        }
        window.customElements.define(file, this.name);
    }
}