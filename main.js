console.log(
    `

    los metodos de Math son : 

        * .abs(x) -> Me trae el valor absoluto de un numero por ejemplo el valor absoluto de -12 es ${Math.abs(-12)}
        
        * .exp(x) -> Me Devuelve el exponente de un numero por ejemplo e^x entonces euler elvado a la 2 es igual a ${Math.exp(2)}

        * .log(x) -> Devuelve el logaritmo natural en base e  ∀x > 0 , 𝙼𝚊𝚝𝚑.𝚕𝚘𝚐(𝚡) = ln(x)= El único y tal que e^(y) = x, entonces logaritmo natural de dos es ${Math.log(2)}
    
        * .max(x) y min(x) -> Devuelve el numero mayor o menor, entonces para [2,5,25,3] el numeor mayor es ${Math.max([2,5,25,3])} y su numero menor es ${Math.min([2,5,25,3])}

        * .pow(base, exp) -> Devuelve el resultado de una base elevada un exp o sea x^y, entonces 2² es igual a ${Math.pow(2,2)}
    
        * .random() -> Numero flotante random, por ejemplo para obtener un numero random del 1 al 10 seria Math.floor(Math.random() * 10) = ${Math.floor(Math.random() * 11)}
        
        Tmbien hay metos para redondear numero entre los mas usados esta
            
            * floor(x) -> Redondea al al inferio (no aproxima) entonces 5.94 es igual a ${Math.floor(5.94)} y su tipo es ${typeof(Math.floor(5.94))}
            * ceil(x) -> Redondea al superior (si aproxima) entonces 5.94 es igual a ${Math.ceil(5.94)} y su tipo es ${typeof(Math.ceil(5.94))}
            * round(x) -> Devuelve el valor de un número redondeado al entero más próximo entonces 5.5 es igual a ${Math.round(5.5)} y su tipo es ${typeof(Math.round(5.5))}
            * trunc(x) -> Elimina los decimales (NO redondea el número) 5.94 es igual a ${Math.trunc(5.94)} y su tipo es ${typeof(Math.trunc(5.94))}

        Operaciones trigonometricas
        
            Operacion   |   Descripción |   Inverso     |
            --------------------------------------------|
            acos(x)     |   Arcocoseno  |   acosh(x)    |
            --------------------------------------------|
            asin(x)     |   Arcoseno    |   asinh(x)    |
            --------------------------------------------|
            atan(x)     |   Arcocoseno  |   acosh(x)    |
            --------------------------------------------|
            cos(x)      |   coseno      |    cosh(x)    |
            --------------------------------------------|
            sin(x)      |   seno        |    sinh(x)    |    
            --------------------------------------------|
            tan(x)      |   tangente    |    tanh(x)    |
            ---------------------------------------------
    `
)