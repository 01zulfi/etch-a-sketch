const container = document.querySelector('.container');

for (let gridNumber = 1; gridNumber <=256; gridNumber++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    //grid.textContent = 'I\'m here';
    //console.log(grid);
    container.appendChild(grid);
}

const grids = document.querySelectorAll('.grid');
function changeBgColor() {
    this.classList.add('hover');
}
grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', changeBgColor));

