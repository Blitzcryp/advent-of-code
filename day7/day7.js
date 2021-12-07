fs = require("fs");

// Part 1
fs.readFile("./input.txt", "utf8", function (err, data){
    console.time();
    let max = -1;

    const crabs = Array.from(data.split(','), x => parseInt(x)).map( (crab) => {
        crab = parseInt(crab);
        if( max < crab){
            max = crab;
        }

        return crab;
    });


    let fuelCosts = [];
    for(let i = 0; i <= max; i++){
        let sum = crabs.map( (crab) => {
            return Math.abs(crab-i);
        })

        sum = sum.reduce(add, 0);
        fuelCosts.push(sum);
    }


    console.timeEnd();
    let minFuel = 999999;
    fuelCosts.forEach( (fuelCost) => {
        if(minFuel > fuelCost){
            minFuel = fuelCost;
        }
    })

    // console.log({crabs, fuelCosts, minFuel, max});
});

// Part 2

fs.readFile("./input.txt", "utf8", function (err, data){
    console.time();
    let max = -1;

    const crabs = Array.from(data.split(','), x => parseInt(x)).map( (crab) => {
        crab = parseInt(crab);
        if( max < crab){
            max = crab;
        }

        return crab;
    });


    let fuelCosts = [];
    for(let i = 0; i <= max; i++){
        let sum = crabs.map( (crab) => {
            let total = Math.abs(crab-i);

            return total * (total+1) / 2;
        })

        sum = sum.reduce(add, 0);
        fuelCosts.push(sum);
    }


    console.timeEnd();
    let minFuel = 9999999999;
    fuelCosts.forEach( (fuelCost) => {
        if(minFuel > fuelCost){
            minFuel = fuelCost;
        }
    })

    console.log({crabs, fuelCosts, minFuel, max});
});

function add(accumulator, a) {
    return accumulator + a;
}