<?php

    require 'requets.php';
    require 'validaciones.php';

    

    header('Content-Type: application/json; charset=utf-8');
    $_DATA = json_decode(file_get_contents('php://input'), true);
    $METHOD = $_SERVER["REQUEST_METHOD"];

    $res = match($METHOD){
        'POST' => reqpost($_DATA),
        default => error('Metodo no permitido')
    };


    echo json_encode($res);


    
?>