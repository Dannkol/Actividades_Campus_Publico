export default {
    localstoragedata(storage , datos_formulario){
        const datalocal = localStorage.getItem(storage);
 
        function nodatos(storage, datos_formulario){
            let temporal = []
            temporal.unshift(datos_formulario)
            console.log(temporal)
            localStorage.setItem(storage,JSON.stringify(temporal))
            return localStorage.getItem(storage)
        }

        function sidatos(storage, datos_formulario){
            let dataguardada = localStorage.getItem(storage)
            let data = JSON.parse(dataguardada)
            data.unshift(datos_formulario)
            localStorage.setItem(storage, JSON.stringify(data) )
            return localStorage.getItem(storage)
        }

        return datalocal === null ?  nodatos(storage, datos_formulario) : sidatos(storage, datos_formulario) ;
    }
}