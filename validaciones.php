<?php

//validamos si el dato es permitido

function validarNumerosEnArray($array) {
    foreach ($array as $objeto){
        return ((!is_numeric($array['precio'])) && (!is_numeric($array['cantidad']))) ? false : true;
    }
}

function error($mensaje){
    $_Respuesta = (array) [
        "message" => $mensaje
    ];
    return $_Respuesta; 
}


?>