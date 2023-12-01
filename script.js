const bt = document.getElementById("bt");
let num1 = document.getElementById("input1").value;
let num2 = document.getElementById("input2").value;
let num3 = document.getElementById("input3").value;
let num4 = document.getElementById("input4").value;
let num5 = document.getElementById("input5").value;
let resultado = document.getElementById("result"); 

function Suma() {
    inputnum1 = document.getElementById("input1").value;  
    inputnum2 = document.getElementById("input2").value;
    inputnum3 = document.getElementById("input3").value;  
    inputnum4 = document.getElementById("input4").value; 
    inputnum5 = document.getElementById("input5").value;      
    var sum = parseInt(inputnum1) + parseInt( inputnum2)+ parseInt( inputnum3)+ parseInt( inputnum4)+ parseInt( inputnum5);
    resultado.textContent = " Lo que pagaras es:  " + sum + "  Pesos " ;
}
bt.addEventListener("click", Suma);

