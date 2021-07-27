const container = document.querySelector('.container');


let  gridNumberUser = 16;

let gridSizeButton = document.querySelector('.gridSize');
gridSizeButton.addEventListener('click', updatedGrids);

function updatedGrids() {
    gridNumberUser = prompt("Enter Grids (1-64): ");
    //for (let i = 0; i <= 1;) {
        if ( gridNumberUser <1 || gridNumberUser > 64 ) {
            gridNumberUser = prompt("Enter Grids (1-64): ");
        }
      //  else break
    //}
    newGrids();
}

function newGrids() {
   // console.log(grids)
    
}



//function gridCreation() {
for (let gridNumber = 1; gridNumber <= (gridNumberUser*gridNumberUser); gridNumber++) {
    gridSizeButton.addEventListener('click', updatedGrids);
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.style.cssText = `grid-template-columns: repeat(${gridNumberUser}, ${60/gridNumberUser}vw);
                               grid-template-rows: repeat(${gridNumberUser}, ${90/gridNumberUser}vh) `
    container.appendChild(grid);
 
}
//}
//window.addEventListener('load', gridCreation);
const grids = document.querySelectorAll('.grid');
console.log(grids)
function changeBgColor() {
    this.classList.add('hover');
}


grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', changeBgColor));

const resetButton = document.querySelector('.reset');

function resetBgColor() {
    grids.forEach(index => index.classList.remove('hover'));
    grids.forEach(index => index.removeAttribute('style'));
    grids.forEach(index => index.classList.remove('random'));
    removeEvent();
} 

resetButton.addEventListener('click', () =>{
            resetBgColor();
})

let count = 0;
function randomColor() {
    count++;
    console.log(count);

        // console.log(count)
        //  if (count==2) {
        //      removeEvent();
        //      return
        // }
        // if (count ==2 ) {
        //     randomButton.removeEventListener('click', randomColor);
        //     count = 0;
        //     return
        // }
        // console.log(count)
        if ( count % 2 == 0 ) {
            console.log(count);
            console.log('bye');
            //grids.forEach(index => index.classList.remove('hover'));
            grids.forEach(index => index.classList.remove('random'));
            grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', () => {
            eachGrid.style.cssText = 'background-color: white'
            }));

            return
        }

        //grids.forEach(index => index.removeAttribute('style'));
        grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', () => {
            console.log('hello');
            let red = Math.floor(Math.random()*255);
            let green = Math.floor(Math.random()*255);
            let blue = Math.floor(Math.random()*255);
            randomRgba =  `rgba(${red}, ${green}, ${blue}, 1)`;
            if ( eachGrid.getAttribute('style') ) {
                darkenByTenPercent(eachGrid);
                return
            }
            eachGrid.classList.add('random')
            eachGrid.style.cssText = `background-color : ${randomRgba}`;
            return
        }))
    }


//let removedRandom = false;
function removeEvent() {
randomButton.removeEventListener('click', randomColor);
//removedRandom = true;
//console.log(removedRandom);
}


function darkenByTenPercent(eachGrid) {
    let colorString = eachGrid.getAttribute('style');
    colorString = colorString.slice( colorString.indexOf('(') + 1, colorString.indexOf(')') );
    let redValue = Number(colorString.slice(0, colorString.indexOf(',')));
    
    colorString = colorString.slice(colorString.indexOf(',') + 1);
    let greenValue = Number(colorString.slice(0, colorString.indexOf(',')));
    
    colorString = colorString.slice(colorString.indexOf(',') + 1);
    let blueValue;
    let opacity;
    if ( colorString.indexOf(',') ==-1 ) {
        blueValue = Number(colorString);
        opacity = 1;
    }
    else {
        blueValue = Number(colorString.slice(0, colorString.indexOf(',')));
        colorString = colorString.slice(colorString.indexOf(',') + 1);
        opacity = Number(colorString);
    }
    
    opacity = opacity - 0.1;
    darkenRgba = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${opacity})`;
    console.log(darkenRgba);
    eachGrid.style.cssText = `background-color : ${darkenRgba}`;
}


const randomButton = document.querySelector('.random');
//console.log(removedRandom)
//if (!(removedRandom)) {
//  console.log(removedRandom)
randomButton.addEventListener('click', randomColor//, {
//  once: true
//}
)
//}
