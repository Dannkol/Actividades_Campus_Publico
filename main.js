let promp = 0;
let nota = [];
let x = true;

function aggnota() {
  let aux;
  aux = parseInt(prompt("ingrese la nota del alumno: "));
  do {
    if (aux > 5) {
      aux = parseInt(prompt("ingrese la nota del alumno menor a 5: "));
    } else {
      break;
    }
  } while (true);
  return aux;
}

do {
  try {
    prompt(
      "quiere agregar una nota escriba si o cualquier otra cosa para cancelar"
    ).toLocaleLowerCase() == "si"
      ? nota.push(aggnota())
      : (x = false);
  } catch (error) {
    alert(`Dato no conocido : ${error}`);
  }
} while (x);

try {
  promp = nota.reduce((acc, cur) => (cur += acc)) / nota.length;

  promp >= 3.9
    ? alert(`Becado con un promedio de ${promp.toFixed(2)}`)
    : alert(`Estudie su promedio es de ${promp.toFixed(2)}`);
} catch (error) {
    alert(`Datos incorrectos: ${error}`)
    window.location.reload()
}
