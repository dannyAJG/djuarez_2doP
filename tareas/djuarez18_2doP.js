let tareas=["Jugar xbox","realizar tarea de programación","nadar"];
// INSERTAR CÓDIGO PARA AGREGAR ELEMENTO AL ARREGLO
tareas[3] = "Ir al cine";
tareas[4] = "Estudiar para Ing. de SW II";
console.log("Mi lista de actividades");
console.log("************"); 
for(var i = 0; i < tareas.length; i ++){
    console.log(`${i+1}.- ${tareas[i]}`); 
}