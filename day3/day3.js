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
fs.readFile("./input.txt", "utf8", function (err, data){
    let result = Array.from(data.split('\n'), x => Array.from(x, x => parseInt(x)));

    const rowLen = result[0].length;
    const colLength = result.length;

    let gammaRate = "";
    let epsilonRate = "";

    // Getting gamma rate
    for(let i = 0; i < rowLen; i++){
        let firstNum = 0;

        for(let j=0; j < colLength; j++){
            firstNum += result[j][i];
        }

        firstNum = Math.round(firstNum/colLength);

        gammaRate += `${firstNum}`;
    }

    console.log({
                    // result,
                    rowLen,
                    colLength,
                    gammaRate: parseInt(gammaRate, 2),
                    epsilonRate: invert(parseInt(gammaRate, 2)),
                    answer: parseInt(gammaRate, 2) * invert(parseInt(gammaRate, 2))
    });
})

