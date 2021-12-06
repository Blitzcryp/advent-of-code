fs = require("fs");


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

    const allCoordinates = {};

    let pointsPassingThrough = result.map( ({ x1, y1, x2, y2 }) => {
        let generatedPoints = [];

        if(x1 === x2){
            for(let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++){
                generatedPoints.push([i, x1]);
            }
        }

        if(y1 === y2){
            for(let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++){
                generatedPoints.push([y1, i]);
            }
        }
        return generatedPoints;
    });


    let maxPoint = 0;
    pointsPassingThrough.forEach( ( element ) => {
        element.forEach( ([p1, p2]) => {
            p1 > maxPoint ? maxPoint = p1 : p2 > maxPoint ? maxPoint = p2 : maxPoint;
        })
    });
    console.log(maxPoint);


    let test = [];
    let chunkToPush = [];
    for(let i = 0; i <= maxPoint; i++){
        chunkToPush.push(".");
    }

    for(let i = 0; i < pointsPassingThrough.length; i++){
        test.push([...chunkToPush]);
    }

    console.log(test[57][500]);

    pointsPassingThrough.forEach( (pointsGroup) => {
        pointsGroup.forEach( ([x, y]) => {
            test[x][y] === "." ?
                test[x][y] = 1 :
                test[x][y] += 1;
        } )

    });


    let sum = 0;
    test.forEach((row) => {
        row.forEach( (element) => {
            if( element !== "." && element >= 2){
                sum += 1;
            }
        })
    });

    console.log({ sum });

    displayTest(test);
});

function displayTest(test){
    test.forEach( (line) => {
        console.log(...line);
    })
}