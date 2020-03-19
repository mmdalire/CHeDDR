const sideMenu = document.querySelector('#checkbtn');
const changeNav = document.querySelector('nav');

const showNavigation = () => {
    //To display or not to display navigation bar
    if(changeNav.style.display === 'none') {
        changeNav.style.display = 'block';
        changeNav.style.float = 'none';
    }
    else {
        changeNav.style.display = 'none';
    }
}

//Event listener
sideMenu.addEventListener('click', e => {
    showNavigation();
});

matchMedia('(max-width: 660px)').addListener(e => {
    changeNav.style.display = 'block';
    if (e.matches) {
        changeNav.style.display = 'none';
    }
    else {
        changeNav.style.float = 'right';
    }
});