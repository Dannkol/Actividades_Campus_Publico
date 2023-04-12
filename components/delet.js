import myheader from "./myheader.js";
import config from "./config.js";

export default{

    item_remove(e){
        e.target.parentElement.parentElement.parentElement.remove()
        const data_set = e.target.dataset.id
        const datos_local = config.delete(
            "datos_ingresos",
            data_set
        );
        myheader.show(datos_local)
    },

    delete () {
        const egresos = document.querySelector('#egresos_items');
        egresos.addEventListener("click", (e) => {
            e.target.id === "egresos" ? this.item_remove(e) : false;
        })
        const ingresos = document.querySelector('#ingresos_items');
        ingresos.addEventListener("click", (e) => {
            e.target.id === "ingresos" ? this.item_remove(e) : false;
        })

    }
}