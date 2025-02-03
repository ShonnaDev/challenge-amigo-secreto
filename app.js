// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde se almacenarán los amigos
var listaDeAmigos = [];


function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Debe ingresar un nombre");
        return
    }
    // Agregar un amigo a la lista
    listaDeAmigos.push(nombre);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
}

function mostrarAmigos(){
    // Mostrar la lista de amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++){
        let fila = "<li>" + listaDeAmigos[i] + "</li>";
        lista.innerHTML += fila;
    }
}


function sortearAmigo(){
    // Revisar si la lista de amigos está vacía
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }

    // Sortear un amigo

    // Generar un número aleatorio entre 0 y la cantidad de amigos en la lista
    let numeroAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    return listaDeAmigos[numeroAleatorio];
}