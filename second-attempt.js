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
  undo: document.querySelector('.undo-5'),
  lockBet: document.querySelector('.lock-bet'),
  goDice: document.querySelector('.roll-the-dice'),
};

// Disable the goDice and lockBet buttons. lockBet will be enabled by clicking one of the 'bet' buttons and goDice will be enabled by clicking lockBet.  The actual code will run inside the makeBet() function
gameCtl.goDice.disabled = true;
gameCtl.lockBet.disabled = true;


// store references to the game information displays inside an object literal
var gameInfo = {
  yourBet: document.querySelector('.h-bet'),
  yourBetCount: 0,
  cpuBet: document.querySelector('.cpu-bet'),
  cpuBetCount: 0,
  wins: document.querySelector('.wins'),
  winCount: 0,
  losses: document.querySelector('.losses'),
  lossCount: 0,
  ties: document.querySelector('.ties'),
  tieCount: 0,
  games: document.querySelector('.games'),
  gameCount: 0
};


// This is the Player constructor.  What is passed in as arguments for its 3 parameters will define Player object instances' properties as follows:
//  - coinCount: how many coins each player has available
//  - diceArray: this is an empty that will hold a history of the
//    player's dice values.
//  - diceValue: this is also an empty array but it will be used in
//    rollDice() to only store the value of the current roll.
//      These values will be compared to the computer's dice values
//      to determine the winner of a round in whoWon()
function Player(coinCount, diceArray, diceValue){
  this.coinCount = coinCount;
  this.diceArray = diceArray;
  this.diceValue = diceValue;
}

// The createDice() method is defined on the Player object's prototype and will be available to instances of Player objects.
// createDice() has 3 parameters:
//  - for the 1st, pass which players' diceArray property you
//    want the dice created by this function to be stored in.
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
Player.prototype.generateCoins = function (appendWhere, howMany) {
  for (var i = 0; i < howMany; i++) {
    var coinImg = document.createElement('img');
    coinImg.setAttribute('src', 'images/coin.png');
    coinImg.setAttribute('class', 'coin');
    document.querySelector(appendWhere).appendChild(coinImg);
  }
};


// Create two Player object instances:
//  - for each instance, call the createDice() method to create divs
//    that will be used to visually represent dice
//  - for each instance, call the generateCoins() method to generate
//    a specified number of coinImg's in a specified place
var human = new Player(20, [], []);
human.createDice(human.diceArray, '.h-dice', 2);
human.generateCoins('.your-coins', human.coinCount);

var cpu = new Player(20, [], []);
cpu.createDice(cpu.diceArray, '.c-dice', 2);
cpu.generateCoins('.cpu-coins', cpu.coinCount);



// The makeBets() function adds event handlers to the bet1, bet5,
// bet10, undo, and lockBet buttons
function makeBets(){
  // WHEN .bet1 is clicked...
  gameCtl.bet1.onclick = function(){
    // add 1 to yourBetCount
    gameInfo.yourBetCount += 1;
    // if yourBetCount exceeds the number of coins you have, yourBetCount will be set equal to the number of coins you have
    if(gameInfo.yourBetCount > human.coinCount){
      gameInfo.yourBetCount = human.coinCount;
    }
    // make yourBet display how much you are betting, or, yourBetCount
    gameInfo.yourBet.textContent = 'your bet: '+gameInfo.yourBetCount;
    // Now that you've made a bet enable the lockBet button so that you can lock in your bet if you don't want to bet any more
    gameCtl.lockBet.disabled = false;
  };
  // WHEN .bet5 is clcked...same steps as bet1.onlclick
  gameCtl.bet5.onclick = function(){
    gameInfo.yourBetCount += 5;
    if(gameInfo.yourBetCount > human.coinCount){
      gameInfo.yourBetCount = human.coinCount;
    }
    gameInfo.yourBet.textContent = 'your bet: '+gameInfo.yourBetCount;
    gameCtl.lockBet.disabled = false;
  };
  // WHEN .bet10 is clcked...same steps as bet1.onlclick
  gameCtl.bet10.onclick = function(){
    gameInfo.yourBetCount += 10;
    if(gameInfo.yourBetCount > human.coinCount){
      gameInfo.yourBetCount = human.coinCount;
    }
    gameInfo.yourBet.textContent = 'your bet: '+gameInfo.yourBetCount;
    gameCtl.lockBet.disabled = false;
  };
  // WHEN .undo is clicked...
  gameCtl.undo.onclick = function(){
    // subtract 5 from yourBetCount
    gameInfo.yourBetCount -= 5;
    // if yourBetCount is less than or equal to 4 when you click .undo, yourBetCount will be set equal to 0.  Otherwise, 5 would be subtracted and it would be set to a negative number which is not how this game works.
    if(gameInfo.yourBetCount <= 4){
      gameInfo.yourBetCount = 0;
    }
    // make yourBet display yourBetCount
    gameInfo.yourBet.textContent = 'your bet: '+gameInfo.yourBetCount;
  };
  // WHEN .lockBet is clicked...
  gameCtl.lockBet.onclick = function(){
    // all of the buttons that add or subtract to yourBetCount become disabled
    gameCtl.bet1.disabled = true;
    gameCtl.bet5.disabled = true;
    gameCtl.bet10.disabled = true;
    gameCtl.undo.disabled = true;
    // the goDice button becomes enabled.  When clicked, it will run whoWon() to check who had the higher roll and alocate the coins that had been bet accordingly
    gameCtl.goDice.disabled = false;
    // !!!!!!!!CPU MAKES ITS BET!!!!!!!!!!!!!!
    // the function cpuBet() will be invoked
    cpuBet();
  };
}

