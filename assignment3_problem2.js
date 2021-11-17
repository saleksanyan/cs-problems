function findPrime(number) {
    let root = Math.sqrt(number);
    for (let i = Math.floor(root); i > 1; i--){
        if (number % i === 0) {
            return false;
        }
    }
    if (number=== 1 || number === 0 ){
        return false
    }
    
    return true;    
}

function allPrimes(firstNum, secondNum){
    let result = [];
    for(let i = firstNum; i <= secondNum; i++){
        if (findPrime(i) === true){
            result.push(i);
        }
    }
    return result
}

console.log(allPrimes(2, 6));
