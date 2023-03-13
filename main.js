let option = prompt('a.perimetro de un cuadrado \n b.area de un ractangulo')

let cal = new Array(2)

do {

  try {
    switch (option) {
        case 'a':
            cal[0] = parseInt(prompt('lado en cm del cuadrado'))
            alert(`el perimetro es ${cal[0]*4}`)
            break;
        
        case 'b':
            cal[0] = parseInt(prompt('altura en cm'))
            cal[1] = parseInt(prompt('base en cm'))
            alert(`el area es ${cal.reduce((acc, ecc) => acc*ecc)}`)
            break
        default:
            break;
    }
  } catch (error) {
    alert(error);
  }

  if (!confirm("seguir?")) {
    break;
  }
  option = prompt('a.perimetro de un cuadrado \n b.area de un ractangulo')
} while (true);

let valor = produc.result.reduce((a,b) => a.price += b.price)

alert(`El valor de su factura es de $${valor}`);