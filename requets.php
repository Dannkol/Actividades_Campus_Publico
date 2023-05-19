<?php



    function reqpost($_DATA){
     if(validarNumerosEnArray($_DATA)){
            $_promedio = (float) array_sum($_DATA) / count($_DATA);
            $_Respuesta =  (array) [
            "mensaje" => ($_promedio<=3.9) ? "estudie" : "becado",
            "notas" => $_DATA,
            "promedio" => $_promedio
        ];
        }else{
            $_Respuesta = error('Datos no permitidos');
        }; 
        
        return $_Respuesta;
    }



?>