let num1 = 0;
let num2 = 0;

do {
  try {
    num1 = parseInt(prompt("ingrese numero 1"));
    num2 = parseInt(prompt("ingrese numero 2"));
  } catch (error) {
    alert(`Dato no conocido : ${error}`);
  }

  alert(
    num1 > num2 ? `su suma es ${num1 + num2} y su diferencia es ${num1 - num2}` : `Su producto es ${num1*num2} y su division es ${num1/num2}`
  );
  

  if (!confirm("¿Desea Continuar?")) {
    break;
  }
} while (true);

