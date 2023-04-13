//Elementos

const colors = document.querySelector('[type="color"]');
const material = document.querySelector("#material");
const marca = document.querySelector("#marca");
const borrador = document.querySelector("#borrador");
const input = document.querySelector('[type="range"]');
const radio = document.querySelectorAll('[type="radio"]');

class lapiz {
  #marca;
  constructor({
    color = "#FF0000",
    dimension = 19,
    borrador = true,
    material = "Madera",
    marca = "Big",
  }) {
    this.color = color;
    this.dimension = dimension;
    this.borrador = borrador;
    this.material = material;
    this.#marca = marca;
  }

  getMarca() {
    return this.#marca;
  }
  setMarca({ marca }) {
    this.#marca = marca;
    return this.getMarca();
  }
  setAll({
    color = this.color,
    dimension = this.dimension,
    borrador = this.borrador,
    material = this.material,
    marca = this.marca,
  }) {
    this.#marca = marca;
    this.color = color;
    this.dimension = dimension;
    this.borrador = borrador;
    this.material = material;
    return;
  }
  getAll() {
    return {
      color: this.color,
      dimension: this.dimension,
      borrador: this.borrador,
      material: this.material,
      marca: this.#marca,
    };
  }
}

//funciones

function showtable(data) {
  /* 
    
    {
        "color": "#ff0000",
        "dimension": "19",
        "marca": "Big",
        "borrador": "true",
        "material": "Madera"
    }

    */

  let table = document.querySelector("tbody");
  table.insertAdjacentHTML(
    "afterend",
    `
    
    <tr>
        <td style="background-color : ${data.color}"></td>
        <td>${data.dimension}</td>
        <td>${data.marca}</td>
        <td>${data.borrador === "true" ? "si" : "no"}</td>
        <td>${data.material}</td>
    </tr>

`
  );
}

const obj = new lapiz({});

//Evento de loading

document.addEventListener("DOMContentLoaded", () => {
  colors.value = obj.color;
  const setmaterial = (e) => {
    e.defaultValue === obj.material ? (e.checked = true) : (e.checked = false);
  };

  const setmarca = (e) => {
    e.defaultValue === obj.getMarca()
      ? (e.checked = true)
      : (e.checked = false);
  };
  const setborrador = (e) => {
    e.defaultValue === String(obj.borrador)
      ? (e.checked = true)
      : (e.checked = false);
  };

  radio.forEach((node) => (node.name === "marca" ? setmarca(node) : false));
  radio.forEach((node) =>
    node.name === "material" ? setmaterial(node) : false
  );
  radio.forEach((node) =>
    node.name === "borrador" ? setborrador(node) : false
  );
  input.value = obj.dimension;
  input.insertAdjacentHTML(
    "afterend",
    `<label id="dimension">${obj.dimension} cm</label>`
  );
});

//Eventos

input.addEventListener("input", (e) => {
  let dimension = document.querySelector("#dimension");
  dimension.textContent = e.target.value + " cm";
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  showtable(data);
});
