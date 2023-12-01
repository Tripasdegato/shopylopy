
const bot = document.getElementById("bot");
let num7 = document.getElementById("input7").value;
let num8 = document.getElementById("input8").value;
let num9 = document.getElementById("input9").value;
let rcalif = document.getElementById("rcalif");   


function calif() {
    inputnum7 = document.getElementById("input7").value;  
    inputnum8 = document.getElementById("input8").value;
    inputnum9 = document.getElementById("input9").value;    
    var calif1 = parseFloat(inputnum7) * .2;
    var calif2 = parseFloat(inputnum8) * .5; 
    var calif3 = parseFloat(inputnum9) * .3;
    var sum = parseFloat(calif1) + parseFloat(calif2)+ parseFloat(calif3);

    rcalif.textContent = " Gracias" ;
}
bot.addEventListener("click", calif);