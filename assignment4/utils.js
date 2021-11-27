module.exports = {
     
    matrixProduct: function (mat1, mat2) {
        let finalMat = new Array(mat1.length);
        if (mat1[0].length !== mat2.length){
            console.log("It is not possible to find their product.")
            return
        }
        for (let i = 0; i < mat1.length; i++){
            finalMat[i] = new Array(mat2[0].length)
            for (let j = 0; j < mat2[0].length; j++){
                finalMat[i][j] = 0;
                for (let k = 0; k < mat1[0].length; k++){
                    finalMat[i][j] += (mat1[i][k] * mat2[k][j])
                }
            }
            console.log(finalMat[i])
        }
    },
    

    sumOfMatrices: function (mat1, mat2){
        let result = new Array(mat1.length);
        for (i = 0; i < mat1.length; i++){
            result[i] = new Array(mat2[0].length)
            for (j = 0; j<mat1.length; j++){
                
                result[i][j] = (mat1[i][j]+mat2[i][j]);
                
            }
            console.log(result[i])
        }
    },


    sumOfArray: function (arr) {
        let result = 0;
        for (let i = 0; i< arr.length; i++){
            result += arr[i];
        }
        return result
    },

    sumOfEachRow:  function (mat) {
        let result = [];
        for (let i = 0; i < mat.length; i++){
            result.push(this.sumOfArray(mat[i]))
        }
        return result
    },
}
