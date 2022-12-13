const link =document.querySelector(".header-nav-link");
const body =document.querySelector(".body");
const logoDark =document.querySelector(".header-logo-black")
 link.addEventListener("click" ,function(evt){
    evt.preventDefault();
    body.classList.toggle("dark-body");
    logoDark.classList.toggle("logo-none");
 })