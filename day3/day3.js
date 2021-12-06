fs = require("fs");

function invert(x) {
    let significant = 0;
    let test = x;

    while (test > 1) {
        test = test >> 1;
        significant = (significant << 1) | 1;
    }

    return (~x) & significant;
}

/*
 * PART 1
 */
fs.readFile("./testtxt", "utf8", function (err, data){
    let result = Array.from(data.split('\n'), x => Array.from(x, x => parseInt(x)));

    const rowLen = result[0].length;
    const colLength = result.length;

    let gammaRate = "";
    let epsilonRate = "";
    let mostCommonBits = [];

    // Getting gamma rate
    // PART 1
    for(let i = 0; i < rowLen; i++){
        let firstNum = 0;

        for(let j=0; j < colLength; j++){
            firstNum += result[j][i];
        }

        firstNum = Math.round(firstNum/colLength);
        mostCommonBits.push(firstNum);

        gammaRate += `${firstNum}`;
    }

    // PART 2
    let ratings = { "O2": [], "CO2": []};

    let O2 = result;
    let CO2 = result;

    for(let i = 0; i < rowLen; i++){
            const mostCommon = mostCommonBits[i];

            console.log({ "Iteration" : i, O2, CO2});

            O2 = O2.filter(x => x[i] === mostCommon);
            // CO2 = CO2.filter(x => x[i] !== mostCommon);
    }


    console.log({
                    rowLen,
                    colLength,
                    gammaRate: parseInt(gammaRate, 2),
                    epsilonRate: invert(parseInt(gammaRate, 2)),
                    answer: parseInt(gammaRate, 2) * invert(parseInt(gammaRate, 2)),
                    mostCommonBits,
                    O2,
                    CO2
    });
})

