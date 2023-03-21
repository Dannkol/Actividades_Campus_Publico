/*Formularios necesarios */
const myFormularioCampus = document.querySelector("#myFormularioCampus");
const myFormularioasignaturas = document.querySelector("#myFormularioasignaturas");
const myFormulariohorario = document.querySelector("#myFormulariohorario");
const myFormularioPersonas = document.querySelector("#myFormularioPersonas");
const myFormularioteams = document.querySelector("#myFormularioteams");
const myFormularioBuildRoadmap = document.querySelector('#myFormularioBuildRoadmap');
const myFormulariobuildtrainer = document.querySelector('#myFormulariobuildtrainer');
const myFormulariotrainer = document.querySelector('#myFormulariotrainer')

/*Opciones en los selectores */
const opcionesSedes = document.querySelector("[name='sede']");
const opcionesTeams = document.querySelectorAll("[name='teams']");
const opcionesAsignaturas = document.querySelectorAll("[name='asignaturas']");
const opcionesRoadmap = document.querySelector("[name='roadmap']");
const opcionesTrainers = document.querySelector("[name='trainers']");
const opcionesConsulta = document.querySelector("[name='consulta']")

/* Consultas */
const consultas = document.querySelector(".consultas")

/*Seleccion de filtros */
const filter_camper = document.querySelector("[name='filter_camper']");
const filter_teams = document.querySelector("[name='filter_teams']");

/*Funcionalidades */
const addasignature = document.querySelectorAll("#addasignature");

/*DOM */
const asignaturaslabel = document.querySelectorAll(".asignaturas");
const consulta_preestablecidas = document.querySelector(".consulta_preestablecidas")

let opciones = [];



