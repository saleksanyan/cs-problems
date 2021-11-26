const matrixOperations = require('./utils.js');

const mat1 = [
    [1,2],
    [3,4]
]
const mat2 = [
    [5,6],
    [7,8],
    
]
const mat3 = [
    [5,6,9],
    [7,8,9],
    
]
const mat4 = [
    [5,6,9],
    [7,8,9],
    [7,8,9]
]


//console.log(matrixOperations.matrixProduct(mat1, mat3));
//console.log(matrixOperations.sumOfMatrices(mat1, mat2));
console.log(matrixOperations.sumOfEachRow(mat1));
