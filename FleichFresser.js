const { matrix, randomNumber, delette, ObjectAray } = require("./utils")

var lebewessen = require("./lebewessen");

module.exports = class FleichFresser extends lebewessen {
    constructor(z, s, energie) {
        super(z, s, energie);
        this.zeile = z;
        this.spalte = s;
        this.energie = 1000;
        this.plaziereSelbstInMatrix(1);
    }
    spielzug() {
        //console.log(this.energie);
        if (this.energie > 1500) {
            this.energie = 1000
            this.newFF();
        } else if (this.energie > 0) {
            let Felder = this.scan();
            if (Felder.length > 0) {
                this.energie += 5
                0;
                this.machSchrittMachvorne();
            } else {
                this.energie -= 12, 5;
            }
        } else {
            matrix[this.zeile][this.spalte] = 0;
            delette(this.zeile, this.spalte)
        }
    };
    newFF() {
        let Felder = this.scan();

        if (Felder.length > 0) {
            let Feld = Felder[randomNumber(0, Felder.length)];
            delette(Feld[0], Feld[1])
            let newFFzelle = new FleichFresser(Feld[0], Feld[1]);
            //console.log(Feld[0]);
            ObjectAray.push(newFFzelle);
        }
    }
    machSchrittMachvorne() {
        let Felder = this.scan();

        if (Felder.length > 0) {
            let Feld = Felder[randomNumber(0, Felder.length)]
            matrix[this.zeile][this.spalte] = 0;
            delette(Feld[0], Feld[1]);
            this.zeile = Feld[0];
            this.spalte = Feld
            [1];
            matrix[this.zeile][this.spalte] = 1;
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
            [this.zeile + 2, this.spalte],
            [this.zeile - 2, this.spalte],
            [this.zeile, this.spalte + 2],
            [this.zeile, this.spalte - 2],
            [this.zeile + 2, this.spalte + 1],
            [this.zeile - 2, this.spalte - 1],
            [this.zeile + 2, this.spalte - 1],
            [this.zeile - 2, this.spalte + 1],
            [this.zeile + 2, this.spalte + 2],
            [this.zeile - 2, this.spalte - 2],
            [this.zeile - 2, this.spalte + 2],
            [this.zeile + 2, this.spalte - 2],
            [this.zeile + 1, this.spalte + 2],
            [this.zeile - 1, this.spalte - 2],
            [this.zeile + 1, this.spalte - 2],
            [this.zeile - 1, this.spalte + 2],
        ]
        let Felder = benachbarteFelder.filter(this.istGrassEsser)
        return Felder;
    };
    istGrassEsser(koordinaten) {
        let zeile = koordinaten[0];
        let spalte = koordinaten[1];
        if (zeile >= 0 &&
            spalte >= 0 &&
            zeile < matrix.length &&
            spalte < matrix[zeile].length &&
            matrix[zeile][spalte] === 5) {
            return true;
        } else {
            return false;
        }
    }
}