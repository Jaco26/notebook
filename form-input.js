// Dice Game

// 1: You and the computer each have two six-sided dice.
//    - based on coin flip, you or it will bet first
//    - whoever bets second must match at least 80% of the first better's bet

// 2: You start the game with 50 tokens with which to bet
//    - to bet, you can move tokens to the pool by clicking any combination.
//      of three buttons.
//    - these buttons respectively put 1, 5, and 10 tokens in the pool each time
//      they are clicked.

// 3: The computer will also start with 50 tokens and will be making random bets
//    - After each round, the computer will choose a betting strategy for the next
//      round.
//
//         if (computer win && computer tokens / human tokens > 1) {
//           bet between 60% and 80% of tokens
//         }
//         else if (computer win && computer tokens / human tokens < 1) {
//           bet between 20% and 60% of tokens
//         }
//         else {
//           bet between 40% and 80% of tokens
//         }


// 4: Once you have less than 10 tokens, your 'bet 10' button won't work



// constructor for Player
function Player (coinCount, betCount){
  this.coinCount = coinCount;
  this.betCount = betCount;
}

// create instance of human Player
var you = new Player(25, 0);

// create instance of cpu Player
var cpu = new Player(25, 0);

// create dice and append to .h-dice and .cpu-dice

var diceArray = [];

function createDice(){
  for(var i = 0; i < 4; i++){
    var dice = document.createElement('div');
    if(i < 2){
      dice.setAttribute('class', 'human-dice');
      document.querySelector('.h-dice').appendChild(dice);
      diceArray.push(dice);
    } else {
      dice.setAttribute('class', 'cpu-dice');
      document.querySelector('.c-dice').appendChild(dice);
      diceArray.push(dice);
    }
  }
}
createDice();




// Write function to bet 1 coin
function betOne(){
  you.betCount += 1;
  you.coinCount -= 1;
  document.querySelector('.h-bet').textContent = 'your bet: ' + you.betCount;
}


// Write function to bet 5 coins
function betFive(){
  you.betCount += 5;
  document.querySelector('.h-bet').textContent = 'your bet: ' + you.betCount;
}

// Write function to bet 10 coins
function betTen(){
  you.betCount += 10;
  document.querySelector('.h-bet').textContent = 'your bet: ' + you.betCount;
}


// roll dice
function determineWinner(){
  return diceArray.map(function(x){
    var ranNum = Math.floor(Math.random()*6) + 1;
    console.log(x);
    x.textContent = ranNum;
  });
}





// create human tokens
function createHumanCoins(){
  for(var i = 0; i < you.coinCount; i++){
    var coinImg = document.createElement('img');
    coinImg.setAttribute('src', 'images/coin.png');
    coinImg.setAttribute('class', 'coin');
    document.querySelector('.your-coins').appendChild(coinImg);
  }
}

// create cpu tokens
function createCpuCoins(){
  for(var i = 0; i < cpu.coinCount; i++){
    var coinImg = document.createElement('img');
    coinImg.setAttribute('src', 'images/coin.png');
    coinImg.setAttribute('class', 'coin');
    document.querySelector('.cpu-coins').appendChild(coinImg);
  }
}




// create a reference to the bet-one button and make it do something
var bet1 = document.querySelector('.bet-1');
var bet5 = document.querySelector('.bet-5');
var bet10 = document.querySelector('.bet-10');
var lockBet = document.querySelector('.lock-bet');
var rollTheDice = document.querySelector('.roll-the-dice');


bet1.addEventListener('click', betOne);
bet5.addEventListener('click', betFive);
bet10.addEventListener('click', betTen);
//lockBet.addEventListener('click', lockInBet);
rollTheDice.addEventListener('click', determineWinner);


// Call coins
// these createCoins() calls displays each players coinCount with coin images appended to each players' respective 'coins' div
createHumanCoins();
createCpuCoins();




//
