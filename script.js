// const openMenu = () => {
//     const menuButton = document.getElementsByClassName('openMenu');
//     // const menu = document.getElementsByClassName('menu');

//     // menuButton.addEventListener('clicked', menu.classList.toggle('showMenu'));
//     menuButton.onclick = () => {
//         console.log(this);
//     }

// }

console.log('hi world');

const openMenu = () => {
    const menuButton = document.getElementsByClassName('openMenu');
    const menu = document.getElementsByClassName('menu');
    
    menuButton.onclick = () => {
        console.log('the thing was clicked');
        // menu.classList.toggle('showMenu');
    }
}

openMenu();