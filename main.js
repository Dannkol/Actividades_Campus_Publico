let num = 0;

do {
  try {
    num = parseInt(
      prompt("ingrese un numero para saber si es par o impar y es mayor a 10")
    );
  } catch (error) {
    alert(`Dato no conocido : ${error}`);
  }

  alert(
    `${num % 2 == 0 ? "El numbre es par" : "El numero no es par"} y ${
      num > 10 ? "el numero es mayor a 10" : "el numero es menor a 10"
    }`
  );

    if(!confirm("¿Desea Continuar?")){
      break
    }

} while (true);
