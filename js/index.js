// Iteration 1: Names and Input
let hacker1 = "Georgia"
console.log(hacker1)
let hacker2 = "Arslane"
console.log(hacker2)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
 else if (hacker1.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
 } else {
   console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
 };


// Iteration 3: Loops

let printDriverName = "" 

for (let i=0; i < hacker1.length; i++) {
    let letter = hacker1[i].toUpperCase() 
    printDriverName += letter + ' '
}

console.log(printDriverName); 


let reverseNavName = ""
 
for (let i=hacker2.length -1; i >= 0; i--) {
   let letter = hacker2[i]
   reverseNavName += letter
}
 console.log(reverseNavName);


for (let i = 0; i < hacker1.length; i++) {
    let hacker1Letter = hacker1[i];
    let hacker2Letter = hacker2[i]; 
   
    if (hacker1Letter < hacker2Letter) {
        console.log("The driver's name goes first")
        break;
    } 
    else if (hacker1Letter > hacker2Letter) {
        console.log("Yo, the navigator goes first definitely.")
        break;
    }
    else {
        console.log("What?! You both have the same name?")
    }
};

 