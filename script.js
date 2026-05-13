function mostrarAtleti() {
document.getElementById("textoAtleti").style.display = "block";
}

function irDeportes() {
window.location.href = "deportes.html";
}

function irJugador() {
window.location.href = "jugador.html";
}

function volverInicio() {
window.location.href = "index.html";
}

function mostrarF1() {
document.getElementById("datoF1").style.display = "block";
}

function validarFormulario(e) {
e.preventDefault();
document.getElementById("mensaje").innerHTML = "Enviado correctamente";
}

function obtenerUbicacion() {
navigator.geolocation.getCurrentPosition(pos => {
document.getElementById("ubicacion").innerHTML =
pos.coords.latitude + ", " + pos.coords.longitude;
});
}

function cambiarColor() {
let colores = ["#f4f4f4","lightblue","lightgreen","lightyellow"];
document.body.style.backgroundColor =
colores[Math.floor(Math.random() * colores.length)];
}