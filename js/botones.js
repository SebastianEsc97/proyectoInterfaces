function noche() {
    document.body.className = "btn-noche";
    document.querySelector("#dia").style.color = "grey";
    document.querySelector("#navbar1").style.background = "#000";
    document.querySelector("#navbar3").style.background = "#000";
    document.querySelector("#textUser").style.color = "#fff";
}


function dia() {
    document.body.className = "btn-dia";
    document.querySelector("#navbar1").style.background = "#fff";
    document.querySelector("#navbar3").style.background = "#fff";
    document.querySelector("#textUser").style.color = "#000";
}

function titulocolor1() {
    document.body.className = "titulocolor-1";
    document.querySelector("#titulocolorIzquierda").style.color = "black !important";
    document.querySelector("#titulocolorIzquierda").setAttribute("style","color: black !important")
}

function titulocolor2(){
    document.body.className = "titulocolor-2";
    document.querySelector("#titulocolor-2").style.color = "red !important";
    document.querySelector("#titulocolorIzquierda").setAttribute("style","color: #CCE5FF !important")
}

function ocultar(){
    document.getElementById('mostrar').style.display= 'none';
}

function mostrar(){
    document.getElementById('mostrar').style.display= 'block';
}
