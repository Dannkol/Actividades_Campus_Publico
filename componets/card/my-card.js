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
                //console.log(oldValue);
                // console.log(newValue);
                
                
            }
            connectedCallback() {
                
            }
        }
        window.customElements.define(file, this.name);
    }
}