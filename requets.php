<?php



function reqpost($_DATA)
{
    if (validarNumerosEnArray($_DATA)) {

        $nombreCampeona = '';
        $marcaCampeona = 0;
        $rompioRecord = false;

        foreach ($_DATA as $atleta) {


            $marca = $atleta['salto'];

            if ($marca > $marcaCampeona) {
                $nombreCampeona = $atleta['nombre'];
                $marcaCampeona = $marca;
            }

            if ($marca > 15.50) {
                $rompioRecord = true;
            }
        }

        $_Respuesta =  (array) [
            "datos" => $_DATA,
            "campeon" => $nombreCampeona,
            "record" => $rompioRecord,
        ];
    } else {
        $_Respuesta = error('Datos no permitidos');
    };

    return $_Respuesta;
}
