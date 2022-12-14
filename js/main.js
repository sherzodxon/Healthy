const link = document.querySelector(".header-nav-link");
const body = document.querySelector(".body");
const logoDark = document.querySelector(".header-logo-black");
const footerLogoDark = document.querySelector(".footer-logo-dark");
const footerLogoLight = document.querySelector(".footer-logo");
link.addEventListener("click", function (evt) {
   evt.preventDefault();
   body.classList.toggle("dark-body");
   logoDark.classList.toggle("logo-none");
   footerLogoDark.classList.toggle("footer-logo-block");
   footerLogoLight.classList.toggle("logo-none")
})