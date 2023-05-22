<?php

    //usaremos una varienate del metodo burbuja para ordenar el mayor

    function reqpost($_DATA){
     if(validarNumerosEnArray($_DATA)){
            //declaramos variables auxiliares para guardar los datos de nombre y edad
            $nombreMayor = '';
            $edadMayor = 0;
            //recorremos el objeto para serara los nombres y edades 
            for ($i = 1; $i <= (count($_DATA)/2) ; $i++) {
                $nombre = $_DATA['nombre' . $i];
                $edad = intval($_DATA['edad' . $i]);
                //validamos si el valor de la edad es mayor o menor al guardado previamente
                if ($edad > $edadMayor) {
                  $nombreMayor = $nombre;
                  $edadMayor = $edad;
                }
              }
            $_Respuesta =  (array) [
            "datos" => $_DATA,
            "nombre" => $nombreMayor,
            "edad" => $edadMayor
        ];
        }else{
            $_Respuesta = error('Datos no permitidos');
        }; 
        
        return $_Respuesta;
    }



?>