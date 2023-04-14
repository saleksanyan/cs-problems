let word = 'abc'
let letterarray = [];
for (let i = 0; i < word.length; i++){
    letterarray.push(word[i])
}
let wordlist = []

for (let i = 0; i < letterarray.length; i++){
    let letter = letterarray[0]
    letterarray.splice(0,1)
    letterarray.push(letter)
    let newWord = ''
    for (let j = 0; j < letterarray.length; j++ ){
        newWord += letterarray[j]
    }
    wordlist.push(newWord)
}   

for (let i = 0; i < letterarray.length; i++){
    let firstLetter = letterarray[i]
    letterarray.splice(i,1)

    for (let k = 0; k < letterarray.length; k++ ){
        let letter2 = letterarray[0]
        letterarray.splice(0,1)
        letterarray.push(letter2)
        let newWord2 = firstLetter
        
        for (let j = 0; j < letterarray.length; j++ ){
            newWord2 += letterarray[j]
        }
        wordlist.push(newWord2)
        
        
    }
    letterarray.unshift(firstLetter)

}

for (let i = 0; i<wordlist.length; i++){
    let splitedWord = wordlist[i]
    
    let count = 0
    for( let j = 0; j < wordlist.length-1; j++){
        if(wordlist[j]===splitedWord){
            count++
        }
    }
    if (count > 1){
        wordlist.splice(i,1)
    }
    
}

console.log(wordlist)

