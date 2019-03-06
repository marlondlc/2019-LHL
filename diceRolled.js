var arg = process.argv[2];

function rollTheDice(input) {
  var diceResults = [];

  for (var i = 0; i < input; i++) {
    var randomNb = Math.ceil(Math.random() * 6);
    diceResults.push(randomNb);
  }
  var bob = diceResults.join(", ");

  return `Rolled: ${arg} Rolled Dice: ${bob}.`;
}

console.log(rollTheDice(arg));

// when the function has no return this will result in an undefined matter!
