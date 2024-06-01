const {matrix, randomNumber} = require("./utils")
var lebewessen = require("./lebewessen");

module.exports = class rassenEsser extends lebewessen {
    constructor(z, s, energie) {
        super(z, s, energie);
        this.zeile = z;
        this.spalte = s;
        this.energie = 15;
        this.plaziereSelbstInMatrix(5);
    }
    spielzug() {
        if (this.energie > 30) {
            this.energie = 15
            this.newRE();
        } else if (this.energie > 0) {
            let grassFelder = this.scan();
            if (grassFelder.length > 0) {
                this.energie++;
                this.machSchrittMachvorne();
            } else {
                this.energie--
            }
        } else {
            matrix[this.zeile][this.spalte] = 0;
            delette(this.zeile, this.spalte)
        }
    };
    newRE() {
        let grasFelder = this.scan();

        if (grasFelder.length > 0) {
            let grasFeld = grasFelder[randomNumber(0, grasFelder.length)];
            delette(grasFeld[0], grasFeld[1])
            let newREzelle = new rassenEsser(grasFeld[0], grasFeld[1]);
            ObjectAray.push(newREzelle);
        }
    }
    machSchrittMachvorne() {
        let grassFelder = this.scan();

        if (grassFelder.length > 0) {
            let grasFeld = grassFelder[randomNumber(0, grassFelder.length)]
            matrix[this.zeile][this.spalte] = 0;
            delette(grasFeld[0], grasFeld[1]);
            this.zeile = grasFeld[0];
            this.spalte = grasFeld[1];
            matrix[this.zeile][this.spalte] = 5;
        }
    };
    scan() {
        let benachbarteFelder = [
            [this.zeile + 1, this.spalte],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte + 1],
            [this.zeile - 1, this.spalte - 1],
            [this.zeile + 1, this.spalte - 1],
            [this.zeile - 1, this.spalte + 1],
        ]
        let grassFelder = benachbarteFelder.filter(this.istGrass)
        return grassFelder;
    };
    istGrass(koordinaten) {
        let zeile = koordinaten[0];
        let spalte = koordinaten[1];
        if (zeile >= 0 &&
            spalte >= 0 &&
            zeile < matrix.length &&
            spalte < matrix[zeile].length &&
            matrix[zeile][spalte] === 3) {
            return true;
        } else {
            return false;
        }
    }
}