const App = {
  rootElement: '#app',
  selectedColor: 'white',
  numRows: 10,
  numCols: 10,
  cellWidth: 25,
  cellHeight: 25,
  grid: [],
  start: function() {
    this.cacheDOM();
    this.makeGrid();
    this.bindEvents();
    this.render();
  },
  makeGrid: function() {
    this.grid = new Array(this.numRows);
    for(let rowIndex = 0; rowIndex < this.numRows; rowIndex += 1) {
      this.grid[rowIndex] = new Array(this.numCols);
      for(let colIndex = 0; colIndex < this.numCols; colIndex += 1) {
          this.grid[rowIndex][colIndex] = new Cell(this.cellWidth, this.cellHeight, this.selectedColor);
      }
    }
  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.colorButtons = this.root.querySelectorAll('button.color');
    this.gridOutput = this.root.querySelector('.gridOutput');
  },
  bindEvents: function(){
    this.colorButtons.forEach(btn => {
      const newColor = btn.classList[1];
      btn.addEventListener('click', () => this.setColor(newColor));
  });
},
setColor: function(newColor){
  this.selectedColor = newColor;
},
  render: function(){
    this.gridOutput.innerHTML = '';

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', () => this.resetGrid());
    this.gridOutput.appendChild(resetButton);

    this.grid.forEach((row, rowIndex) => {
      const rowContainer = document.createElement('div');
      rowContainer.style.height = `${this.cellHeight}px`;
      row.forEach((cell, colIndex) => {
        const element = cell.toHTML();
        element.addEventListener('click', () => this.changeColor(rowIndex, colIndex));
        rowContainer.appendChild(element);
      });
      this.gridOutput.appendChild(rowContainer);
    });
  },
  resetGrid: function() {
    this.selectedColor='white';
    this.makeGrid();
    this.render();
  },
  changeColor: function(rowIndex, colIndex) {
    const cell = this.grid[rowIndex][colIndex];
    cell.color = this.selectedColor;
    this.render();
  }
};
App.start();
