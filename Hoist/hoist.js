
/* ---------1--------- */ 
console.log(hello); // logs undefined                            
var hello = 'world';                             
// var hello;
// console.log(hello); // logs undefined
// hello = "world";






/* ---------2--------- */
var needle = 'haystack';
test(); // test(); is called, the first console.log runs
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle ;
//needle = 'haystack;
// test(); // test(); is called, the first console.log runs
// needle = 'magnet';
// console.log(needle); // logs magnet | output:magnet




/* ---------3--------- */
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);  //  we log the global brendan
// var brendan;
// brendan= 'super cool';
// console.log(brendan);  //  we log the global brendan | output:super cool





/* ---------4--------- */
var food = 'chicken';
console.log(food); //  we log the global food
eat();  // eat(); is called, the first console.log runs
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
} 
// var food;
//food = 'chicken';
//console.log(food); //  we log the global food | output:chicken
//eat();  // eat(); is called, the first console.log runs
//food = 'half-chicken';
//console.log(food); | output: half-chicken






/* ---------5--------- */
 mean();  // we tried to invoke it before we assigned the function to it.
console.log(food); //  we log food ! but food does't declared and defined yet!
var mean = function() { 
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
} 
 console.log(food); //  we log food ! but food only declaed inside the local funtion 

//mean(); mean is not a function!





/* ---------6--------- */
 console.log(genre); //undefined
var genre = "disco";
rewind();  // call funtion 
function rewind() {
    genre = "rock"; //we assign a value to our function scoped 'genre'
    console.log(genre);
    var genre = "r&b"; //new var declared
    console.log(genre);
}
console.log(genre); //  we log the global genre
// var genre;
// console.log(genre);  | output:undefined
//genre = "disco";
//genre = "rock";
//console.log(genre); | output:rock
//genre = "r&b";
//console.log(genre);| output:r&b
//console.log(genre); | output:disco




 /* ---------7--------- */
 dojo = "san jose";
 console.log(dojo); //we log global dojo
 learn(); //calling learn(); funtion
 function learn() {
     dojo = "seattle";
     console.log(dojo); // log dojo that declared inside function
     var dojo = "burbank";
     console.log(dojo); // log new var 
 }
 console.log(dojo); //again log the global dojo
 
// dojo = "san jose";
//console.log(dojo); | output:san jose
//learn(); 
//dojo = "seattle";
// console.log(dojo); | output:seattle
//dojo = "burbank";
//console.log(dojo);| output:burbank
// console.log(dojo); | output:san jose





 /* ---------8--------- */
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){ //declare a function with two argument
    const dojo = {}; // defined constant 
    dojo.name = name; //assign name to dojo
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //ovrride dojo! we tried to assign string to const  , we have to write dojo.name
    }
    return dojo;
}
