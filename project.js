/*
1. deposit some money.
2. determine number of lines to bet.
3. collect a bet amount.
4. spin slot machine.
5. check if user won.
6. give user winning / take money lost.
7. play again / have failsafe in case of no money.
*/

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYBMOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

//deposit some money

const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: $");
        const numberDepositAmount = parseFloat(depositAmount);
        if(isNaN(numberDepositAmount) || numberDepositAmount <=0){
            console.log("Invalid amount entered, try again!");
        }else{
            return numberDepositAmount;
        }
    }
}

let balance = deposit();
console.log(balance);

//determine number of lines to bet

const getNumberOfLines=()=>{
    while(true){
        const lines = prompt("Enter the number of lines you'd like to bet on(1-3): ");
        const numberOfLines = parseFloat(lines);
        if(isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines > 3){
            console.log("Invalid number of lines entered, try again!");
        }else{
            return numberOfLines;
        }
    }
}

const numberOfLines = getNumberOfLines();
console.log(numberOfLines);

//collect bet amount

const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter the bet amount per line: $");
        const betAmount = parseFloat(bet);
        if(isNaN(betAmount) || betAmount <=0 || betAmount > balance / lines){
            console.log("Invalid bet amount entered, try again!");
        }else{
            return betAmount;
        }
    }
}

const betAmount = getBet(balance, numberOfLines);
console.log(betAmount);

//spin the slot machine
const spin = () =>{
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for (let i = 0; i<COLS; i++){
        const reelSymbols = [...symbols];
        for (let j = 0; j<ROWS; j++){
            const randomIndex = Math.floor(Math.random()* reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
        }
    }
}