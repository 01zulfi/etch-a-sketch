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
    grids.forEach(index => index.classList.remove('random'));
} 

resetButton.addEventListener('click', () =>{
            resetBgColor();
})

let count = 0;
function randomColor() {
    // count++;
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
    //       eachGrid.style.cssText = 'background-color: white'
    //     }));

    //     return
    // }

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
     }))
}

function removeEvent() {
randomButton.removeEventListener('click', randomColor);
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
    
    eachGrid.style.cssText = `background-color : ${darkenRgba}`;
}


const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', randomColor)
