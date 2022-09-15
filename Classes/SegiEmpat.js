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

        this.sisi = sisi;
    }

    getLuas() { return this.sisi[0] * this.sisi[1] }
    getKeliling() { return this.sisi.reduce((sum, val) => { return sum + val }) }
    getSisi() { return this.sisi }

    draw() {
        const root = document.createElement("div");

        const shape = document.createElement("div");
        shape.id = this.name;

        shape.style.width = this.sisi[0] + "px";
        shape.style.height = this.sisi[1] + "px";
        shape.style.backgroundColor = this.warna;

        root.append(shape);

        const shapeText = document.createElement("h2");
        shapeText.innerHTML = this.name;

        root.append(shapeText);
        root.style.borderStyle = "solid";
        root.style.borderColor = "#000";
        root.style.width = "250px";
        root.style.height = "250px";
        root.style.margin = "10px 10px"

        return root;
    }
}