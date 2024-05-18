class Miyth  {
    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
        this.plaziereSelbstInMatrix()
    }
    zeile; //= randomNumber(0,100);
    spalte; //= randomNumber(0,100);
    energie = 2000
    re=0
    plaziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 7;
    };
    spielzug() {
        if (this.energie > 0, this.re < 1000) {
            if (re == 1000){                
                let erdeFeld = erdeFelder[randomNumber(0,erdeFelder.length)];
                let newGrassZelle = new Grass(erdeFeld[0],erdeFeld[1]);
                ObjectAray.push(newGrassZelle);
                //console.log(ObjectAray.length)   
            } else {
                this.energie--
                this.re++
            }
        } else {
            matrix[this.zeile][this.spalte] = 0;
            delette(this.zeile,this.spalte)
        }
    };
/*    machSchrittMachvorne() {
        let grassFelder = this.scan();
        
        if (grassFelder.length > 0) {
            let grasFeld = grassFelder[randomNumber(0,grassFelder.length)]
            matrix[this.zeile][this.spalte] = 0;
            delette(grasFeld[0],grasFeld[1]);
            this.zeile = grasFeld[0];
            this.spalte = grasFeld[1]; 
            matrix[this.zeile][this.spalte] = 5;
        }   
    };
    scan() {
        let benachbarteFelder = [
            [this.zeile+1,this.spalte],
            [this.zeile-1,this.spalte],            
            [this.zeile,this.spalte+1],
            [this.zeile,this.spalte-1],
            [this.zeile+1,this.spalte+1],
            [this.zeile-1,this.spalte-1],
            [this.zeile+1,this.spalte-1],
            [this.zeile-1,this.spalte+1],
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
            return true ;
        } else {
            return false;
        }
    }
    */
}