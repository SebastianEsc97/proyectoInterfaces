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

function titulocolor1(){
    document.body.className = "titulocolor-1";
    document.querySelector("#titulocolor-1").style.color = "black";
}

function titulocolor2(){
    document.body.className = "titulocolor-2";
    document.querySelector("#titulocolor-2").style.color = "red";
}