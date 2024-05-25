const { matrix } = require("./utils")

module.exports = class lebewessen {
    constructor(z, s, energie) {
        this.zeile = z
        this.spalte = s
        this.energie = energie
        this.plaziereSelbstInMatrix();
    };
    plaziereSelbstInMatrix(type) {
        console.log("matrix", matrix)
        matrix[this.zeile][this.spalte] = type;
    };
}