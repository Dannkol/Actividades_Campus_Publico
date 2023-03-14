/* Funciones declarativas

    permite declara una funcion que exite a lo largo de todo el codigo

    por lo que permite ejecutarse antes de haberse creado
*/

function suma() {
    return 2 + 2;
  }
  
  console.log(`
      
  Funciones declarativas
  
      function suma(){
          return 2+2
      }
  
      devolvera ${suma()}
  
  `);
  
  /* 
  
      Funciones por expresión
  
          se crea una funcion que es almacenada en una varieble, pero fundamentalmente hace lo mismo que una funcion declarativa
  
  */
  
  // El segundo "saludar" (nombre de la función) se suele omitir: es redundante
  const saludo = function saludar() {
    return "Hola";
  };
  
  console.log(`
  
  Funciones por expresión
      para
  
      const saludo = function saludar() {
          return "Hola";
        };
  
      ${saludo()}
  
  `);
  
  /* Ahora el nombre de la función pasa a ser el nombre de la variable, 
      mientras que el nombre de la función desaparece y se omite, 
      dando paso a lo que se llaman las funciones anónimas (o funciones lambda). */
  
  /* 
      Funcion como objeto
      
      se pueden declarar funciones como si fueran objetos. Sin embargo, es un enfoque que no se suele utilizar en producción
      
  */
  
  const saludar = new Function("return 'Hola';");
  
  console.log(`
  
      Funcion como objeto
      
      para
  
      const saludar = new Function("return 'Hola';");
  
      ${saludar()}
  
  
  `);
  
  /* 
  
      fucnion anonima
  
      Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran 
      sin nombre de función y se alojan en el interior de una variable y haciendo referencia 
      a ella cada vez que queramos utilizarla:
  
  */
  
  const sumar = function () {
    return 2 + 2;
  };
  
  console.log(`
  
      funcion anonmia
  
      para
  
      const sumar = function(){
          return 2+2
      }
  
      ${sumar()}
  
  `);
  
  /* 
  
      funciones autoejecutables
  
      Pueden existir casos en los que necesites crear una función y ejecutarla sobre la marcha. 
  */
  
  (function () {
    console.log(`
      
          este es el resultado de una funcion auto ejecutable que se declara como
  
          (function () {
              console.log('');
            })();
  
      `);
  })();
  
  /* 
    
    clausuras
  
    A grandes rasgos, en Javascript, una clausura o cierre se define como 
    una función que «encierra» variables en su propio ámbito (y que continúan
      existiendo aún habiendo terminado la función). Por ejemplo, veamos el siguiente ejemplo:
  
    */
  
  // Clausura: Función incr()
  
  const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
  })();
  
  console.log(`
  
  const incr = (function () {
      let num = 0;
      return function () {
        num++;
        return num;
      };
    })();
    
  
  
    una funcion que es auto ejecuable y va guardando su valor por ende
  
    la funcion genera un valor num = 0 que luego se va aumentando
  
    Las clausuras las creas en el momento que declaras una función dentro otra que usa variables de la funcion externa.
  
    llamdo uno es igual a ${incr()}
    llamdo dos es igual a ${incr()}
    llamdo tres es igual a ${incr()}
  
  `);
  
  /* 
  
  fucnion flecha
  
  basicamente elimina la palabra function por una flecha =>
  
  */
  
  (() => {
      console.log(`
      
      Esta es una funcion flecha auto ejecutable
  
      (()=>{})() vs (fucntion (){})()
   
      
      `)
  })();
  
  