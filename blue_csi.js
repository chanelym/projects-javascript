console.log('========================== CSI - BLUEEDTECH ========================== \n');
console.log('Seja bem-vinde! Vamos dar início à nossa investigação? \n')
console.log('Por gentileza responda as questões abaixo com S para sim e N para não. \n');
console.log('====================================================================== \n');

let count = 0;

// Beginning investigation

let ans1 = prompt('1. Telefonou para a vítima?');

if ( ans1 === 'S' ) { 
 count++;
} 

// Validating user input and counter sum
// console.log(ans1);
// console.log(count);

let ans2 = prompt('2. Esteve no local do crime?');

if ( ans2 === 'S' ) { 
  count++;
} 

// Validating user input and counter sum
// console.log(ans1);
// console.log(count);

let ans3 = prompt('3. Mora perto da vítima?');

if ( ans3 === 'S' ) { 
 count++;
} 

// Validating user input and counter sum
// console.log(ans1);
// console.log(count);

let ans4 = prompt('4. Devia para a vítima?');

if ( ans4 === 'S' ) { 
 count++;
} 

// Validating user input and counter sum
// console.log(ans1);
// console.log(count);

let ans5 = prompt('5. Já trabalhou com a vítima?');

if ( ans5 === 'S' ) { 
  count++;
} 

// Validating user input and counter sum
// console.log(ans1);
// console.log(count);

// Parsing results and giving feedback

if ( count === 0 ) {
  console.log('\n A pessoa investigada é INOCENTE!');
} else if ( count >= 1 && count <= 2 ) {
  console.log('\n A pessoa investigada é SUSPEITA no crime!');
} else if ( count >= 3 && count <= 4 ) {
  console.log('\n A pessoa investigada é CÚMPLICE no crime!');
} else if ( count >= 5 ) {
  console.log('\n A pessoa investigada é CULPADA de crime!');
} 

// The End \o/

console.log('\n Até a volta =)');
