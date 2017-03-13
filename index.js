var readline = require('readline');
//create a board
var board = {
  'X': ['0', ' ', '2', ' ', '4'],
	'a': [' ', '|', ' ', '|', ' '],
	'-': ['-', '-', '-', '-', '-'],
	'b': [' ', '|', ' ', '|', ' '],
	'+': ['-', '-', '-', '-', '-'],
	'c': [' ', '|', ' ', '|', ' ']
};
//use readline to create an inut for users
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//create a variable to show whose turn it is. value will equal x or o
var player = 'x';
//display list of instructions for game
rl.write("Type 'help' for commands\n");
//display board
console.log(board);
//create a function that will take in input from user
var getUserInput = function() {
  rl.write('Player ' + player + ' turn\n');
  rl.question('Where would you like to place your piece ', function(answer) {
    answer.split('');
    if(answer[0] > 'c' || answer[1] > 4) {
      rl.write('Not a valid entry\n')
      //ask the user to input a valid entry
      getUserInput()
    }
    //the input will be coordinates for the board
    board[answer[0]][answer[1]] = player
    //display updated board to user
    console.log(board);
    //check to see if user has won
    if(checkBoard() === true) {
      rl.write('Player ' + player + ' wins');
      process.exit();
    } else {
        //switch to second users turn
        if(player === 'x') {
          player = 'o';
        } else {
          player = 'x';
    }
      getUserInput();
    }
  })
}
getUserInput();
//create a function that will check to see if game has been won
function checkBoard() {
    //check to see if across has won on all rows
    if(board['a'][0] === 'x' && board['b'][0] === 'x' && board['c'][0] === 'x') {
      //if true, return this user wins
      return true
    }
    if(board['b'][0] === 'x' && board['b'][2] === 'x' && board['b'][4] === 'x') {
      //if true, return this user wins
      return true
    }
    if(board['c'][0] === 'x' && board['c'][2] === 'x' && board['c'][4] === 'x') {
      //if true, return this user wins
      return true
    }
    if(board['a'][0] === 'o' && board['b'][0] === 'o' && board['c'][0] === 'o') {
      //if true, return this user wins
      return true
    }
    if(board['b'][0] === 'o' && board['b'][2] === 'o' && board['b'][4] === 'o') {
      //if true, return this user wins
      return true
    }
    if(board['c'][0] === 'o' && board['c'][2] === 'o' && board['c'][4] === 'o') {
      //if true, return this user wins
      return true
    }

    //check to see if down has won on all columns
    if(board['a'][0] === 'x' && board['b'][0] === 'x' && board['c'] === 'x') {
      //if true, return this user wins
      return true
    }
    if(board['a'][2] === 'x' && board['b'][2] === 'x' && board['c'][2] === 'x') {
      //if true, return this user wins
      return true
    }
    if(board['a'][4] === 'x' && board['b'][4] === 'x' && board['c'][4] === 'x') {
      //if true, return this user wins
      return true
    }
    if(board['a'][0] === 'o' && board['b'][0] === 'o' && board['c'] === 'o') {
      //if true, return this user wins
      return true
    }
    if(board['a'][2] === 'o' && board['b'][2] === 'o' && board['c'][2] === 'o') {
      //if true, return this user wins
      return true
    }
    if(board['a'][4] === 'o' && board['b'][4] === 'o' && board['c'][4] === 'o') {
      //if true, return this user wins
      return true
    }

    //check to see if diagonals are true
    if(board['a'][0] === 'x' && board['b'][2] === 'x' && board['c'][4] === 'x') {
      //if true, return this user wins
      return true
    }
    if(board['a'][4] === 'x' && board['b'][2] === 'x' && board['c'][0] === 'x') {
      //if true, return this user wins
      return true
    }
    if(board['a'][0] === 'o' && board['b'][2] === 'o' && board['c'][4] === 'o') {
      //if true, return this user wins
      return true
    }
    if(board['a'][4] === 'o' && board['b'][2] === 'o' && board['c'][0] === 'o') {
      //if true, return this user wins
      return true
    }
}