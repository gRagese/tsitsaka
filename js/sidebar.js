const menu_btn = document.querySelector('.header__menu-btn');
const sidebar = document.querySelector('.sidebar-container');
const container = document.querySelector('.container')

menu_btn.addEventListener('click', function(e){
    sidebar.classList.add('sidebar-container-active')
    container.classList.add('container-black')
})