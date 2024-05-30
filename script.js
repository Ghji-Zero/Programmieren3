const Grass = require("./grass");
const FleichFresser = require("./FleichFresser");
const rassenEsser = require("./rassenEsser");
const Miyth = require("./Miyth");
const Empty = require("./empty") 
const {random, zeichneMatrix, matrix, seite} = require("./utils");

let ObjectAray = [];

let Creature = [
    [7, 0.005],
    [5, 0.2],
    [1, 0.1],
    [3, 0.15],
]

function RandomLive() {
    let = rand = random();
    let sum = 0;
    for (let [cls, prob] of Creature){
        sum += prob;
        if (rand < sum) {
            return cls;
        }
    }
    return 0;
}

function erstelleMatrix() {
    for (let zeile = 0; zeile < seite; zeile++) {
        matrix.push([])
        for (let spalte = 0; spalte < seite; spalte++) {
            let cls = RandomLive();
            matrix[zeile][spalte] = cls;
        }
    }
}

function setup() {
    //createCanvas(10 * seite, 10 * seite);
    erstelleMatrix()
    //noStroke()

}

let i = 0
function draw() {
    i++;
    if (i < 1000000000) {
        for (let i = 0; i < ObjectAray.length; i++) {
            ObjectAray[i].spielzug();
        }
    }
    zeichneMatrix()
}

setup();
setInterval(draw, 1000);

module.exports = {
    setup: setup,
    draw: draw
};