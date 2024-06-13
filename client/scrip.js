// Socket.io: Verbindung zum Server herstellen
// Die socket Variable enthält eine Verbindung zum Server.
const socket = io();
const cellSize = 12;

// setup Funktion von p5.js
function setup() {
    createCanvas(windowWidth, windowHeight);
}

// Mit socket.on() können wir auf Ereignisse vom Server reagieren.
// Hier reagieren wir auf das Ereignis matrix, das uns die aktuelle Matrix vom Server sendet.
socket.on('matrix', (matrix) => {
    // Die Matrix wird auf den Bildschirm gezeichnet.


    for (let zeile = 0; zeile < matrix.length; zeile++) {
        for (let spalte = 0; spalte < matrix.length; spalte++) {
            let element = matrix[zeile][spalte];
            if (element === 0) {
                fill("#d2be64");
            } else if (element === 5) {
                fill("red");
            } else if (element === 3) {
                fill("green")
            } else if (element === 1) {
                fill("black")
            } else if (element === 7) {
                fill("violet")
            }
            rect(spalte * cellSize, zeile * cellSize, cellSize, cellSize);
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("loadded!!!!")

    const gras = document.getElementById("gras");
    const rasenFresser = document.getElementById("rasen-fresser");

    socket.on('data', (data) => {

        console.log(data)

        gras.children[1].innerText = data.gras.created;
        gras.children[2].innerText = data.gras.living;

        rasenFresser.children[1].innerText = data.rasen_fresser.created;
        rasenFresser.children[2].innerText = data.rasen_fresser.living;

    });
});
// wir können hier auch auf andere Ereignisse reagieren, die der Server sendet
// socket.on('someEvent', (data) => {