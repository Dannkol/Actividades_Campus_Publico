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
    console.log(data);
    console.log(res);
    result.innerHTML = `<h1>Voltaje</h1><h4>${res.voltaje === undefined ? res.message : res.voltaje}(V)</h4>`;
});