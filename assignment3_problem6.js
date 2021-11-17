function reverseBinary(number){
    let num = number.toString();
    let numArray = [];
    let finalArray = [];
    for (let i = 0; i < num.length; i++) {
        numArray.push(Number(num.charAt(i)));
    }
    
    for (let i = 0; i < numArray.length; i++){
        if (numArray[i]===0){
            finalArray.push(numArray[i] + 1)
        }else if (numArray[i]===1){
            finalArray.push(numArray[i] - 1);
        }

    }
    if (finalArray.length % 4 !== 0){
        finalArray.unshift(1)
    }
    return finalArray.join('')
    
}
console.log(reverseBinary(11))
