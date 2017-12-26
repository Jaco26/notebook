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



// store referenes to the game controls inside an object literal
var gameCtl = {
  bet1: document.querySelector('.bet-1'),
  bet5: document.querySelector('.bet-5'),
  bet10: document.querySelector('.bet-10'),
  lockBet: document.querySelector('.lock-bet'),
  goDice: document.querySelector('.roll-the-dice'),
};

// store references to the game information displays inside an object literal
var gameInfo = {
  yourBet: document.querySelector('.h-bet'),
  cpuBet: document.querySelector('.cpu-bet'),
  wins: document.querySelector('.wins'),
  winCount: 0,
  losses: document.querySelector('.losses'),
  lossCount: 0,
  ties: document.querySelector('.ties'),
  tieCount: 0,
  games: document.querySelector('.games'),
  gameCount: 0
};


// This is the Player constructor.  What is passed in as arguments for its 4 parameters will define Player object instances' properties as follows:
//  - coins: an empty array to store accessable references to the
//    coins created by the generateCoins() method
//  - coinCount: how many coins each player has available
//  - betCount: the size of the bet the player will make
//  - diceArray: this is an empty that will hold a history of the
//    player's dice values.
//    It will display the values of the current roll
//  - diceValue: this is also an empty array but it will be used in
//    rollDice() to only store the value of the current roll.
//      These values will be compared to the computer's dice values
//      to determine the winner of a round in whoWon()
function Player(coins, coinCount, betCount, diceArray, diceValue){
  this.coins = coins;
  this.coinCount = coinCount;
  this.betCount = betCount;
  this.diceArray = diceArray;
  this.diceValue = diceValue;
}
// The createDice() method is defined on the Player object's prototype and will be available to instances of Player objects.
// createDice() has 3 parameters:
//  - for the 1st, pass which players' diceArray property you
//    want the dice created by this function to be stored in
//  - for the 2nd, pass where it to should be appended to
//    on the DOM
//  - for the 3rd, pass how many dice you want to create
Player.prototype.createDice = function (storagePlace, whereToAppend, howMany) {
  for(var i = 0; i < howMany; i++){
    var dice = document.createElement('div');
    dice.setAttribute('class', 'dice');
    document.querySelector(whereToAppend).appendChild(dice);
    storagePlace.push(dice);
  }
};

// The rollDice() method is defined on the Player object's
// prototype and will be available to instances of Player objects.
//  rollDice() will generate 2 random numbers and it uses one
//  parameters:
//    - player: pass which player this method is meant for as an
//      argument. This will send the outputs to the correct arrays
Player.prototype.rollDice = function (player) {
  for (var i = 0; i < 2; i++) {
    var ranNum = Math.floor(Math.random()*6)+1;
    player.diceArray[i].textContent = ranNum;
    player.diceArray.push(ranNum);
    player.diceValue.splice(i, 1, ranNum);
  }
};

// The generateCoins() method is defined on the Player object's
// prototype and will be available to instances of Player objects.
// It uses three parameters.
//  - for the 1st, pass which players' coins are being created.
//    This will allow the method to push the coins it generates to
//    an accessable array 'Player.coins'
//  - for the 2nd, pass the class of the div the coins should be
//    appended to
//  - for the 3nd, pass how many coins you want to generate.
//    Pass Player.coinCount so as to keep the number of coins
//    displayed flexible
Player.prototype.generateCoins = function (whose, appendWhere, howMany) {
  for (var i = 0; i < howMany; i++) {
    var coinImg = document.createElement('img');
    coinImg.setAttribute('src', 'images/coin.png');
    coinImg.setAttribute('class', 'coin');
    document.querySelector(appendWhere).appendChild(coinImg);
    whose.push(coinImg);
  }
};


// Create two Player object instances:
//  - for each instance, call the createDice() method to create divs
//    that will be used to visually represent dice
//  - for each instance, call the generateCoins() method to generate
//    a specified number of coinImg's in a specified place

var human = new Player([], 25, '', [], []);
human.createDice(human.diceArray, '.h-dice', 2);
human.coinCount *= 5;
human.generateCoins(human.coins, '.your-coins', human.coinCount);

var cpu = new Player([], 25, '', [], []);
cpu.createDice(cpu.diceArray, '.c-dice', 2);
cpu.coinCount = 125;
cpu.generateCoins(cpu.coins, '.cpu-coins', cpu.coinCount);




// write function to check who won based on the dice totals
// This function whoWon() does the following:
//  - calls the Player.rollDice method for both Player instances
//  - stores the sum of each players diceValue arrays in var 'x' and
//    'y' respectively
//  - compares these two values to determine who wins
//  - it provides space for code for the 3 possible outcomes
//  - in addition to the win/loss/tie info, it prints the number of
//    games that have been played to the info screen
function whoWon(){
  human.rollDice(human, 3);
  var x = human.diceValue.reduce(function(a,b){
    return a + b;
  });

  cpu.rollDice(cpu, 2);
  var y = cpu.diceValue.reduce(function(a,b){
    return a + b;
  });

  if(x > y){
    gameInfo.winCount++;
    gameInfo.wins.textContent = 'Wins: '+gameInfo.winCount;
  } else if (x < y){
    gameInfo.lossCount++;
    gameInfo.losses.textContent = 'Losses: '+gameInfo.lossCount;
  } else if (x === y){
    gameInfo.tieCount++;
    gameInfo.ties.textContent = 'Ties: '+gameInfo.tieCount;
  }
  gameInfo.gameCount++;
  gameInfo.games.textContent = 'Games: '+gameInfo.gameCount;
}

// addEventListener to whoWon()
gameCtl.goDice.addEventListener('click', whoWon);

























//
