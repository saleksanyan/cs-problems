function reverseNumber(number){
    let result = [];
    while (number > 0) {
        result.push(number % 10);
        number = Math.floor(number / 10);
    }
    result = result.join("")
    return result 
}  
    
console.log(reverseNumber(387))
    