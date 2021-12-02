fs = require("fs");

/*
 * PART 1
 */
let count = 0;
const reducer = (previousValue, currentValue) => {
    previousValue < currentValue ? count++ : 0;

    return currentValue;
}

fs.readFile("./input.txt", "utf8", function (err, data){
    const splitCoordinates = Array.from(data.split('\n'), x => parseInt(x));

    splitCoordinates.reduce(reducer);

    console.log(count);
})

/*
 * PART 2
 */
fs.readFile("./input2.txt", "utf8", function (err, data){
    let localCount = 0;
    const splitCoordinates = Array.from(data.split('\n'), x => parseInt(x));

    for(let i = 3; i < splitCoordinates.length; i++){
        const firstSum = splitCoordinates[i-3] + splitCoordinates[i-2] + splitCoordinates[i-1];
        const secondSum = splitCoordinates[i-2] + splitCoordinates[i-1] + splitCoordinates[i];

        if(firstSum < secondSum) localCount++;
    }

    console.log(localCount);
})