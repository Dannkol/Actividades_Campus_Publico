let atleta = {
  result: new Array(),
};

const record = 15.50

do {
  nombre = prompt("nombre de la atleta");
  salto = parseFloat(prompt("salto en metros"));

  try {
    atleta.result.push({
      name: nombre,
      salto: salto,
    });
  } catch (error) {
    alert(error);
  }

  if (!confirm("agregar otra atleta?")) {
    break;
  }
} while (true);

let maxval = Math.max(...atleta.result.map((x) =>x.salto));
let valor = atleta.result.filter((x) => x.salto == maxval);
alert('Las o la atleta que mayor es o son')
for (let i = 0; i < valor.length; i++) {
    if(valor.salto > record){
        alert(`nombre ${valor[i].name}, con un salto de ${valor[0].salto} rompio el record y gana 500 millones`);
    }
    alert(`nombre ${valor[i].name}, con un salto de ${valor[0].salto}`);
}

