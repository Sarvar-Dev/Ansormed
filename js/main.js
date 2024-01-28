const elSiteHeader = document.querySelector(".site-header");
const elMenuButton = document.querySelector(".menu-button");

if (elMenuButton){
    elMenuButton.addEventListener('click',function(){
        elSiteHeader.classList.toggle("site-header--open")
    })
}