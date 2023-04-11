/* 

    data 
        [
            {
            "tipo_gasto": "-",
            "Descripcion": "comida",
            "valor": "10000"
            },
            {
            "tipo_gasto": "+",
            "Descripcion": "salario",
            "valor": "10000"
            },
            {
            "tipo_gasto": "-",
            "Descripcion": "arroz",
            "valor": "10000"
            },
            {
            "tipo_gasto": "-",
            "Descripcion": "sopa",
            "valor": "10000"
            },
            {
            "tipo_gasto": "+",
            "Descripcion": "sopa",
            "valor": "10000"
            }
        ]

*/

const opter = {
  suma(data) {
    data = data.filter((itme) => itme.tipo_gasto === "+");
    return data.reduce((acc, item) => acc + parseFloat(item.valor), 0);
  },

  resta(data) {
    data = data.filter((itme) => itme.tipo_gasto === "-");
    return data.reduce((acc, item) => acc - parseFloat(item.valor), 0);
  },
  porcentaje_egresos(data, resta, suma) {
    let plantilla = "";
    plantilla = ` 
      <div class="card-body d-flex justify-content-between bg-danger p-1"><p class="m-0 p-2">EGRESOS</p>
      <p class="m-0 p-2">${data.reduce(
        (acc, item) => acc + parseFloat(item.valor),
        0
      )}</p>
      <div
        class="alert text-center alert-danger p-0 m-0 fs-6 w-auto h-50"
        role="alert"
      >
      ${((resta * 100) / Math.abs(suma - resta)).toFixed(2)}%
      </div></div>
    `;
    return plantilla;
  },
  porcentaje_egresos_item(data) {
    console.log(data)
    let plantilla = `
      <table class="table table-striped">
        <thead>
          <tr>
            <th>EGRESOS</th>
          </tr>
        </thead>
        <tbody >
          ${data
            .map((element, id) => {
              return element.tipo_gasto === "-"
                ? `${console.log(id)} <tr>
                <td class="data_table">
                  <div
                    class="delet_animation card d-flex flex-row flex-nowrap justify-content-center  border-0 bg-transparent"
                  >
                    <div
                      class=" d-flex  justify-content-between align-content-center p-0"
                      style="width: 260px"
                    > 
                    <p class="m-0 p-2">${element.Descripcion}</p>
                        <p class="m-0 p-2">${parseFloat(element.valor)}</p>
                        <div
                          class="alert text-center alert-danger p-0 m-0 fs-6 w-auto h-75"
                          role="alert"
                        >
                        ${(
                          (parseFloat(element.valor) * 100) /
                          data.reduce(
                            (acc, item) => acc + parseFloat(item.valor),
                            0
                          )
                        ).toFixed(2)}%
                        </div>
                      </div>
                        <div class="icon_close w-25 h-auto" >
                          <span id="egresos" data-id="${id}" class=" material-symbols-outlined"> close </span>
                          </div>
                          </div>
                        </td>
                      </tr>`
                : "";
            })
            .join("")}
        
        </tbody>
    </table>
    
    `;

    return plantilla;
  },
  porcentaje_ingresos(data) {
    let plantilla = `
    <div class="card-body d-flex justify-content-between bg-primary p-1">
      <p class="m-0 p-2">INGRESOS</p>
      <p class="m-0 p-2">$${data.reduce(
        (acc, item) => acc + parseFloat(item.valor),
        0
      )}</p>
    </div>
    `;
    return plantilla;
  },
  porcentaje_ingresos_item(data) {
    let plantilla = `
      <table class="table table-striped">
        <thead>
          <tr>
            <th>INGRESOS</th>
          </tr>
        </thead>
        <tbody >
          ${data
            .map((element, id) => {
              return element.tipo_gasto === "+"
                ? `<tr>
                <td class="data_table">
                  <div
                    class="delet_animation card d-flex flex-row flex-nowrap justify-content-center  border-0 bg-transparent"
                  >
                    <div
                      class=" d-flex  justify-content-between align-content-center p-0"
                      style="width: 260px"
                    > 
                    <p class="m-0 p-2">${element.Descripcion}</p>
                        <p class="m-0 p-2">${parseFloat(element.valor)}</p>
                        <div
                          class="alert text-center alert-danger p-0 m-0 fs-6 w-auto h-75"
                          role="alert"
                        >
                        ${(
                          (parseFloat(element.valor) * 100) /
                          data.reduce(
                            (acc, item) => acc + parseFloat(item.valor),
                            0
                          )
                        ).toFixed(2)}%
                        </div>
                      </div>
                        <div class="icon_close w-25 h-auto" >
                          <span id="ingresos" data-id="${id}" class=" material-symbols-outlined"> close </span>
                          </div>
                          </div>
                        </td>
                      </tr>`
                : "";
            })
            .join("")}
        
        </tbody>
    </table>
    
    `;

    return plantilla;
  },

  total(ingresos, egresos) {
    let plantilla = `
      <div>
        <h6>Presupuesto Disponible</h6>
        <h1>${ingresos + egresos}</h1>
      </div>
    
    `;
    return plantilla;
  },
};

const draw_data = {};

self.addEventListener("message", (e) => {
  let data = JSON.parse(e.data.data);
  data = data.map((item) => JSON.parse(item));
  let data_egresos = data.filter((itme) => itme.tipo_gasto === "-");
  let data_ingresos = data.filter((itme) => itme.tipo_gasto === "+");

  postMessage([
    opter.porcentaje_egresos(data_egresos, opter.resta(data), opter.suma(data)),
    opter.porcentaje_egresos_item(data),
    opter.porcentaje_ingresos(data_ingresos),
    opter.total(opter.resta(data_egresos), opter.suma(data_ingresos)),
    opter.porcentaje_ingresos_item(data),
  ]);
});
