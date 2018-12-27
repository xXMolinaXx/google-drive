function activar(){
    document.getElementById("nav-min").style.display="block";
    document.getElementById("btn-nav").style.display="none";
    document.getElementById("cls-nav").style.display="block";
    
}
function cerrar(){
    document.getElementById("nav-min").style.display="none";
    document.getElementById("btn-nav").style.display="block";
    document.getElementById("cls-nav").style.display="none";
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("btn-nav").style.display="block";
    } else {
        document.getElementById("btn-nav").style.display="none";
    }
}

var x = window.matchMedia("(max-width: 1126px)")

