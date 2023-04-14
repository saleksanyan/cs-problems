const reader = require('readline-sync');
const fs = require('fs')
const data = fs.readFileSync('./VendingMachine.json');
let dataSet = JSON.parse(data);




function printProductList(dataSet){
    for (let i = 0; i < dataSet.market.length; i++){
        let product = `${i+1}.`+ dataSet.market[i].name + ' - '+ dataSet.market[i].price + ' dram '
        if (dataSet.market[i].count === 0){        
            product += "(Not Available)"
        }
        console.log(product)
    }
    
}




function sellProduct(dataSet){

    let sum = 0;
    let userchoice = reader.questionInt("\n" + "What is the number of the product you want? " );
    
    // checking if userchoice is in the vending machine list
    let productIndex = [];
    for (let i = 0; i < dataSet.market.length; i++){
        if (dataSet.market[i].count){
            productIndex.push(i+1)   
        }
    }
    while (productIndex.includes(userchoice) === false){
        userchoice = reader.questionInt('  \n' + "Please choose from the list (Available ones): ");
    }
    // product payment
    while (sum < dataSet.market[userchoice-1].price){
        let coin = reader.questionInt("\n" + "Insert the coins(50, 100, 200, 500) => " );
        while (coin !== 50 && coin !== 100 && coin !== 200 && coin !== 500){
            coin = reader.questionInt("\n" + "Please, choose from 50, 100, 200 or 500 => ");
        }
        sum += coin;
    }
    
    // giving back the change if there is one
    let change = 0; 

    // payment is more than the cost
    if (sum > dataSet.market[userchoice-1].price){
        change = sum - dataSet.market[userchoice-1].price 
    }
    
    let changeCoins = [];
    let priceArray = [50, 100, 200, 500];
    
    //payment is less than 500
    for (let i = priceArray.length - 1; i >=0; ){
        
        if(change >= priceArray[i]){
            changeCoins.push(priceArray[i])
            change -= priceArray[i]
        }
        else{
            i--;
        }
    }
    
    
    if (changeCoins.length > 0) {
        console.log(`\nThank you...Here is your change ${changeCoins}  \n`);
    }
    console.log(`\nPlease, take your ${dataSet.market[userchoice - 1].name} \n`);
    
    //decreasing the count of the item in the JSON
    dataSet.market[userchoice-1].count--;
    fs.writeFileSync('./VendingMachine.json', JSON.stringify(dataSet))
    
    //asking the user if he wants to continue
    stopOrContinue = reader.question("\n" + "Do you want to use Vending Machine one more time?(Y or N) ").toUpperCase();
    console.log("\n");
    while (stopOrContinue !== 'Y' && stopOrContinue !== 'N' ){
        stopOrContinue = reader.question("\n" + "The input should be Y or N ").toUpperCase();
        console.log("\n");
    }
    if (stopOrContinue === 'Y'){
        printProductList(dataSet);
        sellProduct(dataSet);
    }
    else{
        return;
    }

    
}






printProductList(dataSet)
sellProduct(dataSet)

