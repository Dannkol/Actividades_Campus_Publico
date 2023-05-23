<?php

    

    function reqpost($_DATA){
      if(validarNumerosEnArray($_DATA)){

        $_Respuesta =  (array) [
            "datos" => $_DATA,
            "nom_produc" => $_DATA['nom_prduc'],
            "factura" => $_DATA['cantidad'] * $_DATA['precio'],
        ];
        }else{
            $_Respuesta = error('Datos no permitidos');
        }; 
        
        return $_Respuesta;
    }
