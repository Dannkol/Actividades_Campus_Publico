let num = new Array();
let acc = 1

do {
    acc = parseInt(prompt('ingrese un numero par agg o 0 para terminar'))

    try {
        if (acc > 0) {
            num.push(acc);
        } else {
            break
        }
    } catch (error) {
        alert(error);
    }

} while (true);

let maxval = Math.max(...num);
let minval = Math.min(...num);
let sumtotal = num.reduce((pre, cur) => pre += cur)
let total = num.length;
let promt = sumtotal / total;
alert(`
        El promedio es: ${promt.toFixed(2)}
        \nEl total de valores agregados son ${total}
        \nEl total de la suma de los valores es ${sumtotal}
        \nEl mayor valor es ${maxval}
        \nEl menor valor es ${minval}`)

