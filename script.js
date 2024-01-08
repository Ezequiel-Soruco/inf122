document.getElementById("boton").addEventListener("click",function(){
    altert("boton clickeado");
});
function agregarTarea(){
    var tarea= document.getElementBy
}
function agregarTarea(){
    var tarea = document.getElementById("nueva-tarea").value;
    var nuevoItem = document.createElement("li");
    nuevoItem.textContent=tarea;
    document.getElementById("tarea-lista").appendChild(nuevoItem);
    document.getElementById("nueva-tarea").value = "";
 }
 