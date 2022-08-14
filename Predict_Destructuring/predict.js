
/* --------Predict the Output for Problem 1--------- */
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // log the first index[0] | output: Tesla
console.log(otherRandomCar)// log second index[1] | output: Mercedes 

/* --------Predict the Output for Problem 2--------- */
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // redirects the value of name to be held in otherName


//Predict the output
console.log(name);  //Error , name is deprecated , it will be as not defined. we redirects the value of name to be held in otherName
console.log(otherName);// log name = Elon  || output:Elon 



/* --------Predict the Output for Problem 3--------- */
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    
}
const password = '12345';
const { password: hashedPassword } = person; //we tried to redirects the value of password to be held in hashedPassword from person obj , but we didn't have a variable called password in person!



//Predict the output
console.log(password); //log const password that already defined out of obj person | output: 12345 
console.log(hashedPassword); //password is not defined into obj person! so it will be undefined | undefined




 /* --------Predict the Output for Problem 4--------- */
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;//skip first index and assign it a name (first)
const [,,,second] = numbers;//skip first three indexes and assign it a name (second)
const [,,,,,,,,third] = numbers; //skip tell th 9th index and assign it a name (third)
//Predict the output
console.log(first == second); // is the second index equal to fourth index? false -------- first-> index[2] = 2  , second-> index[4]= 5 | output:false
console.log(first == third); // is the second index equal to 9th index? true -------- first-> index[2] = 2 , third-> index[9] = 2 | output:true




/* --------Predict the Output for Problem 5--------- */
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey; //from secondKey that we already declared , skip the first index[0] in array and assign variable willThisWork to index[1]
//Predict the output
console.log(key); // log key value in lastTest obj | output: value
console.log(secondKey);//log secondKey value in obj ,which is an array | output: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);  // log first index[0] in secondKey array in lastTest obj | output: 1
console.log(willThisWork); // log index[1] in secondKey array in lastTest obj | output: 5

