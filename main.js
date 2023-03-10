let produc = {
  result: new Array(2),
};

do {
  nombre = prompt("nombre del producto");
  price = parseInt(prompt("precio del producto"));

  try {
    produc.result.push({
      name: nombre,
      price: price,
    });
  } catch (error) {
    alert(error);
  }

  if (!confirm("agregar otro producto?")) {
    break;
  }
} while (true);

let valor = produc.result.reduce((a,b) => a.price += b.price)

alert(`El valor de su factura es de $${valor}`);