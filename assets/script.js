/* Barra de Navegação */

let menuBtn = document.querySelector(".btnMenu");
let btnFechar = document.querySelector(".btnFechar");
let lateralMenu = document.querySelector(".cabecalho");
let body = document.querySelector("body");

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    lateralMenu.classList.add("active");
    body.style.overflow = "hidden";
}

btnFechar.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    lateralMenu.classList.remove("active");
    body.style.overflow = "auto";
}

/* Barra de Navegação Sticky */

let barra = document.querySelector("nav");
let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        barra.classList.add("sticky");
    }else{
        barra.classList.remove("sticky");
    }
}

/* Fechar Barra de Navegação Lateral ao clicar nos links */

let navLink = document.querySelectorAll(".menu li a");

for(var i = 0; i < navLink.length; i++){
    navLink[i].addEventListener("click" , ()=>{
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        lateralMenu.classList.remove("active");
        body.style.overflow = "auto";
    })
}