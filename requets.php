<?php

    

    function reqpost($_DATA){
     if(validarNumerosEnArray($_DATA)){

        $res = ($_DATA['numero1'] > $_DATA['numero2']) ? true : false;      
            
        $_Respuesta =  (array) [
            "datos" => $_DATA,
            "operacion" => $res ? array($_DATA['numero1'] + $_DATA['numero2'], $_DATA['numero1'] - $_DATA['numero2']) : array($_DATA['numero1'] / $_DATA['numero2'], $_DATA['numero1'] * $_DATA['numero2']), 
            "resultado" => $res ? true : false
        ];
        }else{
            $_Respuesta = error('Datos no permitidos');
        }; 
        
        return $_Respuesta;
    }



?>