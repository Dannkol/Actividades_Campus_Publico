const cadena = String.raw = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
console.log(`

    Metodos de strings en javascript

    El método search() ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama.
    
    para la cadena: ${cadena} 
    
    su .search(regex) para la regex /Lorem/i

    ${cadena.search(/Lorem/i)}

`)