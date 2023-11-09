function loginUsuario() {
    event.preventDefault();
    var us = document.getElementById("us");
    var pass = document.getElementById("pass");
    if (!(pass.value === "" || us.value === "")) { //verifico que los datos no estén vacíos. 
      if ((us.value === "usuario1" && pass.value === "contraseña1") || (us.value === "admin" && pass.value === "1234")) { //verifico que sean correctos. 
        //alert("Bienvenido");
        document.cookie = "usuario=" + us.value
        $("#mensajeBienvenida").html("Hola " + us.value + ", Bievenido a Fundación Pierrot Fuensalida !")
        $('#bienvenidoModal').modal('show');
        setTimeout(function () {
          window.location = "miscursos.html";
      }, 3000);
      }
      else {
        alert("Los datos ingresados son incorrectos.")
      }
    }
    else {
      alert("Alguno de los datos está vacío");
    }
    
}

// Ejemplo de uso: Cargar una nueva página
loadPage('<h2>Nueva Página</h2><p>Contenido de la nueva página.</p>');
function enviarContacto() {
          event.preventDefault();
          var nombre = document.getElementById("nombre");
          var mail = document.getElementById("mail");
          var consulta = document.getElementById("consulta");
          if (!(nombre.value === "" || mail.value === "" || consulta.value === "")) { //verifico que los datos no estén vacíos. 
            alert("¡Su consulta fue recibida! Muchas gracias.")
          }
          else {
            alert("Alguno de los datos está vacío");
          }
}

function estaLogeado() {
    var usuario = obtenerUsuario();
    if (usuario != "") {
        document.getElementById("botonLogin").style.display = "none";
        document.getElementById("botonLogout").style.display = "show";
        document.getElementById("misCursos").style.display = "show";
        document.getElementById("userLogin").innerHTML = "Hola, " + usuario
    }else{
        document.getElementById("botonLogin").style.display = "show";
        document.getElementById("botonLogout").style.display = "none";
        document.getElementById("misCursos").style.display = "none";
        document.getElementById("userLogin").innerHTML = "";
    }
}

function registrarUsuario() {
    event.preventDefault();
    var emp = document.getElementById("idempleado");
    var nombre = document.getElementById("nombre");
    var usuario = document.getElementById("usuario");
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");

    if (!(emp.value === "" || nombre.value === "" || usuario.value === "" || pass1.value === "" || pass2.value === "")) { //verifico que los datos no estén vacíos. 
      if (pass1.value === pass2.value) { //verifico que las contraseñas coincidan. 
        alert("Su registro se ha enviado a la empresa. En los próximos días recibirá acceso.");
        window.location.href = "miscursos.html";
      }
      else {
        alert("Las contraseñas no coinciden.")
      }
    }
    else {
      alert("Alguno de los datos está vacío");
    }
}


function obtenerUsuario() {
    var usuario = "";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith("usuario=")) {
            usuario = cookie.substring("usuario=".length);
        }
    }
    return usuario;
}

function desLogear(){
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = "index.html";
}