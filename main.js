console.log(
    `

    los metodos numericos son : 

        .toExponential() -> El método toExponential() devuelve una cadena que representa el objeto Número en notación exponencial.
            
            * para el numero 77.1234 su notacion cientifica con 2 decimales serios 77.1234.toExponential(2) es ${77.1234.toExponential(2)}
        
        .toFixed(dec) -> El método toFixed() formatea un número usando notación de punto fijo.

            * para el numero 1234.252 su formato con 1 decima serio 1234.252.toFixed(1), tambien aproxima = ${1234.252.toFixed(1)}
    
        .toPrecision(p) -> El método toPrecision() devuelve una cadena que representa un objeto Number según la precisión especificada.
            
            * para un numero 12.25 si usamos .toPrecision(2) solo nos devolvera los dos primeros caracteres el numero ${12.25.toPrecision(2)}
        
        .parseInt(str,base) -> Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

            * por predeterminado esta en base 10 por eso si pornemos parseInt("15"); daria ${parseInt("15")} pero si ponemos parseInt("FXX123", 16) tenemos es epacificar que es en base 16 o hexadecimal para que lo parcee a ${parseInt("FXX123", 16)};

        .parseFloat(str, base) -> La función parseFloat() analiza un argumento de cadena y devuelve un número de punto flotante.

            * al igual que el parseInt() por defecto esta en base 10 entonces parseFloat("15.2") nos devuelve ${parseFloat("15.2")}
    `
)