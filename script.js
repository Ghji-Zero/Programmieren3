let matrix = [];
let seite = 100
let ObjectAray = [];

function setup() {
    createCanvas(10*seite,10*seite);
    erstelleMatrix()
    noStroke()
    ObjectAray.push(new rassenEsser(0,1))
    ObjectAray.push(new rassenEsser(1,0))
    ObjectAray.push(new Grass(5,5))
    ObjectAray.push(new Grass(4,0))
    ObjectAray.push(new Grass(0,4))
    ObjectAray.push(new Grass(1,3))
    ObjectAray.push(new Grass(3,1))
    ObjectAray.push(new Grass(4,4))
    ObjectAray.push(new FleichFresser(9,9))
    objektAray.push(new Miyth(50,500))
}

let i = 0
function draw() {
    //console.log(ObjectAray.length)
    i++;
    if (i < 1000000000) {
        for (let i = 0; i < ObjectAray.length; i++) {
            ObjectAray[i].spielzug();
        }
    }
    zeichneMatrix()
}

function delette(zeile,spalte) {
    let index = ObjectAray.findIndex(function(grassObjekt) {
        if (grassObjekt.zeile === zeile && grassObjekt.spalte === spalte) {
            return true;
        } else return false;
    });
    ObjectAray.splice(index,1)
}
