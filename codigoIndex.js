var articulo_horario = document.getElementById("ArticuloHorario");
var articulo_xhendra = document.getElementById("ArticuloXhendra");
var articulo_campus_ap = document.getElementById("ArticuloCampusAP");
var articulo_classroom = document.getElementById("ArticuloClassroom");

var botones = document.querySelectorAll(".indice");

botones.forEach( function (boton) {
    boton.addEventListener("click", function () {
        window.location.href ="./error404.html"

    });
});

articulo_horario.addEventListener("click", function() {
  window.location.href = "ARTICULOhorario.html";
  
});

articulo_xhendra.addEventListener("click", function() {
    window.location.href = "https://xhendra.ar/";
    
});

articulo_campus_ap.addEventListener("click", function() {
    window.location.href = "https://aprendeprogramando.bue.edu.ar/";
    
});

articulo_classroom.addEventListener("click", function() {
    window.location.href = "https://classroom.google.com/h";
    
});

