let estudiantes = {
  resul: [],
};

do {
  let nombre = prompt("nombre");
  let sex = prompt("sexo del estudiante f o m").toLocaleLowerCase();
  let age = parseInt(prompt("edad del estudiante"));
  try {
    estudiantes.resul.push({ name: nombre, sexo: sex, edad: age });
  } catch (error) {
    alert(`Dato : ${error}`);
  }

  if (!confirm("¿Desea Continuar?")) {
    break;
  }
} while (true);

let maxval = Math.max(...estudiantes.resul.map((x) => parseInt(x.edad)));

let valor = estudiantes.resul.filter((x) => x.edad == maxval);

alert('persona o personas mayores son')

for (let i = 0; i < valor.length; i++) {
  alert(`nombre ${valor[i].name} y edad ${valor[i].edad}`);
}


alert(`la cantidad de mujeres es ${estudiantes.resul.filter(x => x.sexo == 'f').length}`)