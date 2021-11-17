function reverseNum(number){
    result = [];
    while (number > 0) {
        result.push(number % 10);
        number = Math.floor(number / 10);
    }
    result = result.join("")
    return result 
}
function checkPalindrome(num){
    if (num == reverseNum(num)){
        return true;
    }else {
        return false
    }

}
console.log(checkPalindrome(10))