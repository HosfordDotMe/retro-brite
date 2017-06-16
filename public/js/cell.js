/**
 * Create a cell with a constructor
 * @param       {integer} width  width of cell
 * @param       {height} height height of cell
 * @param       {string} color  color of cell
 * @constructor new  Cell(100, 100, 'red');
 */

function Cell(width, height, color) {
  this.width = width || 100;
  this.height = height || 100;
  this.color = color || 'red';
}

Cell.prototype.toHTML = function(){
  const div = document.createElement('div');
  div.style.height = `${this.height}px`;
  div.style.margin = `0`;
  div.style.display = 'inline-block';
  div.style.width = `${this.width}px`;
  div.style.border = `1px solid black`;
  div.style.backgroundColor = this.color;
  return div;
};


/**
 * Create a cell through a factory function
 * @param  {integer} width  width of Cell
 * @param  {integer} height height of Cell
 * @param  {string} color  color of Cell
 * @return {object}        cell object
 */

// function createCell(width,height,color) {
//   const Cell = {
//     width: height,
//     height: height,
//     color: color
//   };
//   return Cell;
// }

// const x = createCell(100,100,'red');
// const y = createCell(100,100,'red');
