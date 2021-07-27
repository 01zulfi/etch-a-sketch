const container = document.querySelector('.container');

let grid;
//let  gridNumberUser = 16;
let gridNumberUser;
gridNumberUser = prompt('Enter Grids: ');
let gridSizeButton = document.querySelector('.gridSize');
gridSizeButton.addEventListener('click', updatedGrids);

function updatedGrids() {
    gridNumberUser = prompt("Enter Grids (1-64): ");
    grids.forEach(eachGrid => eachGrid.remove());
    gridCreation();
    grids = document.querySelectorAll('.grid');
    grids.forEach(eachGrid => eachGrid.classList.remove('hover'))
    console.log(grids);
    grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', changeBgColor));
    randomButton.addEventListener('click', randomColor);
    //for (let i = 0; i <= 1;) {
        // if ( gridNumberUser <1 || gridNumberUser > 64 ) {
        //     gridNumberUser = prompt("Enter Grids (1-64): ");
        // }
      //  else break
    //}
    newGrids();
}

function newGrids() {
   // console.log(grids)
    
}



function gridCreation() {
for (let gridNumber = 1; gridNumber <= (gridNumberUser*gridNumberUser); gridNumber++) {
    gridSizeButton.addEventListener('click', updatedGrids);
    grid = document.createElement('div');
    grid.classList.add('grid');
    container.style.cssText = `grid-template-columns: repeat(${gridNumberUser}, ${60/gridNumberUser}vw);
                               grid-template-rows: repeat(${gridNumberUser}, ${90/gridNumberUser}vh) `
    container.appendChild(grid);
 
}
}
gridCreation();
//window.addEventListener('load', gridCreation);
let grids = document.querySelectorAll('.grid');
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
//function randomColor(check)
function randomColor() {
    // if ( check==1 ) {
    //     return
    // }
    //removeEvent();
    // count++;
    // console.log(count);

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
        // if ( count % 2 == 0 ) {
        //     console.log(count);
        //     console.log('bye');
        //     //grids.forEach(index => index.classList.remove('hover'));
        //     grids.forEach(index => index.classList.remove('random'));
        //     grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', () => {
        //     eachGrid.style.cssText = 'background-color: white'
        //     }));

        //     return
        // }

        //grids.forEach(index => index.removeAttribute('style'));
    //grids.forEach(eachGrid => eachGrid.addEventListener('mouseover', eachColor(eachGrid))); 
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

// let itemIndex = 0;
// function eachColor(eachGrid) {
//     // let eachGrid = grids.item(++itemIndex);
//      console.log(eachGrid);
//     console.log('hello');
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     randomRgba =  `rgba(${red}, ${green}, ${blue}, 1)`;
//     if ( eachGrid.getAttribute('style') ) {
//         darkenByTenPercent(eachGrid);
//         return
//     }
//     eachGrid.classList.add('random')
//     eachGrid.style.cssText = `background-color : ${randomRgba}`;
//     return

// }


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
randomButton.addEventListener('click', randomColor);
//console.log(removedRandom)
//if (!(removedRandom)) {
//  console.log(removedRandom)
// if ( !(count%2==0) ) {
//     console.log(count);
//     randomButton.addEventListener('click', randomColor);
// }


// randomButton.addEventListener('click', () => {
//     count++;
//     if (count % 2 == 0 ) {
//         if ( !(count==0) ) {
//         console.log(count);
//         randomButton.removeEventListener('click', randomColor);
//         }
//         else {
//             addRandomColor();
//         }
//     }
//     else {
//         console.log(count);
//         addRandomColor();
//     }
// })

// function addRandomColor() {
//     randomButton.addEventListener('click', randomColor);
// }


// randomButton.addEventListener('click', () => { 
//     if (true) {
//         count++;
//         console.log(count);
//         if ( count = 2) {
//             randomButton.removeEventListener('click', randomColor);
//         }
//         else {
//         addRandomColor();
//         }
//     }

// })

// function countClick() {
//     count++;
    
//     if ( count % 2 == 0) {
//         console.log(count);
//         randomColor(1);
//     }
//     else {
//         console.log(count);
//         randomColor();
//     }
// }

// randomButton.addEventListener('click', countClick)