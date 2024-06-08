const { matrix, randomNumber, ObjectAray } = require("./utils")
var lebewessen = require("./lebewessen");

module.exports = class Grass extends lebewessen {
    constructor(z, s, energie) {
        super(z, s, energie);
        this.zeile = z;
        this.spalte = s;
        this.energie = 0;
        this.plaziereSelbstInMatrix(3);
    }
    plaziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 3;
    };
    spielzug() {
        this.energie++;
        if (this.energie > 5) {
            this.newGrass();
            this.energie = 0;
            //console.log("fuck you")
        }
    }
    newGrass() {
        let erdeFelder = this.scan();

        if (erdeFelder.length > 0) {
            let erdeFeld = erdeFelder[randomNumber(0, erdeFelder.length)];
            let newGrassZelle = new Grass(erdeFeld[0], erdeFeld[1]);
            ObjectAray.push(newGrassZelle);
            //console.log(ObjectAray.length)
        }
    };
    scan() {
        let benachbarteFelder = [
            [this.zeile + 1, this.spalte],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile, this.spalte - 1],
            // [this.zeile+1,this.spalte+1],
            // [this.zeile-1,this.spalte-1],
            // [this.zeile+1,this.spalte-1],
            // [this.zeile-1,this.spalte+1],
        ]
        let erdeFelder = benachbarteFelder.filter(this.istErde)
        return erdeFelder;
    };
    istErde(koordinaten) {
        let zeile = koordinaten[0];
        let spalte = koordinaten[1];
        if (zeile >= 0 &&
            spalte >= 0 &&
            zeile < matrix.length &&
            spalte < matrix[zeile].length &&
            matrix[zeile][spalte] === 0) {
            return true;
        } else {
            return false;
        }
    }
}