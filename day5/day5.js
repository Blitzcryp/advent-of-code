fs = require("fs");

// Part 1
fs.readFile("./input.txt", "utf8", function (err, data){
    let result = Array.from(data.split('\n'));
    result = result.map( (coordinates) => {
        const newCoords =  coordinates.split("->");
        const [x1, y1] = newCoords[0].split(",");
        const [x2, y2] = newCoords[1].split(",");


        return {
            x1: parseInt(x1),
            y1: parseInt(y1),
            x2: parseInt(x2),
            y2: parseInt(y2)
        };
    });

    let collectionOfPoints = {};
    result.forEach( ({ x1, y1, x2, y2 }) => {
        if(x1 === x2){
            for(let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++){
                const point = i.toString() + '-' + x1.toString();
                collectionOfPoints[point] !== undefined ? collectionOfPoints[point] += 1 : collectionOfPoints[point] = 1;
            }
        }

        if(y1 === y2){
            for(let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++){
                const point = y1.toString() + '-' + i.toString();
                collectionOfPoints[point] !== undefined ? collectionOfPoints[point] += 1 : collectionOfPoints[point] = 1;
            }
        }
    });

    let sum = 0;
    for(const [key, value] of Object.entries(collectionOfPoints)){
        if(value >= 2){
            sum++;
        }
    }
});

// Part 2
fs.readFile("./input2.txt", "utf8", function (err, data){
    let result = Array.from(data.split('\n'));
    result = result.map( (coordinates) => {
        const newCoords =  coordinates.split("->");
        const [x1, y1] = newCoords[0].split(",");
        const [x2, y2] = newCoords[1].split(",");


        return {
            x1: parseInt(x1),
            y1: parseInt(y1),
            x2: parseInt(x2),
            y2: parseInt(y2)
        };
    });

    let collectionOfPoints = {};
    result.forEach( ({ x1, y1, x2, y2 }) => {
        if(x1 === x2){
            for(let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++){
                const point = i.toString() + '-' + x1.toString();
                collectionOfPoints[point] !== undefined ? collectionOfPoints[point] += 1 : collectionOfPoints[point] = 1;
            }
        }
        if(y1 === y2){
            for(let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++){
                const point = y1.toString() + '-' + i.toString();
                collectionOfPoints[point] !== undefined ? collectionOfPoints[point] += 1 : collectionOfPoints[point] = 1;
            }
        }
        if(x1 !== x2  && y1 !== y2) {
            console.log({x1, y1, x2, y2});
            while (x1 !== x2 && y1 !== y2){
                point = x1.toString() + '-' + y1.toString();

                console.log({point});
                collectionOfPoints[point] !== undefined ? collectionOfPoints[point] += 1 : collectionOfPoints[point] = 1;

                x1 < x2 ? x1++ : x1--;
                y1 < y2 ? y1++ : y1--;
            }
            console.log("---");
        }
    });

    let sum = 0;
    for(const [key, value] of Object.entries(collectionOfPoints)){
        if(value >= 2){
            sum++;
        }
    }

    console.log({sum});
});
