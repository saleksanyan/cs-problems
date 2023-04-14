const reader = require('readline-sync');

let player1name = reader.question("Please enter your name player 1 (you will be X): ");


let player2name = reader.question("Please enter your name player 2 (you will be O): ");
let arr = new Array(9).fill(' ')


let xIndeces = [];
let oIndeces = [];


//make the board
function printTheBoard(arr){
    console.log('            ');
    console.log('THE BOARD:');
    console.log('_________');
    console.log(arr[0], '|', arr[1],  '|', arr[2]);
    console.log('_________');
    console.log(arr[3],  '|', arr[4],  '|', arr[5]);
    console.log('_________');
    console.log(arr[6],  '|', arr[7],  '|', arr[8]);
    console.log('_________');
    console.log('            ');
    
}

//pleyer 1 choice 
function theChoiceOfX(arr){
    let player1choice = reader.questionInt(`Where do you want to put X, ${player1name} (from the first squaire 1,2,3,4,5,6,7,8,9)? `);
    
    while (player1choice !== 1 && player1choice !== 2 && player1choice !== 3 && player1choice !== 4 && player1choice !== 5 && player1choice !== 6 && player1choice !== 7 && player1choice !== 8 && player1choice !== 9){
        player1choice = reader.questionInt(`${player1name}, please choose from (from the first squaire 1,2,3,4,5,6,7,8,9): `);
    }
    if(arr[player1choice - 1] !== 'X' && arr[player1choice -1] !== "O"){
        arr.splice(player1choice-1, 1, 'X');
        xIndeces.push(player1choice-1)
        
        return printTheBoard(arr)
    }
    else {
        
        console.log('Please choose another place for X.')
        theChoiceOfX(arr)
        
    }
    
    
    
    
}

// player 2 choice
function theChoiceOfO(arr){
    let player2choice = reader.questionInt(`Where do you want to put O, ${player2name} (from the first squaire 1,2,3,4,5,6,7,8,9)? `);
    
    
    if (player2choice !== 1 && player2choice !== 2 && player2choice !== 3 && player2choice !== 4 && player2choice !== 5 && player2choice !== 6 && player2choice !== 7 && player2choice !== 8 && player2choice !== 9){
        player2choice = reader.questionInt(`${player2name}, please choose from (from the first squaire 1,2,3,4,5,6,7,8,9): `);
    }
    if(arr[player2choice - 1] !== 'X' && arr[player2choice -1] !== "O"){
        arr.splice(player2choice-1, 1, 'O');
        oIndeces.push(player2choice-1)
        return printTheBoard(arr)
        
    }
    else {
        
        console.log('Please choose another place for O.')
        theChoiceOfO(arr)
    }
    
}

// the result of the game
function theWinner(arr){

    
    const winningCombinations =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    while (arr.includes(' ')){
        
        theChoiceOfO(arr);
        //checking if the first player is the winner
        if (oIndeces.length >= 3){
            for(let i = 0; i < 8; i++){
            let result = 0;
                for(let j = 0; j < 3; j++){
                    if (oIndeces.includes(winningCombinations[i][j])){
                        result++;
                    }
                
                    if (result === 3){
                        return `${player2name} is the winner! \n`
                    }
                }
            }
        }
        
        
        theChoiceOfX(arr);
        
        //checking if the second player is the winner
        if (xIndeces.length >= 3){
            for(let i = 0; i < 8; i++){
            let result2 = 0;
                for(let j = 0; j < 3; j++){
                    if (xIndeces.includes(winningCombinations[i][j])){
                        result2++;
                    }

                    if (result2 === 3){
                        return `${player1name} is the winner! \n`
                    }
                }
            }
        }
        
    } 
    return "It's a tie... hahaha, losers!"
    
}





printTheBoard(arr)
theChoiceOfX(arr)
console.log(theWinner(arr))












