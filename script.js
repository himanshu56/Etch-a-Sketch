const container = document.getElementById("container");

function makeGrids(rows, cols){
    if(rows == 0 && cols == 0) return;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let c=0;c<rows*cols;c++){
        let cell = document.createElement('div');
        cell.id = c+1;
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black"
        });
        container.appendChild(cell).className = "grid-item";
        container.style.cssText = `grid-template-columns: repeat(${rows}, 1fr); grid-template-rows: repeat(${cols}, 1fr)`;
    };

};

makeGrids(16, 16);
//makeGrids(0, 0);

function resetFunction() {
    document.getElementById("container").innerHTML = "";
    let gridSize = window.prompt("Enter grid size!!");
    makeGrids(0, 0);
    makeGrids(gridSize, gridSize);
};