fs = require("fs");

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