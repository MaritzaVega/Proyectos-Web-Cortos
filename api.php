<?php
/// recibir json
$productos=json_decode($_POST['json'],true);
require 'conexion.php';
foreach($productos as $productos){
    $nombre=$productos['nombre'];
    $cantidad=$productos['cantidad'];
    $precio=$productos['precio'];
    $total=$productos['total'];
    $guardar=mysqli_query($con,"INSERT INTO detalle_factura(nombre,cantidad,precio,total)VALUES('$nombre','$cantidad','$precio','$total')");

};