const cadena = String.raw = 'Lorem ipsum dolor sit Amet consectetur adipisicing elit.'
console.log(`

    El método slice() devuelve una copia de una parte del array dentro de un nuevo array comenzando por inicio hasta fin (fin no incluido). El arreglo original no se modificará.

    ${cadena}

    .slice(0 , 6) ->  me trae los primeros 6 caracteres

    ${cadena.slice(0 , 6)}

`)

