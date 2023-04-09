import myheader from "./components/myheader.js";

myheader.formData()

let data =     [
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

let resta = data.filter(itme => itme.tipo_gasto === "-")
let suma = data.filter(itme => itme.tipo_gasto === "+")

console.log(resta)
console.log(suma)

let total = suma.reduce((acc , item) => acc + parseFloat(item.valor), 0) - resta.reduce((acc , item) => acc + parseFloat(item.valor), 0)

console.log("total: ", total) 
console.log("suma" ,suma.reduce((acc , item) => acc + parseFloat(item.valor), 0))
console.log("egresos" , resta.reduce((acc , item) => acc + parseFloat(item.valor), 0) , `${resta.reduce((acc , item) => acc + parseFloat(item.valor), 0) * 100 / suma.reduce((acc , item) => acc + parseFloat(item.valor), 0)}%`)

resta.forEach(element => {
    console.log(element.Descripcion , `${((parseFloat(element.valor)*100) / resta.reduce((acc , item) => acc + parseFloat(item.valor), 0)).toFixed(2)} %`)
});