let myFormulario = document.querySelector('#myFormulario');

myFormulario.addEventListener('submit', async (e)=> {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    let res = await( await fetch('api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })).json()
    console.log(res)
});