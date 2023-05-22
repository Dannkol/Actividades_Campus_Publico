<?php



    function reqpost($_DATA){
     if(validarNumerosEnArray($_DATA)){
            $_par = (float) $_DATA['numero'] % 2;
            $_Respuesta =  (array) [
            "mayor" => ($_DATA['numero']>10) ? "es mayor" : "no es mayor",
            "numero" => $_DATA,
            "valides" => ($_par == 0) ? "es par" : "no es par"
        ];
        }else{
            $_Respuesta = error('Datos no permitidos');
        }; 
        
        return $_Respuesta;
    }



?>