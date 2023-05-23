let myFormulario = document.querySelector("#myFormulario");
const result = document.querySelector("#result");
const envio = document.querySelector("#favDialog");
const cancel = document.querySelector("#cancel");
const modal = document.querySelector("#modal");

let datos = [];

myFormulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  datos.push(data);
  envio.showModal();
});

cancel.addEventListener("click", (e) => {
    envio.close();
});


modal.addEventListener("submit", async (e) => {
  let res = await (
    await fetch("api.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    })
  ).json();
  result.innerHTML = `<h1>resultado</h1><div>
  
    <h4>cantidad de mujeres: ${res.mujeres}</h4>
    <h4>cantidad de hombres: ${res.hombres}</h4>
    <p>menor nota </p>
    <ul>
        <li>nombre : ${res.result[0][0]}</li>
        <li>nota : ${res.result[0][1]}</li>
    </ul>
    <p>mayor nota </p>
    <ul>
        <li>nombre : ${res.result[1][0]}</li>
        <li>nota : ${res.result[1][1]}</li>
    </ul>

  </div>`;
});
