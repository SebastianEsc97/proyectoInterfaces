function validacion() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    if (!usuario || !contraseña) {
        alert("Debe llenar todas las casillas");
        return false
    } else {
        return true
    }
}