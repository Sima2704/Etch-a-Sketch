let rows = 32;
let cols = 32;
const gridSize = 600;

const container = document.querySelector('.container');
container.style.height = container.style.width = `${gridSize}px`;


function setColorBlack (){
    this.style.backgroundColor = 'black';
}

const makeGrid = () => {
    for(let i=0; i<rows*cols; i++){
        const cell = document.createElement('div');
    
        cell.classList.add('cell')
        cell.style.height = cell.style.width =`${gridSize / rows}px`;

        container.appendChild(cell);

        cell.addEventListener('mouseover', setColorBlack);
    }
}

makeGrid()
