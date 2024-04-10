/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/

const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

let tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
console.log(`Tragualenguas: ${tongueTwister}`);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
function changeLastLetter(palabra, indice){
    let lastLetter = palabra.substring(indice);
    let bigLetter = lastLetter.toUpperCase();
    let wordChanged = palabra.slice(0, indice) + bigLetter;
    return wordChanged;
}
let javaWordChanged = changeLastLetter(part1, 3);
let scriptWordChanged = changeLastLetter(part2, 5);
let partsDone = javaWordChanged + scriptWordChanged;
console.log(`Palabra completa y cambiada: ${partsDone}`);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;



function calculateTip(bill){
    let result = bill - 0.15;
    return result;
}
let result = calculateTip(billTotal);
console.log(`El porciento del bill total es: ${result}`);




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function generateNumber(){
    let numberRandom = Math.random(0, 1) * 10 + 1;
    let numberRounded = Math.trunc(numberRandom);
    return numberRounded;
}
let numRandom = generateNumber();
console.log(`Número random es: ${numRandom}`);




/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;    // true

const expression2 = a || b;    // true

const expression3 = !a && b;   // false

const expression4 = !(a && b); // false

const expression5 = !a || !b;  // true

const expression6 = !(a || b); // false

const expression7 = a && a;    // true