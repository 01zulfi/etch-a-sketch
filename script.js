function gridCreation() {
    for (let gridNumber = 1; gridNumber <= (gridNumberUser*gridNumberUser); gridNumber++) {
        grid = document.createElement('div');
        grid.classList.add('grid');
        container.style.cssText = `grid-template-columns: repeat(${gridNumberUser}, ${60/gridNumberUser}vw);
                                   grid-template-rows: repeat(${gridNumberUser}, ${95/gridNumberUser}vh)`;
        container.appendChild(grid);
    }
}
let gridNumberUser = 16;
let grid;
const container = document.querySelector('.container');
gridCreation();


function changeBgColor() {
    this.classList.add('hover');
}
let grids = document.querySelectorAll('.grid');
grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', changeBgColor));


function resetBgColor() {
    grids.forEach(index => index.classList.remove('hover'));
    grids.forEach(index => index.removeAttribute('style'));
} 
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetBgColor);


function randomColor() {
     grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', () => {
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        randomRgba =  `rgba(${red}, ${green}, ${blue}, 1)`;
        eachGrid.setAttribute('style',  `background-color : ${randomRgba}`);
    }))
}
const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', randomColor);

const whiteButton = document.querySelector('.white');
whiteButton.addEventListener('click', () => {
    grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', () => {
        eachGrid.setAttribute('style', 'background-color: white');
    }))
})

function updatedGrids() {
    for (let i = 0; i < 1;) {
        gridNumberUser = prompt("Enter Grids (1-64): ");
        Number(gridNumberUser);
            if ( !(gridNumberUser == NaN)) {
                if ( gridNumberUser >= 1 && gridNumberUser <= 64 ) {
                    break
                }
                else {
                    alert('Please Enter a number between 1-64')
                }
            }
            else {
                alert('Please Enter a number between 1-64')
            }
    }
    grids.forEach(eachGrid => eachGrid.remove());
    gridCreation();
    grids = document.querySelectorAll('.grid');
    grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', changeBgColor));
    randomButton.addEventListener('click', randomColor);
}
let gridSizeButton = document.querySelector('.gridSize');
gridSizeButton.addEventListener('click', updatedGrids);