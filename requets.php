<?php



    function reqpost($_DATA){
     if(validarNumerosEnArray($_DATA)){
            $_voltaje = (float) $_DATA['resistencia'] * $_DATA['corriente'] ;
            $_Respuesta =  (array) [
            "datos" => $_DATA,
            "voltaje" => $_voltaje
        ];
        }else{
            $_Respuesta = error('Datos no permitidos');
        }; 
        
        return $_Respuesta;
    }



?>