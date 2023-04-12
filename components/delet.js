import myheader from "./myheader.js";
import config from "./config.js";

export default{

    item_remove(e){
        e.target.parentElement.parentElement.parentElement.remove()
        const id = e.target.id
        const data_set = e.target.dataset.id
        console.log(data_set  , id )
        const datos_local = config.delete(
            "datos_ingresos",
            id
        );
        myheader.show(datos_local)
    },

    delete () {
        const egresos = document.querySelector('#egresos_items');
        egresos.addEventListener("click", (e) => {
            e.target.id === "egresos" ? this.item_remove(e) : false;
           
        })

    }
}