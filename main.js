const myFormularioCampus = document.querySelector("#myFormularioCampus");
const myFormularioPersonas = document.querySelector("#myFormularioPersonas");

const opciones = document.querySelectorAll("[name='sede']");

let campus = {
  sede: [],
  trainers: ["miguel",'yolver'],
  fechas: [
    {
      "9-10": "team1",
    },
  ],

  asignsaturas: ["taller 1", "taller 2", "matematicas"],

  Roadmap: [],
  Trainer: [],
  Camper: [],

  Build_Roadmap: function (item1, item2, item3) {
    return {
      asignsatura1: this.asignsaturas[item1],
      asignsatura2: this.asignsaturas[item2],
      asignsatura3: this.asignsaturas[item3],
    };
  },

  Build_Trainer: function (name, asignsatura) {
    return {
      name: this.trainers[name],
      asignsatura: this.asignsaturas[asignsatura],
    };
  },

  Build_Camper: function (name, trainer, roadmap, sede, fechas) {
    return {
      [name]: {
        sede: this.sede[sede],
        trainer: trainer,
        fechas: this.fechas[fechas],
        roadmap: roadmap,
        telefono: "",
        direccion: "",
      },
    };
  },
};

campus.Trainer.push([0,1],[1,0])
campus.Roadmap.push([0,1,2],[0,2,1])
campus.Camper.push(["daniel", 0, 0, 0, 0]);
campus.Camper.push(["juan", 0, 0, 0, 0]);

campus.Camper.forEach((data , id) => {
  console.log(
    campus.Build_Camper(
      data[0],
      campus.Build_Trainer(campus.Trainer[id][0], campus.Trainer[id][1]),
      campus.Build_Roadmap(data[id][3], data[id][4], data[id][5]),
      data[6],
      data[7]
    )
  );
});

console.log(campus.Camper);

myFormularioCampus.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  campus.sede.push(data.nombreSede);
  opciones.forEach((data) => listaSedes(data));
  myFormularioCampus.reset();
  console.log(campus.sede);
});

let listaSedes = (element) => {
  element.innerHTML = null;
  for (let val in campus.sede) {
    element.insertAdjacentHTML(
      "beforeend",
      `
            <option value="${val}">${campus.sede[val]}</option>
        `
    );
  }
};

myFormularioPersonas.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  console.log(data);
  let sede = data.sede;
  delete data.sede;
  campus[`${sede}`]["Camper"].unshift(data);
  console.log(campus);
  myFormularioPersonas.reset();
});
