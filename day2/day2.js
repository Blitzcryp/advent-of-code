fs = require("fs");


/*
 * PART 1
 */
fs.readFile("./input.txt", "utf8", function (err, data){
    let hpos = 0;
    let depth = 0;

    Array.from(data.split('\n'), x => {
        let [command, units] = x.split(" ");
        units =  parseInt(units);

        if(command === "forward"){
            hpos += units;
        }

        if(command === "down"){
            depth += units;
        }

        if(command === "up"){
            depth -= units;
        }
    });

    console.log("PART1 -- ", {
                    hpos,
                    depth
                })
    console.log("PART1 -- ", hpos * depth);
})


/*
 * PART 2
 */
fs.readFile("./input2.txt", "utf8", function (err, data){
    let hpos = 0;
    let depth = 0;
    let aim = 0;

    Array.from(data.split('\n'), x => {
        let [command, units] = x.split(" ");
        units =  parseInt(units);

        if(command === "forward"){
            hpos += units;
            depth += aim * units;
        }

        if(command === "down"){
            aim += units;
        }

        if(command === "up"){
            aim -= units;
        }
    });

    console.log("PART2 -- ",{
                    hpos,
                    depth
                })
    console.log("PART2 -- ",hpos * depth);
})