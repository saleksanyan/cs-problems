function findPrime(number) {
    let root = Math.sqrt(number);
    for (let i = Math.floor(root); i > 1; i--){
        if (number % i === 0) {
            return false;
        }
    }
    return true;    
}
console.log(findPrime(4))
