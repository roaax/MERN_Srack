class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
        
    }
}


class Unit extends Card{
    constructor( name , cost , power , res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack( target ){
         //reduse target res by power
        target.res -= this.power;
    }
}


class Effect extends Card{
    constructor( name , cost , text , stat , magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ){
            if(this.stat == "resilience"){
                target.res += this.magnitude;
            }else {
                target.power += this.magnitude;
            }
        }
        
    }

//instance of Unit:
var red = new Unit("Red Belt Ninja",3,3,4)
var black = new Unit("Black Belt Ninja",4,5,4)


//instance of Effect:
var hard = new Effect("Hard Algorithm",2,"increase target's resilience by 3 ","resilience",+3)
var Unhandled = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience", -2)
var pair = new Effect("Pair Programming",3,"increase target's power by 2","power", +2)


//Lets Play
hard.play(red);
console.log(red);

Unhandled.play(red);
console.log(red);

pair.play(red);
console.log(red);

red.attack(black);
console.log(black);

console.log(red);
console.log(black);

