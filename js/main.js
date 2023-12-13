let verde = document.getElementById("verde");
let rosa = document.getElementById("rosa");
let violeta = document.getElementById("violeta");
let circle = document.getElementById("circle");
let inicio = document.getElementById("inicio");

verde.addEventListener("click", function(){
    circle.style.backgroundColor="#007042";
    inicio.style.borderColor="#007042";
})

rosa.addEventListener("click", function(){
    circle.style.backgroundColor="#e8728e";
    inicio.style.borderColor="#e8728e";
})

violeta.addEventListener("click", function(){
    circle.style.backgroundColor="#e5448c";
    inicio.style.borderColor="#e5448c";
})