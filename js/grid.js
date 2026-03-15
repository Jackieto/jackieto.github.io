const grid = document.querySelector('.guitar-grid')

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        grid.appendChild(cell)    
    }
}