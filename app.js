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
  e.preventDefault()
  console.log(datos);
  let res = await (
    await fetch("api.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    })
  ).json();
  console.log(res);
  result.innerHTML = `<h1>resultado</h1><div>
  
    <h4>nombre del campeon: ${res.campeon}</h4>
    <h4>${res.record? 'rompio el record gana 500 millones mas' : 'no rompio el record'}</h4>

  </div>`;
  datos = []
  envio.close()
});