makeBets();



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
  human.rollDice(human);
  var x = human.diceValue.reduce(function(a,b){
    return a + b;
  });

  cpu.rollDice(cpu);
  var y = cpu.diceValue.reduce(function(a,b){
    return a + b;
  });

  // STORE the value of yourBetCount + the returned value of cpuBet() in the betPool variable.  This value will every turn that the human or cpu bet amounts change.
  var betPool = gameInfo.yourBetCount + cpuBet();

  // if human wins
  if(x > y){
    // add 1 to 'winCount'
    gameInfo.winCount++;
    // make 'wins' display how many wins you've had
    gameInfo.wins.textContent = 'Wins: '+gameInfo.winCount;
    // add the number value of betPool to human.coinCount
    human.coinCount += betPool;
    // use Player.generateCoins() to append a number of coins equal to the value of betPool for this turn, to .your-coins div
    human.generateCoins('.your-coins', betPool);
    // make cpu.coinCount equal to itself minus gameInfo.yourBetCount
    cpu.coinCount -= betPool;
    // run a for loop a number of times equal to yourBetCount to remove a .coin img child that had previously been appended to the .cpu-coins div
    //  - because of some freaky DOM stuff, you need to specify that the child to be removed has the class .cpu-coins and .coins
    for(i = 0; i < betPool; i++){
      document.querySelector('.cpu-coins').removeChild(document.querySelector('.cpu-coins .coin'));
    }

  // else if cpu wins
  // do moreorless the inverse.
  } else if (x < y){
    gameInfo.lossCount++;
    gameInfo.losses.textContent = 'Losses: '+gameInfo.lossCount;
    human.coinCount -= gameInfo.yourBetCount;
    for(i = 0; i < gameInfo.yourBetCount; i++){
      document.querySelector('.your-coins').removeChild(document.querySelector('.coin'));
    }
    cpu.generateCoins('.cpu-coins', gameInfo.yourBetCount);
    cpu.coinCount += gameInfo.yourBetCount;

  } else if (x === y){
    gameInfo.tieCount++;
    gameInfo.ties.textContent = 'Ties: '+gameInfo.tieCount;
  }
  gameInfo.gameCount++;
  gameInfo.games.textContent = 'Games: '+gameInfo.gameCount;
  gameInfo.yourBet.textContent = 'your bet: ';
  gameInfo.yourBetCount = 0;

  // disble all the bet buttons and enable the goDice button
  gameCtl.bet1.disabled = false;
  gameCtl.bet5.disabled = false;
  gameCtl.bet10.disabled = false;
  gameCtl.undo.disabled = false;
  gameCtl.goDice.disabled = true;
  gameCtl.lockBet.disabled = true;
}




// addEventListener to whoWon()
// When the button .goDice is clicked, whoWon() will run
gameCtl.goDice.addEventListener('click', whoWon);





// write the code for the cpuBet() here
function cpuBet(){
  var bet60prc = gameInfo.cpuBetCount = Math.round(cpu.coinCount * 0.69);
  var her = gameInfo.cpuBet.textContent = 'Cpu bet: ' + bet60prc;
  return bet60prc;
}













//
