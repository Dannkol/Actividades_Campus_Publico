import myheader from "./myheader.js";
import config from "./config.js";

export default{

    item_remove(e){
        e.target.parentElement.parentElement.parentElement.remove()
    },

    delete () {
        const egresos = document.querySelector('#egresos_items');
        egresos.addEventListener("click", (e) => {
            e.target.id === "egresos" ? this.item_remove(e) : false;
           
        })

    }
}