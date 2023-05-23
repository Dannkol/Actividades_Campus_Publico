<?php

    

    function reqpost($_DATA){
      if(validarNumerosEnArray($_DATA)){



        $_Respuesta =  (array) [
            "datos" => $_DATA,
            "perimetro" => $_DATA['cuadrado']*4,
            "area" => $_DATA['altura'] * $_DATA['base'],
        ];
        }else{
            $_Respuesta = error('Datos no permitidos');
        }; 
        
        return $_Respuesta;
    }
