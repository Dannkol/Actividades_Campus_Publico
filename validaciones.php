<?php

//validamos si el dato es permitido

function validarNumerosEnArray($array) {
    for ($i = 1; $i <= count($array) ; $i++){
        return (!is_numeric($array['numero' . $i])) ? false : true;
    }
}

function error($mensaje){
    $_Respuesta = (array) [
        "message" => $mensaje
    ];
    return $_Respuesta; 
}


?>