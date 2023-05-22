<?php

//validamos si el dato es permitido

function validarNumerosEnArray($array) {
    foreach ($array as $elemento) {
        return (!is_numeric($elemento)) ? false : true;
    }
}

function error($mensaje){
    $_Respuesta = (array) [
        "message" => $mensaje
    ];
    return $_Respuesta; 
}


?>