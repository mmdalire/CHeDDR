const sideMenu = document.querySelector('#checkbtn');
const changeNav = document.querySelector('nav');
let move;

const offsetButton = (move) => {
    const moveButton = document.querySelectorAll('.buttons button');
    if(move) {
        moveButton[0].style.top = '50%';
        moveButton[1].style.top = '50%';
    }
    else {
        moveButton[0].style.top = '35%';
        moveButton[1].style.top = '35%';
    }
}

const showNavigation = () => {
    //To display or not to display navigation bar
    if(changeNav.style.display === 'none') {
        changeNav.style.display = 'block';
        changeNav.style.float = 'none';
        
        //Change position of the previous and next buttons
        //Move down
        move = true;
        offsetButton(move);
    }
    else {
        changeNav.style.display = 'none';

        //Change position of the previous and next buttons
        //Move up
        move = false;
        offsetButton(move);
    }
}

//Event listener
//Display navigation bar
sideMenu.addEventListener('click', e => {
    showNavigation();
});

//Responsiveness of the screen
//For navigation bar
matchMedia('(max-width: 700px)').addListener(e => {
    changeNav.style.display = 'block';
    if (e.matches) {
        //Hide navigation bar and place button
        changeNav.style.display = 'none';

        move = true;
        offsetButton(move);
    }
    else {
        //Show navogation bar and show button
        changeNav.style.float = 'right';

        move = false;
        offsetButton(move);
    }
});