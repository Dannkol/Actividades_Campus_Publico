const cadena = String.raw = 'Lorem ipsum dolor sit Amet consectetur adipisicing elit.'
console.log(`

    El método replace() devuelve una nueva cadena con una, algunas o todas las coincidencias de un patrón reemplazadas por un reemplazo.    

    ${cadena}

    .replace('Lorem' , 'Daniel') -> remplaza Lorem por Daniel, igual funciona con expreciones regulares 

    ${cadena.replace('Lorem' , 'Daniel')}

`)

