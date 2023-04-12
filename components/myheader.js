import config from "./config.js";

export default {
  myworker: new Worker("components/worker/calcular.js", {
    type: "module",
  }),

  show(datos_local) {
    const egresos = document.querySelector("#egresos");
    const ingresos = document.querySelector("#ingresos");
    const total = document.querySelector("#total");
    const porcentaje_ingresos_item = document.querySelector("#ingresos_items");
    const porcentaje_egresos_item = document.querySelector("#egresos_items");
    const table = echarts.init(document.getElementById("table"));
    const myworker = this.myworker;
    myworker.postMessage({ data: datos_local });
    myworker.addEventListener("message", (e) => {
      egresos.innerHTML = "";
      porcentaje_egresos_item.innerHTML = "";
      porcentaje_ingresos_item.innerHTML = "";
      ingresos.innerHTML = "";
      total.innerHTML = "";
      table.innerHTML = "";
      let doc_egresos = new DOMParser().parseFromString(e.data[0], "text/html");
      let doc_porcentaje_egresos_item = new DOMParser().parseFromString(
        e.data[1],
        "text/html"
      );
      let doc_ingresos = new DOMParser().parseFromString(
        e.data[2],
        "text/html"
      );
      let doc_total = new DOMParser().parseFromString(e.data[3], "text/html");
      let doc_porcentaje_ingresos_item = new DOMParser().parseFromString(
        e.data[4],
        "text/html"
      );
      let doc_tables = e.data[5]


      total.appendChild(...doc_total.body.children);
      ingresos.appendChild(...doc_ingresos.body.children);
      egresos.appendChild(...doc_egresos.body.children);
      porcentaje_ingresos_item.appendChild(
        ...doc_porcentaje_ingresos_item.body.children
      );
      porcentaje_egresos_item.appendChild(
        ...doc_porcentaje_egresos_item.body.children
      );
      table.setOption(doc_tables);
    });
  },

  formData() {
    const mydata = document.querySelector("#myformdata");
    mydata.addEventListener("submit", (e) => {
      e.preventDefault();
      let data = Object.fromEntries(new FormData(e.target));

      const datos_local = config.localstoragedata(
        "datos_ingresos",
        JSON.stringify(data)
      );
      this.show(datos_local);
    });
  },
};
