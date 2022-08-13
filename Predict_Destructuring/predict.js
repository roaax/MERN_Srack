
/* --------Predict the Output for Problem 1--------- */
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // log the first index[0] , Tesla
console.log(otherRandomCar)// log second index[1] , Mercedes 

/* --------Predict the Output for Problem 2--------- */
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // redirects the value of name to be held in otherName


//Predict the output
console.log(name); 
console.log(otherName);// log name = Elan 



/* --------Predict the Output for Problem 3--------- */
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //log const password that already defined out of obj person 
console.log(hashedPassword); //password is not defined into obj person! so it will be undefined




 /* --------Predict the Output for Problem 4--------- */
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;//skip first index and assign it a name (first)
const [,,,second] = numbers;//skip first three indexes and assign it a name (second)
const [,,,,,,,,third] = numbers; //skip tell th 9th index and assign it a name (third)
//Predict the output
console.log(first == second); // is the second index equal to fourth index? false -------- first-> index[2] = 2  , second-> index[4]= 5
console.log(first == third); // is the second index equal to 9th index? trude -------- first-> index[2] = 2 , third-> index[9] = 2




/* --------Predict the Output for Problem 5--------- */
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey; // skip the first index in array and 
//Predict the output
console.log(key); // log key value in lastTest obj
console.log(secondKey);//log secondKey value in obj ,which is an array
console.log(secondKey[0]);  // log first index[0] in secondKey array in lastTest obj
console.log(willThisWork); // log index[1] in secondKey array in lastTest obj

