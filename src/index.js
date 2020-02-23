
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix = matrix || [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if(i%2 == 0) {
      matrix[i].forEach(el => result.push(el));
    } else {
      matrix[i].reverse().forEach(el => result.push(el));
    }
  }
  return result;
}
