const { data, matrix } = require("./utils.js");
const fs = require("fs");

let kästchenXY = 12;

function commitData(user) {
    if (!user) return console.error("no user found");

    fs.readFile("./data.json", "utf8", function (err, d) {
        if (err) {
            return console.error(err);
        }

        let current;
        try {
            current = JSON.parse(d);
        } catch (err) {
            return console.error(err);
        }

        current[user] = data;

        // console.log(current);

        fs.writeFile("./data.json", JSON.stringify(current), function (err) {
            if (err) {
                return console.error(err);
            }
            // console.log("Data saved!");
        });
    });
}

function countLivings() {
    let aktivesArray = matrix;
    let gras = 0,
        rasen_fresser = 0;
    for (let zeile = 0; zeile < kästchenXY; zeile++) {
        for (let spalte = 0; spalte < kästchenXY; spalte++) {
            element = aktivesArray[zeile][spalte];
            if (element === 5) {
                gras++;
                // data.gras.living++;
            } else if (element === 3) {
                rasen_fresser++;
                // data.rasen_fresser.living++;
            }
        }
    }
    data.gras.living = gras;
    data.rasen_fresser.living = rasen_fresser;
}

module.exports = { commitData, countLivings };