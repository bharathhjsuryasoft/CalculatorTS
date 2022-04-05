var icon = document.getElementById("icon");
var clear = document.getElementsByClassName("clear");
var modulo = document.getElementsByClassName("modulo");
var div = document.getElementsByClassName("division");
var multiplication = document.getElementsByClassName("multiplication");
var subtraction = document.getElementsByClassName("subtraction");
var addition = document.getElementsByClassName("addition");
var equals = document.getElementsByClassName("equals");
var ce = document.getElementsByClassName("deleteCharacter");
var dot = document.getElementsByClassName("dot");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./css/img/sun.png";
        modulo.src = "./css/img/Vectors/mod_white.svg"
        div.src = "./css/img/Vectors/div_white.svg"
        multiplication.src = "./css/img/Vectors/mul_white.svg"
        subtraction.src = "./css/img/Vectors/sub_white.svg"
        addition.src = "./css/img/Vectors/add_white.svg"
        equals.src = "./css/img/Vectors/equals_white.svg"
        ce.src = "./css/img/Vectors/ce_white.svg"
        dot.src = "./css/img/Vectors/dot_white.svg"
    }else{
        icon.src = "./css/img/moon.png";
        modulo.src = "./css/img/Vectors/mod_dark.svg";
        div.src = "./css/img/Vectors/div_dark.svg";
        multiplication.src = "./css/img/Vectors/mul_dark.svg";
        subtraction.src = "./css/img/Vectors/sub_dark.svg";
        addition.src = "./css/img/Vectors/add_dark.svg";
        equals.src = "./css/img/Vectors/equals_dark.svg";
        ce.src = "./css/img/Vectors/ce_dark.svg";
        dot.src = "./css/img/Vectors/dot_dark.svg";
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./css/img/sun.png";
        modulo.src = "./css/img/Vectors/mod_white.svg"
        division.src = "./css/img/Vectors/div_white.svg"
        multiplication.src = "./css/img/Vectors/mul_white.svg"
        subtraction.src = "./css/img/Vectors/sub_white.svg"
        addition.src = "./css/img/Vectors/add_white.svg"
        equals.src = "./css/img/Vectors/equals_white.svg"
        ce.src = "./css/img/Vectors/ce_white.svg"
        dot.src = "./css/img/Vectors/dot_white.svg"
    }
}