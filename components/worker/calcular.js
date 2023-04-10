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
    return data.reduce((acc, item) => acc + parseFloat(item.valor), 0);
  },

  resta(data) {
    return data.reduce((acc, item) => acc - parseFloat(item.valor), 0);
  },
  porcentaje_egresos(data, resta, suma) {
    console.log(resta , suma);
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
    data.forEach((item) => console.log(item));

    let plantilla = "";

    plantilla += data
      .map((element, id) => {
        return `<tr>
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
                  data.reduce((acc, item) => acc + parseFloat(item.valor), 0)
                ).toFixed(2)}%
                </div>
                
              </div>
              <div class="icon_close w-25 h-auto " id="${id}">
                <span class=" material-symbols-outlined"> close </span>
              </div>
            </div>
          </td>
        </tr>
        `;
      })
      .join("");
    console.log(plantilla);
    return plantilla;
  },
  total(ingresos, egresos) {
    return ingresos + egresos;
  },
};

const draw_data = {};

self.addEventListener("message", (e) => {
  let data = JSON.parse(e.data.data);
  data = data.map((item) => JSON.parse(item));
  let data_egresos = data.filter((itme) => itme.tipo_gasto === "-");
  let data_ingresos = data.filter((itme) => itme.tipo_gasto === "+");
  let total = opter.total(opter.resta(data_egresos), opter.suma(data_ingresos));

  postMessage([
    opter.resta(data_egresos),
    opter.suma(data_ingresos),
    opter.porcentaje_egresos(
      data_egresos,
      opter.resta(data_egresos),
      opter.suma(data_ingresos)
    ),
  ]);
});
