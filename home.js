
const hamburger = document.querySelector('.hamburger')

const container = document.querySelector('main')
const navLinks = document.querySelector('.nav-links')
hamburger.addEventListener('click',()=>{
    container.classList.toggle('main-active')
    navLinks.classList.toggle('nav-active')
})