let listas = (element, datos) => {
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

let add_btn = (element, datos) => {
  element.innerHTML = null;
  for (let val in datos) {
    element.insertAdjacentHTML(
      "beforeend",
      `
      <p data-from="opciones" data-value="${val}">${campus.asignsaturas[datos[val]][0]}</p>
      `
    );
  }
}

let remove_btn = (elementdelet, datos) => {
  opciones.splice(parseInt(datos.value), 1);
  add_btn(elementdelet, opciones);

}


let campus = {
  /*
    nombresede: ['direccion', 'telefono']
  */
  sede: [],
  teams: [],
  trainers: [],

  // Estructura de las fechas
  // {
  //   "1": {
  //     "inlges": [
  //       [
  //         "lunes",
  //         "lunes"
  //       ],
  //       [
  //         "04:08",
  //         "07:08"
  //       ]
  //     ]
  //   }
  // },
  // {
  //   "1": {
  //     "software_skill": [
  //       [
  //         "miercoles",
  //         "jueves"
  //       ],
  //       [
  //         "02:08",
  //         "04:08"
  //       ]
  //     ]
  //   }
  // },
  // {
  //   "0": {
  //     "ser": [
  //       [
  //         "miercoles",
  //         "lunes"
  //       ],
  //       [
  //         "04:08",
  //         "04:08"
  //       ]
  //     ]
  //   }
  // },
  // {
  //   "0": {
  //     "inlges": [
  //       [
  //         "miercoles",
  //         "lunes"
  //       ],
  //       [
  //         "04:08",
  //         "15:10"
  //       ]
  //     ]
  //   }
  // },
  // {
  //   "0": {
  //     "software_skill": [
  //       [
  //         "lunes",
  //         "lunes"
  //       ],
  //       [
  //         "02:07",
  //         "16:07"
  //       ]
  //     ]
  //   }
  // }

  fechas: [
    
  ],
  /*
    primer valor nombre, segundo presencial, sanbox  
    
    0 -> si y 1 -> no 
  
    */
  asignsaturas: [],


  /*Almacena datos para los contructores almacenando los indices los atributos */
  Roadmap: [],
  Trainer: [],
  Camper: [],


  Empresas: {
    Mexico: {
      nombre: "google mx",
      address: "Ciudad de mexico",
      phone: "+516891166",
      contratos: 20,
      campers_contratados: 10

    },
    India: {
      nombre: "TikTok",
      address: "nueva deli",
      phone: "+8256891166",
      contratos: 5,
      campers_contratados: 2

    },

    USA: {
      nombre: "META",
      address: "San Francisco",
      phone: "+785785",
      contratos: 5,
      campers_contratados: 2

    },

    Colombia: {
      nombre: "TikTok",
      address: "Bogoya",
      phone: "+57158288",
      contratos: 11,
      campers_contratados: 2

    },

    Chile: {
      nombre: "TikTok",
      address: "santigo",
      phone: "+8256891166",
      contratos: 5,
      campers_contratados: 2

    },
    Canada: {
      nombre: "Tesla",
      address: "toronto",
      phone: "+882568558",
      contratos: 5,
      campers_contratados: 2

    },

    Argentina: {
      nombre: "Globant",
      address: "Rio de la plata",
      phone: "+78562",
      contratos: 51,
      campers_contratados: 30

    },

  },

  Build_Roadmap: function (name, creditos, año, ...items) {
    return {
      name: name,
      año: año,
      creditos: creditos,
      asignsaturas: items.map((data) => {
        return (
          this.asignsaturas[data]
        )
      })
    };
  },

  Build_Trainer: function (name, ...asignsatura) {
    return {
      name: this.trainers[name],
      asignsatura: asignsatura.map((data) => {
        return (
          this.asignsaturas[data]
        )
      })
    };
  },

  Build_Camper: function (roadmap, name, sede, fechas, telefono, direccion, email, nivel, salon, transporte) {
    return {
      [name]: {
        sede: this.sede[sede],
        fechas: this.fechas.filter(data => {
          return data[fechas] != undefined
        }),
        roadmap: roadmap,
        telefono: telefono,
        direccion: direccion,
        email: email,
        nivel: nivel,
        salon: salon,
        transporte: transporte == 0 ? 'si' : 'no',
      },
    };
  },
};


for (data in campus.Empresas) {
  consulta_preestablecidas.insertAdjacentHTML('beforeend',

    `

       <div>
         <h5>${data}</h5>
           <ul>
             <li>Dirreccion : ${campus.Empresas[data].nombre}</li>
             <li>Telefono : ${campus.Empresas[data].phone} </li>
             <li>Contratos : ${campus.Empresas[data].contratos} </li>
             <li>Campers trabajando :${campus.Empresas[data].campers_contratados} </li>
             </ul>
       </div>

  `
  )
}





// dibujo del camper
// campus.Camper.forEach((data) => {
//   const [name, index1, index2, index3, ...rest] = data;
//   const roadmap = campus.Build_Roadmap(index1);
//   const camper = campus.Build_Camper(roadmap,
//     name,
//     index2,
//     index3,
//     ...rest
//   );
// });


myFormularioCampus.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  // llenar datos
  if (data.nombreSede != "") {
    campus.sede.unshift({
      [data.nombreSede]: [data.direccion, data.tel]
    });
    //debujar las opciones
    let sedes = campus.sede;
    let ciudades = [];

    for (let i = 0; i < sedes.length; i++) {
      const ciudad = Object.keys(sedes[i])[0];
      ciudades.push(ciudad);
    }
    listas(opcionesSedes, ciudades);
    myFormularioCampus.reset();

    if (!confirm('¿Quieres agregar otro item?')) {
      window.location.href = '#datos_asignaturas'
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
    campus.asignsaturas.unshift([data.asignatura, data.tipo_formacion, data.sandox]);
    if (!confirm('¿Quieres agregar otro item?')) {
      window.location.href = '#datos_teams'
    }
    let asignsaturas = campus.asignsaturas.map(subArray => subArray[0])
    opcionesAsignaturas.forEach(data => listas(data, asignsaturas));
    myFormularioasignaturas.reset();
  } else {
    alert("no deje espacio sin llenar");
  }


});

