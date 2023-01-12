// Iteration 1: Names and Input
const hacker1 = 'Abiel';
console.log (`The driver's name is ${hacker1}.`);

const hacker2 = 'Charlie';
console.log (`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
    }
else if (hacker2.length > hacker1.length) {
  console.log (`The navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log (`Wow, you both have equally long names, ${hacker1.length}.`)
}

// Iteration 3: Loops
//3.1 - print driver's name, sep by space, capital letters

let printDriver = ``;

for (let i = 0; i < hacker1.length; i++) {
  printDriver += `${hacker1[i]} `;
}

console.log (printDriver.toUpperCase());

//3.2 - print navigator's name, in reverse order
let printNav = ``;

for (let j = hacker2.length - 1; j >= 0; j--) {
  printNav += `${hacker2[j]}`;
}

console.log (printNav.toLowerCase());

//3.3 lexigographic order of strings - I did a loop to verify the letters of their names one by one to decide who goes first

let lettersNo; // maximum for the loop

if (hacker1.length <= hacker2.length) {
  lettersNo = hacker1.length;
}
else {
  lettersNo = hacker2.length;
}
  
let i = 1;

while (i <= lettersNo) { 
  
  if (hacker1[i] < hacker2[i]) {
   console.log (`The driver goes first.`);
    break;
  }

  else if (hacker1[i] > hacker2[i]) {
    console.log (`Yo, the navigator goes first definately.`);
    break;
  }

  else if (hacker1 === hacker2) {
    console.log (`What?! You both have the same name?`);
    break;
  }

  i++;
}

//bonus1 - lorem ipsum 3 paragraphs - can also do with .include("et")
const gen3paragr = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pulvinar tellus. Aenean convallis mattis lacus vel iaculis. Proin posuere mauris purus, nec laoreet purus fringilla at. Integer rutrum augue augue, in lobortis quam rhoncus et. Praesent facilisis turpis id enim blandit, sit amet elementum lacus luctus. Donec gravida massa sed velit imperdiet interdum. Sed quis quam urna. Nunc vestibulum, urna non tincidunt pharetra, arcu purus aliquet sem, quis volutpat neque dui a ligula.

Suspendisse in semper urna. Proin est magna, condimentum eget nunc malesuada, hendrerit sagittis dui. Donec ut nibh arcu. Sed sit amet maximus ex. Phasellus bibendum turpis eget neque condimentum auctor. Sed vestibulum congue velit nec ultricies. Phasellus posuere eros sed felis imperdiet, nec cursus purus malesuada. Integer sit amet nulla et lacus condimentum posuere et quis eros. Curabitur ipsum nisl, varius nec sem nec, volutpat facilisis neque. Nulla sed turpis ac est elementum bibendum.

Nullam eu commodo augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus tincidunt odio quis urna laoreet, quis fermentum sapien viverra. Phasellus neque dolor, feugiat nec interdum in, blandit sit amet elit. Praesent vestibulum lorem et libero auctor pharetra. Nam scelerisque libero magna. Morbi pharetra gravida urna vel tincidunt. Pellentesque metus augue, egestas ut aliquet ac, tincidunt porttitor mi. Integer faucibus pellentesque congue. Nulla facilisi. Aliquam tristique ante a nibh tristique maximus. Pellentesque consectetur tempus malesuada. Nunc molestie risus in odio tincidunt, eu vulputate nulla mattis. Integer varius est sed lectus elementum, nec cursus mauris rutrum.`

let count_words = 2; // variable to count words - i initiliased with 2 because it will not count the first and the last word
  
for (let i = 0; i < gen3paragr.length; i++) {
  if (gen3paragr[i] === ` `) {
    count_words ++;
  }
}

console.log (count_words); // count no of words

countLatinWord = 0; 

for (let i = 0; i < gen3paragr.length; i++) {
  let twoChar = `${gen3paragr[i]}` + `${gen3paragr[i+1]}`;
  if (twoChar === `et`) {
    countLatinWord ++;
  }
}

console.log (countLatinWord); // print no of times the latin word 'et' appears;

//bonus2:

const phraseToCheck = `No 'x' in Nixon`; //the string to check if palindrome


//----BELOW: change the phrase to remain only with the letters
let newPhraseToCheck = ``; //variable that stores the phrase with just the letters from it

for (let j = 0; j < phraseToCheck.length; j++) {
  if ( (phraseToCheck[j].toLowerCase()) != (phraseToCheck[j].toUpperCase() ) ) {
    newPhraseToCheck += `${phraseToCheck[j].toLowerCase()}`;
  }
}

console.log (newPhraseToCheck); // print to verify the variable we'll check below - just the letters


//----BELOW: check if palindrom

let valuePal = true;

for (let i = 0; i < newPhraseToCheck.length/2; i++) {
  if ( newPhraseToCheck[i] != newPhraseToCheck[newPhraseToCheck.length - i - 1] ) {
    valuePal = false;
    console.log ("It is not a palindrom")
    break;
  }
}

if (valuePal == true) {
  console.log("It is a palindrom");
}
