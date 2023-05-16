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
        mobileNavItems.style.display = 'flex';
    }
    isMenuOpen = !isMenuOpen;
}

altIcon.addEventListener('click', toggleMenu);
xIcon.addEventListener('click', toggleMenu);

const contextText = document.querySelector('.contextText');

document.querySelector('.disclaimer').addEventListener('click', () => {
    if (contextText.style.display === 'none') {
        contextText.style.display = ''; // Set the default value
        contextText.scrollIntoView({ behavior: 'smooth' });
      } else {
        contextText.style.display = 'none'; // Set the 'none' value
      }
})