myFormularioteams.addEventListener("submit", (e) => {
  e.preventDefault()
  let data = Object.fromEntries(new FormData(e.target))
  console.log(data)
  if (data.team != "") {
    campus.teams.unshift(data.team)
    console.log(campus)
    //dibujar las opciones
    opcionesTeams.forEach((data) => listas(data, campus.teams));
    myFormularioteams.reset();
    if (!confirm('¿Quieres agregar otro item?')) {
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
    /* Ejemplo de la estructura del dato que llega del formulario
        {
          "clase": "inlges",
          "teams": "0",
          "dia1": "lunes",
          "dia2": "lunes",
          "horario1": "06:00",
          "horario2": "09:00"
        } */
    /*Dato insertado en el obajeto */
    campus.fechas.unshift({
      [data.teams]: {
        [data.clase]: [
          [data.dia1, data.dia2],
          [data.horario1, data.horario2]
        ]
      }
    })
    myFormulariohorario.reset();
    if (!confirm('¿Quieres agregar otro item?')) {
      window.location.href = '#datos_roadmap'
    }

  } else {
    alert("no deje espacio sin llenar");
  }
});


myFormularioBuildRoadmap.addEventListener("submit", (e) => {
  e.preventDefault()
  let data = Object.fromEntries(new FormData(e.target))
  if (data.nombre != '' && data.creditos != '' && data.años != '' && opciones != []) {
    campus.Roadmap.unshift([data.nombre, parseInt(data.creditos), parseInt(data.año), ...opciones])
    let nombres = campus.Roadmap.map(subArray => subArray[0])
    listas(opcionesRoadmap, nombres)
    myFormularioBuildRoadmap.reset()
    if (!confirm('¿Quieres agregar otro item?')) {
      opciones = []
      window.location.href = '#datos_trainer'
    }
  }
  else {
    alert("no deje espacio sin llenar");
  }
})

myFormulariotrainer.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  if (data.name != '') {
    campus.trainers.unshift(data.name);
    myFormulariotrainer.reset();
    listas(opcionesTrainers, campus.trainers);
    if (!confirm('¿Quieres agregar otro item?')) {
      window.location.href = '#datos_Build_trainer'
    }
  }
  else {
    alert("no deje espacio sin llenar");
  }

})

myFormulariobuildtrainer.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target))

  campus.Trainer.unshift([parseInt(data.trainers), ...opciones])
  if (!confirm('¿Quieres agregar otro item?')) {
    window.location.href = '#datos_camper'
  }

})

asignaturaslabel[0].addEventListener("click", (e) => {
  console.log(e.target.dataset)
  remove_btn(asignaturaslabel[0], e.target.dataset)
})

asignaturaslabel[1].addEventListener("click", (e) => {
  console.log(e.target.dataset)
  remove_btn(asignaturaslabel[1], e.target.dataset)
})

addasignature[0].addEventListener("submit", (e) => {
  e.preventDefault()
  let data = Object.fromEntries(new FormData(e.target))
  opciones.unshift(parseInt(data.asignaturas))
  add_btn(asignaturaslabel[0], opciones)
  addasignature[0].reset()
})
addasignature[1].addEventListener("submit", (e) => {
  e.preventDefault()
  let data = Object.fromEntries(new FormData(e.target))
  opciones.unshift(parseInt(data.asignaturas))
  add_btn(asignaturaslabel[1], opciones)

  addasignature[0].reset()
})



myFormularioPersonas.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));

  console.log(data);

  /*
    entrada de datos
  {
    "sede": "0",
    "roadmap": "1",
    "teams": "1",
    "transporte": "1",
    "name": "daniel",
    "tel": "216512",
    "address": "dsfsdfe",
    "email": "fabioalberto1@aol.com",
    "salon": "wrdsdafw"
    "nivel": "4"
  }
Build_Camper: function (name, roadmap, sede, fechas, telefono, direccion, email, nivel,salon,transporte)
  */
  campus.Camper.unshift([data.name, parseInt(data.roadmap), parseInt(data.sede), parseInt(data.teams), parseInt(data.tel), data.address, data.email, parseInt(data.nivel), data.salon.toLocaleLowerCase(), parseInt(data.transporte)]);
  /*   delete data.sede;
  campus[`${sede}`]["Camper"].unshift(data);
  console.log(campus);
  myFormularioPersonas.reset(); */

  campus.Camper.forEach((data) => {
    console.log(
      campus.Build_Camper(
        campus.Build_Roadmap(...campus.Roadmap[data[1]]),
        ...data
      )
    );
  });
});

/* Consultas y filtros */

opcionesConsulta.addEventListener("change", (e) => {

  console.log(e.target.value)
  switch (e.target.value) {
    case 'campers':
      consultas.innerHTML = null;
      consultas.insertAdjacentHTML("beforeend",
        `
        <div id="consulta_Campers">
        <label>filtrar campers</label>
        <select name="filter_camper">
          <option value="all">Todo</option>
          <option value="Transporte_si">
            Solo los que tienen transporte
          </option>
          <option value="Transporte_no">
            Solo los que no tienen transporte
          </option>
        </select>
        <input type="submit" value="filtrar">
        </div>
        `
      )

      break;
    case 'Trainer':
      consultas.innerHTML = null;
      consultas.insertAdjacentHTML("beforeend",
        `
        <div id="consulta_trainer">
        <label>filtrar sedes</label>
        <select name="filter_trainer">
          <option value="all">Todo</option>
          <option value="Presencial">Trabajan presencial</option>
          <option value="Virtual">Trabajan Virtual</option>
          <option value="Sanbox_si">Tiene Sanbox</option>
          <option value="Sanbox_no">No tiene Sanbox</option>
        </select>
        <input type="submit" value="filtrar">
      </div>
        `
      )
      break;
    case 'sedes':
      consultas.innerHTML = null;
      let sedes = campus.sede;
      let ciudades = [];

      for (let i = 0; i < sedes.length; i++) {
        const ciudad = Object.keys(sedes[i])[0];
        ciudades.push(ciudad);
      }

      consultas.insertAdjacentHTML("beforeend",
        `
        <div id="consulta_sedes">
          <label>filtrar sedes</label>
          <select name="sede">
            ${ciudades.map((item, index) => {
          return `<option value="${index}">${item}</option>`
        })
        }
          </select>
          <input type="submit" value="filtrar">
        </div>
      
      `
      )

      break;
    default:
      break;
  }
})


