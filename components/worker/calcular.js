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

self.addEventListener("message", (e) => {
  let data = JSON.parse(e.data.data);
  data = data.map((item) => JSON.parse(item));
  let resta = data
    .filter((itme) => itme.tipo_gasto === "-")
    .reduce((acc, item) => acc + parseFloat(item.valor), 0);
  let suma = data
    .filter((itme) => itme.tipo_gasto === "+")
    .reduce((acc, item) => acc + parseFloat(item.valor), 0);

  console.log(resta);
  console.log(suma);
});
