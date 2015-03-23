var nombreAlumna = prompt("Nombre de la alumna");
var mensaje = "Hola " + nombreAlumna + ". Estamos en Laboratoria.";
mensaje = mensaje + " Espero que estés aprendiendo mucho hoy :)";
// mensaje += " Espero que estés aprendiendo mucho hoy :)";
document.getElementById("parrafo").innerHTML = mensaje;