let drawcamper_transporte = (datos, element) => {
  datos.forEach((data) => {
    const [name, index1, index2, index3, ...rest] = data;
    const roadmap = campus.Build_Roadmap(index1);
    const camper = campus.Build_Camper(roadmap,
      name,
      index2,
      index3,
      ...rest
    );
    const nombre = Object.keys(camper)[0]
    const { [nombre]: { transporte, direccion, telefono } } = camper;

    element.insertAdjacentHTML("beforeend",

      `
      <div class="p-4">
        <p>
          <spam>Nombre :</spam><h5>${nombre}</h5>
          <label>Direccion: </label><address>${direccion}</address>
          <label>telefono: </label><p>${telefono}</p>
          <label>transporte: </label><p>${transporte}</p>
        </p>
      </div>
      `

    )
  });
}

let drawcamper_all = (datos, element) => {
  datos.forEach((data) => {
    const [name, index1, index2, index3, ...rest] = data;
    const Roadmap = campus.Build_Roadmap(...campus.Roadmap[index1]);
    const camper = campus.Build_Camper(Roadmap,
      name,
      index2,
      index3,
      ...rest
    );
    const nombre = Object.keys(camper)[0]
    const { [nombre]: { transporte, direccion, telefono, fechas, roadmap, nivel, salon } } = camper;

    element.insertAdjacentHTML("beforeend",

      `
      <div class="p-4">
          <p>
            <spam>Nombre :</spam><h5>${nombre}</h5>
            <label>Direccion: </label><address>${direccion}</address>
            <label>telefono: </label><p>${telefono}</p>
            <label>transporte: </label><p>${transporte}</p>
            <label>Team: </label><p>${campus.teams[data[3]]}</p>
            <labal>Roadmap: </label><p>${roadmap.name}</p>
            <label>salon: </label><p>${salon}</p>
            <label>nivel: </label><p>${nivel}</p>
          </p>
      </div>
      `

    )
    console.log(roadmap)
    // Object.values(fechas).forEach(data => console.log(data))

  });
}

let drawtrainer_all = (data, element) => {
  data.forEach((item) => {
    const { name, asignsatura } = campus.Build_Trainer(...item)
    // const {trainer : {name , asignatura}} = obajeto
    asignsatura.forEach(asignsaturas => {
      const [nombre, tipo_formacion, sanbox] = asignsaturas

      element.insertAdjacentHTML("beforeend",
        `
        <div class="p-4">
          <p>
            <spam>Nombre del trainer :</spam><h5>${name}</h5>
            <label>Asignatura: </label><address>${nombre}</address>
            <label>Formacion: </label><p>${tipo_formacion == 0 ? 'Presencial' : 'Vitural'}</p>
            <label>Sandbox: </label><p>${sanbox == 0 ? 'si' : 'no'}</p>
          </p>
      </div>
        `

      )
    })

  })
}


