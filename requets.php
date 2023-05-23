<?php

    

    function reqpost($_DATA){
     if(validarNumerosEnArray($_DATA)){

        $cantidadobj = count($_DATA);

        $mujeres = 0;

        foreach ($_DATA as $objeto) {
            if ($objeto['sexo'] === 'femenino') {
                $mujeres++;
            }
        }

        // Inicializar las variables para la menor y mayor nota
        $mayorNota = PHP_INT_MIN;
        $nombreMayor = '';
        $menorNota = PHP_INT_MAX;
        $nombreMenor = '';
        // Iterar sobre los objetos y encontrar la menor y mayor nota
        foreach ($_DATA as $objeto) {
          $nota = intval($objeto['nota']);

          if ($nota < $menorNota) {
            $menorNota = $nota;
            $nombreMenor = $objeto['nombre'];
          }

          if ($nota > $mayorNota) {
            $mayorNota = $nota;
            $nombreMayor = $objeto['nombre'];
          }
        }

        $_Respuesta =  (array) [
            "datos" => $_DATA,
            "mujeres" => $mujeres,
            "hombres" => $cantidadobj - $mujeres,
            "result" => array([$nombreMenor , $menorNota],[$nombreMayor ,$mayorNota] ),
            "cantidad" => $cantidadobj
        ];
        }else{
            $_Respuesta = error('Datos no permitidos');
        }; 
        
        return $_Respuesta;
    }
