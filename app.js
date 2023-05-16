const altIcon = document.querySelector('.altIcon');
const xIcon = document.querySelector('.xIcon');
const mobileNavItems = document.querySelector('.mobileNavItems');

let isMenuOpen = false;

const toggleMenu = () => {
    if(isMenuOpen){
        xIcon.style.display = 'none';
        altIcon.style.display = 'block';
        mobileNavItems.style.display = 'none';
    } else {
        xIcon.style.display = 'block';
        altIcon.style.display = 'none';
        mobileNavItems.style.display = 'block';
    }
    isMenuOpen = !isMenuOpen;
}

altIcon.addEventListener('click', toggleMenu);
xIcon.addEventListener('click', toggleMenu);