let drawtrainer_tipodeformacion = (data, element, opciones) => {
  data.forEach((item) => {
    const { name, asignsatura } = campus.Build_Trainer(...item)
    asignsatura.forEach(asignsaturas => {
      const [nombre, tipo_formacion, sanbox] = asignsaturas
      console.log([nombre, tipo_formacion, sanbox], opciones)
      switch (opciones) {
        case "Presencial":
          if (tipo_formacion == 0) {
            element.insertAdjacentHTML("beforeend",
              `
              <div class="p-4">
                <p>
                  <spam>Nombre del trainer :</spam><h5>${name}</h5>
                  <label>Asignatura: </label><address>${nombre}</address>
                  <label>Formacion: </label><p>${tipo_formacion == 0 ? 'Presencial' : 'Vitural'}</p>
                  <label>Sandbox: </label><p>${sanbox == 0 ? 'si' : 'no'}</p>
                </p>
            </div>
              `

            )
          }
          break;

        case "Virtual":
          if (tipo_formacion == 1) {
            element.insertAdjacentHTML("beforeend",
              `
                <div class="p-4">
                  <p>
                    <spam>Nombre del trainer :</spam><h5>${name}</h5>
                    <label>Asignatura: </label><address>${nombre}</address>
                    <label>Formacion: </label><p>${tipo_formacion == 0 ? 'Presencial' : 'Vitural'}</p>
                    <label>Sandbox: </label><p>${sanbox == 0 ? 'si' : 'no'}</p>
                  </p>
                </div>
            `

            )
          }

          break;
        case "Sanbox_si":
          if (sanbox == 0) {
            element.insertAdjacentHTML("beforeend",
              `
            <div class="p-4">
              <p>
                <spam>Nombre del trainer :</spam><h5>${name}</h5>
                <label>Asignatura: </label><address>${nombre}</address>
                <label>Formacion: </label><p>${tipo_formacion == 0 ? 'Presencial' : 'Vitural'}</p>
                <label>Sandbox: </label><p>${sanbox == 0 ? 'si' : 'no'}</p>
              </p>
          </div>
            `

            )
          }

          break;
        case "Sanbox_no":
          if (sanbox == 1) {
            console.log(sanbox)
            element.insertAdjacentHTML("beforeend",
              `
            <div class="p-4">
              <p>
                <spam>Nombre del trainer :</spam><h5>${name}</h5>
                <label>Asignatura: </label><address>${nombre}</address>
                <label>Formacion: </label><p>${tipo_formacion == 0 ? 'Presencial' : 'Vitural'}</p>
                <label>Sandbox: </label><p>${sanbox == 0 ? 'si' : 'no'}</p>
              </p>
          </div>
            `

            )
          }

          break;
        default:
          break;
      }


    })

  })
}

let drawtrainer_sedes = (datos, element) => {
  console.log(campus.sede[datos])
  let key = Object.keys(campus.sede[datos])
  const { [key]: [direccion, tel] } = campus.sede[datos]
  element.insertAdjacentHTML("beforeend",
    `
      <div class="p-4">
        <p>
          <spam>Ciudad de la sede :</spam><h5>${key}</h5>
          <label>direccion: </label><address>${direccion}</address>
          <label>telefono: </label><p>${tel}</p>
        </p>
      </div>
    `
  )
}

consultas.addEventListener("submit", (e) => {
  e.preventDefault()
  let data = Object.fromEntries(new FormData(e.target))
  let resultado = document.querySelector(".resultado")
  resultado.innerHTML = null;
  console.log(Object.keys(data))
  let filteredCampers
  switch (data.filter_camper) {
    case "Transporte_si":
      filteredCampers = campus.Camper.filter(camper => camper[camper.length - 1] === 0);
      drawcamper_transporte(filteredCampers, resultado)
      break;
    case "Transporte_no":
      filteredCampers = campus.Camper.filter(camper => camper[camper.length - 1] === 1);
      drawcamper_transporte(filteredCampers, resultado)
      break;

    case "all":
      drawcamper_all(campus.Camper, resultado)

      break;

    default:
      break;
  }
  switch (data.filter_trainer) {
    case "Transporte_si":
      filteredCampers = campus.Camper.filter(camper => camper[camper.length - 1] === 0);
      drawcamper_transporte(filteredCampers, resultado)
      break;
    case "Transporte_no":
      filteredCampers = campus.Camper.filter(camper => camper[camper.length - 1] === 1);
      drawcamper_transporte(filteredCampers, resultado)
      break;

    case "all":
      drawtrainer_all(campus.Trainer, resultado)

      break;
    case "Presencial":
      drawtrainer_tipodeformacion(campus.Trainer, resultado, "Presencial")
      break;
    case "Virtual":
      drawtrainer_tipodeformacion(campus.Trainer, resultado, "Virtual")
      break;
    case "Sanbox_si":
      drawtrainer_tipodeformacion(campus.Trainer, resultado, "Sanbox_si")
      break;
    case "Sanbox_no":
      drawtrainer_tipodeformacion(campus.Trainer, resultado, "Sanbox_no")
      break;
    default:
      break;
  }

  switch (Object.keys(data)[0]) {
    case "sede":
      drawtrainer_sedes(data.sede, resultado)
      break;

    default:
      break;
  }

})
