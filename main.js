const cadena = String.raw = 'Lorem ipsum dolor sit Amet consectetur adipisicing elit.'
console.log(`

    Metodos de strings en javascript

    El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
    
    El método matchAll() retorna un iterador de todos los resultados de ocurrencia en una cadena de texto contra una expresión regular, incluyendo grupos de captura.

    para la cadena de texto
    
    ${cadena}

    .match(/[A-Z]/g) -> me encontra todas las ocurrencias en el string que concidan con la exprecion regular
    en este caso de la A a la Z (mayusculas)

    ${cadena.match(/[A-Z]/g)}

    .matchAll(/[A-Z]/g) -> devolvera un obajeto iterable [object RegExp String Iterator]

    [...cadena.matchAll(/[A-Z]/g)]

    ${[...cadena.matchAll(/[A-Z]/g)][0]}


`)

