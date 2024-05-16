function randomNumber(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}
function erstelleMatrix() {
    for (let zeile = 0; zeile < seite; zeile++) {
        matrix.push([])
        for (let spalte = 0; spalte < seite; spalte++) {
            matrix[zeile][spalte] = 0;
        }    
    }
}
function zeichneMatrix() {
    let kästchenXY = 10;
    for (let zeile = 0; zeile < seite; zeile++) {
        for (let spalte = 0; spalte < seite; spalte++) {
            let element = matrix[zeile][spalte];
             if (element === 0) {
                fill("#d2be64");
            } else if (element === 5) {
                fill("red");
            } else if (element === 3) {
                fill("green")
            } else if (element === 1) {
                fill("black")
            }    
            rect(spalte*kästchenXY,zeile*kästchenXY,kästchenXY,kästchenXY);
        }
    }
}   