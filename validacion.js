document.getElementById("formulario").addEventListener("submit", function(e){
e.preventDefault();

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let telefono = document.getElementById("telefono").value;
let asunto = document.getElementById("asunto").value;
let mensaje = document.getElementById("mensaje").value;

if(nombre === "" || correo === "" || telefono === "" || asunto === "" || mensaje === ""){
alert("Todos los campos son obligatorios");
return;
}

alert("Formulario enviado correctamente");
});