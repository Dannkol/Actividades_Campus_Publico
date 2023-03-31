import config from "./config.js";

export default {

/*     {
        "tipo_gasto": "+",
        "Descripcion": "",
        "valor": ""
    } */

    formData(e){
        
/*         let data = JSON.parse(localStorage.getItem("datos_ingresos"))
        console.log(data)
        console.log(JSON.parse(data[1])) */
        const mydata =  document.querySelector("#myformdata");
        mydata.addEventListener("submit", (e)=>{
            e.preventDefault() 
            let data = Object.fromEntries(new FormData(e.target));
            const datos_local = config.localstoragedata("datos_ingresos" , JSON.stringify(data))
            const myworker = new Worker("components/worker/calcular.js")
            console.log(datos_local)
            myworker.postMessage({data : datos_local})
        })  
    }
}