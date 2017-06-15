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
