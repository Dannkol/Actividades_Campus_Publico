let myFormulario = document.querySelector('#myFormulario');
const result = document.querySelector('#result');

myFormulario.addEventListener('submit', async (e)=> {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    let res = await( await fetch('api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })).json()
    result.innerHTML = `<h1>${res.resultado === true ? "suma y resta" : "division y producto"}</h1><div>${res.resultado === true ? `<h4>suma : ${res.operacion[0]}</h4><h4> resta : ${res.operacion[1]} </h4>` : `<h4>division : ${res.operacion[0]}</h4><h4> producto : ${res.operacion[1]} </h4>`}</div>`;
});