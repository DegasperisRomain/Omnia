
AOS.init({
    duration: 1000
});
feather.replace();

document.addEventListener("DOMContentLoaded", function () {
    const modeBtn = document.querySelector('.mode');
    const icon = document.getElementById('icon');

    modeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('close-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const submenuTrigger = document.querySelector('.submenu-trigger');
    const submenuMobile = document.getElementById('submenuMobile');
    const backToMenuBtn = document.getElementById('backToMenu');
    
    menuBtn.addEventListener('click', function() {
        menuMobile.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
        menuMobile.classList.remove('open');
        submenuMobile.classList.remove('open');
    });

    submenuTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        submenuMobile.classList.add('open');
    });

    backToMenuBtn.addEventListener('click', function() {
        submenuMobile.classList.remove('open');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function(event) {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.classList.add('open');
        });

        trigger.addEventListener('mouseleave', function(event) {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('open');
        });
    });

    // Gestion de la redirection
    dropdownMenus.forEach(menu => {
        menu.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                menu.classList.remove('open');
            }
        });
    });
});

