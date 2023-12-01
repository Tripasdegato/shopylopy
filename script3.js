
const botn = document.getElementById("botn");
let num5 = document.getElementById("input5").value;
let num6 = document.getElementById("input6").value;
let resultado3 = document.getElementById("resultado3");   


function dividir() {
    inputnum5 = document.getElementById("input5").value;  
    inputnum6 = document.getElementById("input6").value;    
    var div = parseInt(inputnum5) * parseInt( inputnum6);
    resultado3.textContent = " La Multiplicación es " + div;
}
botn.addEventListener("click", dividir);