class myth  {
    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
        this.plaziereSelbstInMatrix()
    }
    zeile; //= randomNumber(0,100);
    spalte; //= randomNumber(0,100);
    energie = 1500
    plaziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 7;
    };
    spielzug() {
        if (this.energie > 0) {
            let grassFelder = this.scan();
            if (grassFelder.length > 0) {
                this.energie++;
                this.machSchrittMachvorne();
            } else {
                this.energie--
            }
        } else {
            matrix[this.zeile][this.spalte] = 0;
            delette(this.zeile,this.spalte)
        }
    };
    machSchrittMachvorne() {
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
}