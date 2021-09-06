const menuBtn = document.getElementById('js-menu-btn');
const closeBtn = document.getElementById('js-close-btn');
const menu = document.getElementById('menu');


menuBtn.addEventListener('click', () => {
    menu.classList.remove("d-mobile-none");
})

closeBtn.addEventListener('click', () => {
    menu.classList.add("d-mobile-none");
})