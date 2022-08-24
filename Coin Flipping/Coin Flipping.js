function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails"
}

function fiveHeads() {
    return new Promise( (resolve, reject) =>{
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            result == "heads" ? headsCount++ : headsCount = 0;
            if(result == 100) {
                reject("coin has been flipped more than 100 times")
            }
        }
        resolve (`It took ${attempts} tries to flip five`);
    });
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
