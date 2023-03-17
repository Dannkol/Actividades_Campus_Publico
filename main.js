const myFormularioCampus = document.querySelector("#myFormularioCampus");
const myFormularioasignaturas = document.querySelector("#myFormularioasignaturas");
const myFormulariohorario = document.querySelector("#myFormulariohorario");
const myFormularioPersonas = document.querySelector("#myFormularioPersonas");
const myFormularioteams = document.querySelector("#myFormularioteams")

const opcionesSedes = document.querySelector("[name='sede']");
const opcionesTeams = document.querySelector("[name='teams']");


let campus = {
  sede: ['bogota'],
  teams: ['hola' , 'pepe'],
  trainers: ['migel' , 'jose'],
  fechas: [
   
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

  Build_Camper: function (name, trainer, roadmap, sede, fechas, telefono, direccion, email, nivel) {
    return {
      [name]: {
        sede: this.sede[sede],
        trainer: trainer,
        fechas: this.fechas[fechas],
        roadmap: roadmap,
        telefono: telefono,
        direccion: direccion,
        email : email,
        nivel : nivel
      },
    };
  },
};

campus.Trainer.push([0, 1], [1, 0]);
campus.Roadmap.push([0, 1, 2], [0, 2, 1]);
campus.Camper.push(["daniel", 0, 0,3215486,'giron','pepe@pepe.com',1]);


console.log(...campus.Roadmap[0])

campus.Camper.forEach((data, id) => {
  console.log(
    campus.Build_Camper(
      data[0],
      campus.Build_Trainer(campus.Trainer[id][0], campus.Trainer[id][1]),
      campus.Build_Roadmap(...campus.Roadmap[id]),
      data[1],
      data[2],
      data[3],
      data[4],
      data[5],
      data[6]
    )
  );
});


myFormularioCampus.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  // llenar datos
  if (data.nombreSede != "") {
    campus.sede.push(data.nombreSede);
    //debujar las opciones
    listaSedes(opcionesSedes, campus.sede);
    myFormularioCampus.reset();
    console.log(campus);

    if (!confirm('desea agregar otra sede')) {
      window.location.href = '#datos_trainer'
    }
  } else {
    alert("no deje espacio sin llenar");
  }

});

myFormularioasignaturas.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  console.log(data)
  if (data.asignatura != "") {
    campus.asignsaturas.push(data.asignatura);
  } else {
    alert("no deje espacio sin llenar");
  }
  myFormularioasignaturas.reset();

  console.log(campus);
});


myFormularioteams.addEventListener("submit", (e) => {

  e.preventDefault()
  let data = Object.fromEntries(new FormData(e.target))
  console.log(data)
  if (data.team != "") {
    campus.teams.push(data.team)
    console.log(campus)
    //debujar las opciones
    listaSedes(opcionesTeams,campus.teams);
    myFormularioteams.reset();
    if (!confirm('desea agregar otra sede')) {
      window.location.href = '#datos_horario'
    }
  } else {
    alert("no deje espacio sin llenar");
  }

})



myFormulariohorario.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  if (data.horario != "" && data.team != "") {
/*     {
      "clase": "inlges",
      "teams": "0",
      "dia1": "lunes",
      "dia2": "lunes",
      "horario1": "06:00",
      "horario2": "09:00"
    } */
    campus.fechas.push({
      [data.teams]:{
        [data.clase] : [
          [data.dia1, data.dia2],
          [data.horario1 , data.horario2]
        ]
      }
    })
    console.log(campus)
    /*     console.log(campus.teams[data.teams]) */
/*     campus.fechas.push({
      [data.horario]: data.team,
    }); */
  } else {
    alert("no deje espacio sin llenar");
  }
  myFormulariohorario.reset();

  console.log(campus);
});



let listaSedes = (element,datos) => {
  console.log(datos)
  element.innerHTML = null;
  for (let val in datos) {
    element.insertAdjacentHTML(
      "beforeend",
      `
          <option value="${val}">${datos[val]}</option>
        `
    );
  }
};

myFormularioPersonas.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));

  let sede = data.sede;
  console.log(sede);
  /*   delete data.sede;
  campus[`${sede}`]["Camper"].unshift(data);
  console.log(campus);
  myFormularioPersonas.reset(); */
});
