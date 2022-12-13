const link =document.querySelector(".header-nav-link");
const body =document.querySelector(".body")
 link.addEventListener("click" ,function(evt){
    evt.preventDefault();
    body.classList.toggle("dark-body")
 })