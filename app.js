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
  result.innerHTML = `<h1>respuetas</h1><div>
  
    <h4>perimetro del cuadrado: ${res.perimetro}</h4>
    <h4>area del cuadrado: ${res.area}</h4>
    
  </div>`;
});


