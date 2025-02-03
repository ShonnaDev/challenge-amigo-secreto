// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde se almacenarán los amigos
var listaDeAmigos = [];


function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Debe ingresar un nombre");
        return false;
    }
    // Agregar un amigo a la lista
    listaDeAmigos.push(nombre);
    document.getElementById("amigo").value = "";
    return listaDeAmigos;
}
