// // Task 1 - How many rounds the game will have?
// // Task 2 - How many players will have?
// // Task 3 - Create an object that contains player number and dice result.
// // Task 4 - Store all the objects into an array.
// // Task 5 - Sort this objects according to dice result, the winner is the one with the bigger result.
// // Task 6 - Display wich player won more rounds and is the biggest winner

const prompt = require('prompt-sync')();

console.log('================================================================');
console.log('Seja bem-vinde ao nosso jogo de dados! =D');
console.log('Pediremos antes a você as seguintes informações: ');
console.log();

let playersNum = prompt('1. Quantas pessoas irão jogar? ');
    while (!/^[0-9]+$/.test(playersNum)) {
        console.log("O que você digitou não é um número!");
        console.log();
        playersNum = prompt('1. Quantas pessoas irão jogar? ');
    }
console.log();

let rounds = prompt('2. Quantas rodadas vocês querem fazer? ');
    while (!/^[0-9]+$/.test(rounds)){
        console.log('O que você digitou não é um número!');
        console.log();
        rounds = prompt('2. Quantas rodadas vocês querem fazer?');
    }
console.log();

console.log('Obrigada pelas informações! Agora, vamos iniciar nosso jogo.');
console.log('================================================================');

var game = [];
var rollDice = 0;

// // Function to insert all the objects into playersName array

function player(round, player, name, dice){
    let newP = {
        round: round,
        player: player,
        name: name,
        diceNum: dice,
        output: function(){
            return `No round ${this.round} a pessoa ${this.name} fez ${this.diceNum} pontos nos dados.`
        }
    }
    game.push(newP);
}

// // Function to create the objects from user's input

function addPlayer() {
    for (let x = 1; x <= rounds; x++){
        console.log(`Esta é a partida nº${x}`);
        console.log();
            for (let i = 1; i <= playersNum; i++){
                let nome = prompt(`Você é o jogador nº${i}, qual o seu nome? `);
                console.log();
                console.log(`Ok ${nome}, vamos jogar seus dados..... `);
                console.log();
                rollDice = Math.floor((Math.random() * 7) + 1);
                player(x, i, nome, rollDice);
            }
    }
}

if (rounds > 0){
    addPlayer();
    rounds--
}

// // Arranging players by round and showing scores in descending order

console.log(`=============================================================`);
console.log(`         ''  NOSSO RANKING PARCIAL FICOU ASSIM  ''           `);
console.log(`=============================================================`);
console.log();

game = game.sort(
	(a, b) => a.round === b.round && b.diceNum - a.diceNum,
    
); for (let i of game){
    console.log(i.output());
};

// // Finally showing the winner

console.log();
console.log(`=============================================================`);
console.log(`         ''   NOSSO RANKING FINAL FICOU ASSIM   ''           `);
console.log(`=============================================================`);
console.log();

var prepWinner = {};

game.forEach(function(x) {
	if (prepWinner.hasOwnProperty(x.name)) {
		prepWinner[x.name] = prepWinner[x.name] + x.diceNum;
} else {
	prepWinner[x.name] = x.diceNum
}
});

let winner = [];

for (let prop in prepWinner){
	winner.push({name: prop, diceNum: prepWinner[prop]})
}

console.log(`A pessoa vencedora do jogo é ${winner[0].name} com ${winner[0].diceNum} pontos`);
console.log();