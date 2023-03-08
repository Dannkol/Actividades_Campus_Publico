const notas = {
  Tradicional: [
    [99, 100],
    [80, 89],
    [70, 79],
    [60, 69],
    [1, 60],
  ],
  Point: [
    [12, 14],
    [9, 11],
    [6, 8],
    [3, 5],
    [1, 2],
  ],
  Letter: ["A", "B", "C", "D", "E", "F"],
};

console.table(notas);

let tipo = prompt(
  "elige el tipo de nota 1.tradiciona 2.Puntos del 0-14 3.Letras"
);

function errors(msg) {
  alert(msg);
  window.location.reload();
}

function ordenar(val) {
  try {
    val = val
      .map((data) => data.sort())
      .join(",")
      .split(",")
      .sort((a, b) => a - b);
    return `desde ${val[0]} hasta ${val[val.length - 1]}`;
  } catch (error) {
    val = val.sort();
    return `desde ${val[0]} hasta ${val[val.length - 1]}`;
  }
}

let notaest = prompt(
  `Escribe la nota del estudiantes ${
    tipo == 1
      ? ordenar(notas.Tradicional)
      : tipo == 2
      ? ordenar(notas.Point)
      : tipo == 3
      ? ordenar(notas.Letter)
      : errors("Tipo de nota no encontrada")
  }`
);

tipo = parseInt(tipo);

function Numeroentre(numeroinicio, numerofinal, numero) {
  return numero >= numeroinicio && numero <= numerofinal;
}

function Notaensbg(index) {
  switch (index) {
    case 0:
      return "Nota en sbg es 5, El estudiante consige una beca para el siguiente semestre";
      break;
    case 1:
      return "Nota en sbg es 4, El estudiante es axectable";
      break;
    case 2:
      return "Nota en sbg es 3, El estudiante queda en condicional";
      break;
    case 3:
      return "Nota en sbg es 2, El estudiante es desendido";
      break;
    case 4:
      return "Nota en sbg es 1, El estudiante es suspendido";
      break;
    default:
      return "Nota en sbg es 0, El estudiante queda PFC";
  }
}

const calular = (nota) => {
  if (notaest == 0) {
    return "Nota en sbg es 0, El estudiante queda PFC";
  }
  nota.forEach((data, index) => {
    return Numeroentre(data[0], data[1], notaest)
      ? (nota = Notaensbg(index))
      : false;
  });
  return nota;
};

const Letter = (nota) => {
  nota.forEach((data, index) => {
    data === notaest.toUpperCase() ? (nota = Notaensbg(index)) : false;
  });
  return nota;
};

switch (tipo) {
  case 1:
    notaest = parseInt(notaest);
    alert(calular(notas.Tradicional));
    break;
  case 2:
    notaest = parseInt(notaest);
    alert(calular(notas.Point));
    break;
  case 3:
    alert(Letter(notas.Letter));
  default:
    break;
}
