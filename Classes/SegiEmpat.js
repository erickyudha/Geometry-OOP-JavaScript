class SegiEmpat extends BangunDatar {
    constructor(name, warna, sisi) {
        /* Parameter:
        ** Sisi -> Array of number, [a, b, c, d] where:
                    a
            -----------------
            |               |
          d |               | b
            |               |
            -----------------
                    c

        */
        super(name, warna);

        if (this.constructor === SegiEmpat) {
            throw new Error("Abstract class can't be instantiated.");
        }
        if (sisi.length !== 4) {
            throw new Error("Segi Empat harus memiliki 4 sisi saja.");
        }


        this.sisi = sisi;
    }

    getLuas() { return this.sisi[0] * this.sisi[1] }
    getKeliling() { return this.sisi.reduce((sum, val) => { return sum + val }) }
    getSisi() { return this.sisi }

    draw() {
        const shape = document.createElement("div");
        shape.id = this.name;

        shape.style.width = this.sisi[0] + "px";
        shape.style.height = this.sisi[1] + "px";
        shape.style.backgroundColor = this.warna;

        return shape;
    }
}