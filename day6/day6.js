fs = require("fs");
const { performance } = require('perf_hooks');
// Part 1


fs.readFile("./input.txt", "utf8", function (err, data){
    let fishes = getFishZeroState();
    Array.from(data.split(','), x => parseInt(x)).forEach( (fish) => {
        fishes[fish]["nb"] += 1;
        fishes[fish]["hatch"] = true;
    });

    const days = 256;

    for(let i = 1; i <= days; i++){
        let newFishes = getFishZeroState();
        for(const fish in fishes){
            if(fishes[fish]["hatch"]){
                if(fish == 0){
                    newFishes[8]["nb"] += fishes[fish]["nb"];
                    newFishes[8]["hatch"] = true;

                    newFishes[6]["nb"] += fishes[fish]["nb"];
                    newFishes[6]["hatch"] = true;
                }
                else {
                    newFishes[fish-1]["nb"] += fishes[fish]["nb"];
                    newFishes[fish-1]["hatch"] = true;
                }
            }
        }
        fishes = newFishes;
    }

    let sum = 0;
    for(let key in fishes){
        sum += fishes[key]["nb"];
    }

    console.log({sum})
});

function getFishZeroState() {
    return {
        "0" : {"nb": 0, "hatch": false},
        "1" : {"nb": 0, "hatch": false},
        "2" : {"nb": 0, "hatch": false},
        "3" : {"nb": 0, "hatch": false},
        "4" : {"nb": 0, "hatch": false},
        "5" : {"nb": 0, "hatch": false},
        "6" : {"nb": 0, "hatch": false},
        "7" : {"nb": 0, "hatch": false},
        "8" : {"nb": 0, "hatch": false},
    };
}