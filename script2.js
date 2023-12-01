

const boton = document.getElementById("boton");
let num3 = document.getElementById("input3").value;
let num4 = document.getElementById("input4").value;
let resultado2 = document.getElementById("resultado2");   


function Resta() {
    inputnum3 = document.getElementById("input3").value;  
    inputnum4 = document.getElementById("input4").value;    
    var resta = parseInt(inputnum3) - parseInt( inputnum4);
    resultado2.textContent = " La Resta es " + resta;
}
boton.addEventListener("click", Resta);