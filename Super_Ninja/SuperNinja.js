

//Parent
class Ninja {
    constructor(name) {
    this.name = name;
    this.health =0;
    this.speed =3;
    this.strength = 3;

    }
    sayName(){
        console.log(`Ninja's Name : ${this.name}`);

    }

    showStats(){
        console.log(`Ninja's Name : ${this.name} |  Strength: ${this.strength}  |  Speed: ${this.speed}  |  Health: ${this.health} `);
    }

    drinkSake(){
        this.health +=10;
        console.log(`Ninja's health after drink shake : ${this.health} `);
    }
}



//Inheritance
//Child
class Sensei extends Ninja{
        constructor(name){
            super(name);
            this.health = 200;
            this.speed = 10;
            this.strength = 10;
            this.wisdom=10;
        }
        //method
        speakWisdom(){
            console.log(`Health before: : ${this.health}`);
            console.log(`Wisdom : ${this.wisdom}`);
            const n= super.drinkSake();
            console.log("What one programmer can do in one month, two programmers can do in two months.");
            
        }
}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
