function validar() {

    // Obtener los datos escritos en el formulario
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Comprobar usuario y contrasena
    if (usuario == "Labubu" && contrasena == "083014") {

        alert("Bienvenido al sistema");
        window.location.href = "bienvenida.html";
        return false;

    } else {

        alert("Usuario o contrasena incorrectos");
        return false;

        
    }

}