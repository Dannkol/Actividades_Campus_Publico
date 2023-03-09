let res = 0;
let int = 0;

do {
  try {
    res = parseFloat(prompt("ingrese la resistencia del circuito en ohm"));
    int = parseFloat(prompt("ingrese la corriente del circuito en ampers A"));
  } catch (error) {
    alert(`Dato no conocido : ${error}`);
  }

  alert(
    `El voltaje del circuito es ${res * int}`
  );

  if (!confirm("¿Desea Continuar?")) {
    break;
  }
} while (true);
