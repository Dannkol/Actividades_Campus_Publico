let myFormulario = document.querySelector("#myFormulario");


myFormulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  console.log(data);
  let res = await (
    await fetch("api.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
  ).json();
  console.log(res);
  result.innerHTML = `<h1>Factura</h1><div>
  
    <h4>nombre del producto: ${res.nom_produc}</h4>
    <h4>precio a pagar: ${res.factura}</h4>
    
  </div>`;
});


