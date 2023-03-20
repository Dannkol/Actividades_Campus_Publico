let objeto = {};
let copia

const menu = {
    lecturaDeDatos: function () {
        let dato = prompt("Ingrese un valor:");
        alert(`El valor ingresado es ${dato}.`);
    },
    crearObjeto: function () {
        objeto.propiedad = [];
        objeto.set = function (tipo, dato) {
            this.propiedad[tipo] = dato;
        };
        objeto.shift = function (tipo) {
            this.propiedad[tipo].shift();
        }
        objeto.pop = function (tipo) {
            this.propiedad[tipo].pop();
        }
        objeto.splice = function (tipo, posicion) {
            this.propiedad[tipo].splice(posicion, 1);
        }
        objeto.unshift = function (tipo, elemento) {
            this.propiedad[tipo].unshift(elemento)
        }
        objeto.push = function (tipo, elemento) {
            this.propiedad[tipo].push(elemento)
        }
        objeto.iterarArrayConFor = function (tipo) {
            for (let i = 0; i < this.propiedad[tipo].length; i++) {
                console.log(`${this.propiedad[tipo][i].nombre} tiene ${this.propiedad[tipo][i].edad} años.`);
            }
        }
        objeto.iterarArrayConForEach = function (tipo) {
            this.propiedad[tipo].forEach((data) => {
                console.log(`${data.nombre} tiene ${data.edad} años.`);
            })
        }
        objeto.iterarArrayConmap = function (tipo) {
            copia = this.propiedad[tipo].map((data) => {
                return {
                    nombre: data.nombre,
                    edad: data.edad
                }
            })
        }

        console.log("Se ha creado el objeto:", objeto);
    },
    mostrarObjeto: function () {

        alert("El objeto es:", JSON.stringify(objeto.propiedad));
    },
    crearArray: function () {
        let array = [1, 2, 435, 643];
        objeto.set('array', array)
        console.log(`Se ha creado el ${array} en el objeto: , ${JSON.stringify(objeto.propiedad.array)}`);
    },
    mostrarArray: function () {

        console.log("El array es:", JSON.stringify(objeto.propiedad.array));
    },
    eliminarPrimerElemento: function () {
        objeto.shift('array')
        console.log("El array después de eliminar el primer elemento es:", JSON.stringify(objeto.propiedad.array));
    },
    eliminarUltimoElemento: function () {
        objeto.pop('array');
        console.log("El array después de eliminar el último elemento es:", JSON.stringify(objeto.propiedad.array));
    },
    eliminarElemento: function () {
        let posicion = prompt(`Ingrese la posición del elemento a eliminar ${JSON.stringify(objeto.propiedad.array)}:`);
        objeto.splice('array', posicion)
        console.log(`El array después de eliminar el elemento en la posición ${posicion} es:`, JSON.stringify(objeto.propiedad.array));
    },
    agregarElementoAlComienzo: function () {
        let elemento = prompt("Ingrese el elemento a agregar al comienzo del array:");
        objeto.unshift('array', elemento);
        console.log("El array después de agregar el elemento al comienzo es:", JSON.stringify(objeto.propiedad.array));
    },
    agregarElementoAlFinal: function () {
        let elemento = prompt("Ingrese el elemento a agregar al final del array:");
        objeto.push('array', elemento);
        console.log("El array después de agregar el elemento al final es:", JSON.stringify(objeto.propiedad.array));
    },
    crearArrayConObjetos: function () {
        let ArrayConObjetos = [
            { nombre: "Juan", edad: 25 },
            { nombre: "María", edad: 30 },
            { nombre: "Pedro", edad: 35 }
        ];
        objeto.set('ArrayConObjetos', ArrayConObjetos)
        console.log("El array de objetos es:", JSON.stringify(objeto.propiedad['ArrayConObjetos']));
    },
    iterarArrayConFor: function () {
        objeto.iterarArrayConFor('ArrayConObjetos')
    },
    iterarArrayConForEach: function () {
        objeto.iterarArrayConForEach('ArrayConObjetos')
    },
    iterarArrayConmap: function () {
        objeto.iterarArrayConmap('ArrayConObjetos')
        console.log("El array copia es:", JSON.stringify(copia));
    }
}

alert(`-----MENU------
1. Lectura de datos
2. Crear Objeto
3. Mostrar Objeto
4. Crear Array
5. Mostrar Array
6. Elimine primer elemento del Array
7. Elimine ultimo elemento del Array 
8. Eliminar cualquier elemento del array
9. Agregar elemento al comienzo del array
10. Agregar elemento al final del array
11. Crear array con objetos
12. Iterar array con objetos con FOR
13. Iterar array con objetos con ForEach
14. Iterar array con objetos con Map y crear copia
15. Proceso personal
0. Salir`);

let opcion = -1;
while (opcion !== 0) {
    opcion = parseInt(prompt("Ingrese una opción del menú:"));
    switch (opcion) {
        case 1:
            menu.lecturaDeDatos();
            break;
        case 2:
            menu.crearObjeto();
            break;
        case 3:
            menu.mostrarObjeto();
            break;
        case 4:
            menu.crearArray();
            break;
        case 5:
            menu.mostrarArray();
            break;
        case 6:
            menu.eliminarPrimerElemento();
            break;
        case 7:
            menu.eliminarUltimoElemento();
            break;
        case 8:
            menu.eliminarElemento();
            break;
        case 9:
            menu.agregarElementoAlComienzo();
            break;
        case 10:
            menu.agregarElementoAlFinal();
            break;
        case 11:
            menu.crearArrayConObjetos();
            break;
        case 12:
            menu.iterarArrayConFor();
            break;
        case 13:
            menu.iterarArrayConForEach();
            break;
        case 14:
            menu.iterarArrayConmap();
            break;
        case 0:
            break;
        default:
            alert("Opcion no encontrado.");
            break;
    }
}