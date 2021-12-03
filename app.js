var btnAgregar = document.getElementById('agregar');
var btnGuardar = document.getElementById('guardar');
var lista = document.getElementById('lista');
//una array
var data = [];
// nos va contar cuanto productos se estan agregando
var cant = 0;

//Funcionalidad de los btns
//evento por medio click llama una función
btnAgregar.addEventListener("click",agregar);
btnGuardar.addEventListener("click",guardar);

//Funciones o metodos

function agregar(){
    var nombre = document.getElementById('nombre').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var total = precio * cantidad;
    
    //agregar elementos al arreglo con var data
    //push sirve para agregar elementos al array
    data.push(
        {
        "id": cant,
        "nombre":nombre,
        "precio":precio,
        "cantidad": cantidad,
        "total":total
        }
    );
        var id_row='row'+cant;
        //cadena de texto
        var fila = '<tr class="textoAl" id='+id_row+'><td>'+nombre+'</td><td>'+precio+'</td><td>'
        +cantidad+'</td><td>'+total+'</td><td><a href="#" class="btn btn-danger" onclick="eliminar('
        +cant+')";>Eliminar</a><a href="#" class="btn btn-warning" onclick="cantidad('+cant+
        ')";>Cantidad</a></td></tr>';
        //agregar a la tabla
        //sintaxis de Jquery
        $("#lista").append(fila);
        $("#nombre").val('');
        $("#precio").val('');
        $("#cantidad").val('');
        $("#nombre").focus('');
        cant++;
        sumar();
}

function sumar(){
    var tot=0;
    for (x of data){
        tot=tot+x.total;
    }
    document.getElementById('total').innerHTML="Total = "+tot;
}

function guardar(){
///AJAX
var json=JSON.stringify(data);
$.ajax({
    type: "POST",
    utl: "api.php",
    data: "json="+json,
    success:function(resp){
        console.log(resp);       
        location.reload();
    }
});
}

function eliminar(row){
    //remover la fila de a tabla en html
    $("#row"+row).remove();
    var i=0;
    var pos=0;
    for (x of data){
        if(x.id==row){
            pos=i;
        }
        i++;
    }
    data.splice(pos,1);
    sumar();

}

function cantidad(row){

///MODIFICANDO LA CANTIDAD DEL PRODUCTO
    var canti=parseFloat(prompt("Nueva Cantidad"));
    data[row].cantidad=canti;
    data[row].total=data[row].cantidad*data[row].precio;
    var fila_id=document.getElementById("row"+row);
    celda=fila_id.getElementsByTagName('td');
    celda[2].innerHTML=canti;
    celda[3].innerHTML=data[row].total;
    sumar();
}




