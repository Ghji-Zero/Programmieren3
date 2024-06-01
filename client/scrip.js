// Socket.io: Verbindung zum Server herstellen
// Die socket Variable enthält eine Verbindung zum Server.
const socket = io();
const cellSize = 20;

// setup Funktion von p5.js
function setup() {
    createCanvas(windowWidth, windowHeight);
}

// Mit socket.on() können wir auf Ereignisse vom Server reagieren.
// Hier reagieren wir auf das Ereignis matrix, das uns die aktuelle Matrix vom Server sendet.
socket.on('matrix', (matrix) => {
    // Die Matrix wird auf den Bildschirm gezeichnet.
    let kästchenXY = 15;

    
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
            rect(spalte * kästchenXY, zeile * kästchenXY, kästchenXY, kästchenXY);
        }
    }
});
// wir können hier auch auf andere Ereignisse reagieren, die der Server sendet
// socket.on('someEvent', (data) => {