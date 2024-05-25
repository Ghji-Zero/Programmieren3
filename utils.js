let matrix = [];
let seite = 100;


function delette(zeile, spalte) {
    let index = ObjectAray.findIndex(function (grassObjekt) {
        if (grassObjekt.zeile === zeile && grassObjekt.spalte === spalte) {
            return true;
        } else return false;
    });
    ObjectAray.splice(index, 1)
}

function random(...args) {
    if (args.length === 0) {
        return Math.random();
    } else if (args.length === 1 && Array.isArray(args[0])) {
        return args[0][Math.floor(Math.random() * args[0].length)];
    } else if (args.length === 1 && typeof args[0] === 'number') {
        return Math.floor(Math.random() * args[0]);
    } else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
        return Math.floor(Math.random() * (args[1] - args[0] + 1) - args[0]);
    } else {
        console.log(args);
        throw new Error('Invalid arguments');
    }
}


function zeichneMatrix() {
    let kästchenXY = 10;
    for (let zeile = 0; zeile < seite; zeile++) {
        for (let spalte = 0; spalte < seite; spalte++) {
            let element = matrix[zeile][spalte];
            if (element === 0) {
                //fill("#d2be64");
            } else if (element === 5) {
                //fill("red");
            } else if (element === 3) {
                //fill("green")
            } else if (element === 1) {
                //fill("black")
            } else if (element === 7) {}
                //fill("violet")
            //rect(spalte * kästchenXY, zeile * kästchenXY, kästchenXY, kästchenXY);
        }
    }
}

module.exports = {
    zeichneMatrix: zeichneMatrix,
    random: random,
    delette: delette,
    matrix: matrix,
    seite: seite
}
