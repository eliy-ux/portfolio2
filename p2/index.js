// const menuBtn = document.getElementsByClassName('menu-btn');
const menuItems =document.getElementsByClassName('menu-items')[0];
const navLinks = document.getElementById('nav-links')

// menuBtn.addEventListener('click', showHideMenu);

const menuBtn = document.createElement('span');
menuBtn.addEventListener('click', showHideMenu);
menuBtn.style = 'font-size: 4rem; color: #b74b4b; width: 1rem !important; height: 1rem !important';

const menuIcon = document.createElement('i');
// menuIcon.classList.add(['bx', 'bx-menu']);
menuIcon.className = 'bx bx-menu';

menuBtn.appendChild(menuIcon);

navLinks.appendChild(menuBtn);

function showHideMenu () {
    menuItems.classList.toggle('hidden');
    console.log("first");
}