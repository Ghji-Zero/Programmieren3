module.exports = class lebewessen {
    constructor(z, s, energie) {
        this.zeile = z
        this.spalte = s
        this.energie = energie
        this.plaziereSelbstInMatrix();
    };
    plaziereSelbstInMatrix(type) {
        matrix[this.zeile][this.spalte] = type;
    };
}