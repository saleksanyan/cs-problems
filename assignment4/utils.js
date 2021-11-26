module.exports = {
     
    matrixProduct: function (mat1, mat2) {
        let finalMat = [];
        if (mat1[0].length !== mat2.length){
            return "It is not possible to find their product."
        }
        for (let i = 0; i < mat1.length; i++){
            for (let j = 0; j < mat2[0].length; j++){
                let result = 0;
                for (let k = 0; k < mat1[0].length; k++){
                    result += (mat1[i][k] * mat2[k][j])
                }finalMat.push(result)
            }
        }return finalMat
    },
    

    sumOfMatrices: function (mat1, mat2){
        let result = [];
        for (i = 0; i < mat1.length; i++){
            for (j = 0; j<mat1.length; j++){
                result.push(mat1[i][j]+mat2[i][j]);
                
            }
        }return result
    },


    sumOfArray: function (arr) {
        let result = 0;
        for (let i = 0; i< arr.length; i++){
            result += arr[i];
        }return result
    },

    sumOfEachRow:  function (mat) {
        let result = [];
        for (let i = 0; i < mat.length; i++){
            result.push(this.sumOfArray(mat[i]))
        }return result
    },
}
