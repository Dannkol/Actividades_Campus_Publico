let persona = {
  personas: [],
  edades: [],
};

do {
  try {
    persona.personas.push(prompt("ingrese el nombre de la persona"));
    persona.edades.push(parseInt(prompt("ingrese la edad de la persona")));
  } catch (error) {
    alert(`Dato no conocido : ${error}`);
  }

  if (!confirm("¿Desea Continuar?")) {
    break;
  }
} while (true);

alert(
  `la persona con mayor edad es ${
    persona.personas[persona.edades.indexOf(Math.max(...persona.edades))]
  } con ${Math.max(...persona.edades)}`
);
