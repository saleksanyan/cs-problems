function binarySum(num1, num2){
    let number1 = num1.toString();
    let number2 = num2.toString();
    let array1 = [];
    let array2 = [];

    for (let i = 0; i < number1.length; i++) {
        array1.push(Number(number1.charAt(i)));
    }
    for (let i = 0; i < number2.length; i++) {
        array2.push(Number(number2.charAt(i)));
    }
    
    if (array1.length > array2.length){
        for (let i = (array1.length - array2.length); i > 0; i--){
            array2.unshift(0);
        }
    }
    if (array2.length > array1.length){
        for (let i = (array2.length - array1.length); i>0; i--){
            array1.unshift(0);
        }
    }
    let finalArray = [];
    let carry = 0;
    for (let i = array1.length - 1; i >=0; i--){
        
        let result = carry + array1[i]+array2[i];
        if (carry === 1){
            carry--
        }
        if (result === 2){
            finalArray.unshift(0);
            carry++;
        }else if (result === 3){
            finalArray.unshift(1);
            carry++;
        }
        else {
            finalArray.unshift(result);
        } 
    }
    if (carry === 1){
        finalArray.unshift(1);
    }
    return finalArray.join("")
}


console.log(binarySum(11, 1))


