const container = document.querySelector('.container');


gridNumberUser = prompt("enter grids: ");

for (let gridNumber = 1; gridNumber <= (gridNumberUser*gridNumberUser); gridNumber++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.style.cssText = `grid-template-columns: repeat(${gridNumberUser}, ${60/gridNumberUser}vw);
                                grid-template-rows: repeat(${gridNumberUser}, ${90/gridNumberUser}vh) `
    container.appendChild(grid);
}

const grids = document.querySelectorAll('.grid');
function changeBgColor() {
    this.classList.add('hover');
}
grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', changeBgColor));

const resetButton = document.querySelector('.reset');

function resetBgColor() {
    grids.forEach(index => index.classList.remove('hover'));
    grids.forEach(index => index.removeAttribute('style'));
} 

resetButton.addEventListener('click', () =>{
            resetBgColor();
})


function randomColor() {
    grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', () => {
        
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        randomRgba =  `rgba(${red}, ${green}, ${blue})`;
        if ( eachGrid.getAttribute('style') ) return
        // if ( eachGrid.getAttribute('style') ) {
        //     // let numbersOnly = (index) => {
        //     //     if (typeof(index) == 'number') {
        //     //         return index
        //     //     }
        //     // }
        //     let wowNumbers = eachGrid.getAttribute('style')
        //     let arrayy = Array.from(wowNumbers.substring(22));
        //     let number1 = '';
        //     let string = 0;
        //     for (let i=0; i<arrayy.length; i++) {
        //         string = Number(arrayy[i]);
        //         console.log(!(string == NaN));
        //         if ( !(string == NaN)   ) {
        //             number1 = number1 + arrayy[i];
        //             console.log(number1);
        //             }
        //     }
        //     let redBlack = red;
        //     let greenBlack = green;
        //     let blueBlack = blue;
        //     redBlack = redBlack - red*0.1;
        //     greenBlack = greenBlack - green*0.1;
        //     blueBlack = blueBlack - blue*0.1;
        //     randomRgba =  `rgba(${redBlack}, ${greenBlack}, ${blueBlack})`
        //     eachGrid.style.cssText = `background-color : ${randomRgba}`
        //     return
        // }
        eachGrid.style.cssText = `background-color : ${randomRgba}`;
     }))
}

const randomButton = document.querySelector('.random');

randomButton.addEventListener('click', randomColor);