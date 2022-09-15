class Segitiga extends BangunDatar {
    constructor(name, warna, sisi) {
        /* Parameter:
        ** Sisi -> Array of number, [a, b, c] where:
              
              /\
           b /  \ c
            /    \
            ------
               a
        *** a = sisi alas
        *** b = sisi samping kiri
        *** c = sisi samping kanan
        */
        super(name, warna);
        this.sisi = sisi;
    }

    getLuas() {
        // Using Heron's Formula to find triangle area with 3 sides known
        const s = this.getKeliling() / 2
        const area = Math.sqrt(s * (s - a) * (s - b) * (s * c));
        return area;
    }
    getKeliling() { return this.sisi.reduce((sum, val) => { return sum + val }) }
    getSisi() { return this.sisi }

    draw() {
        const canvas = document.createElement("canvas");
        canvas.id = this.name;

        const canvasSize = (Math.max(...this.sisi) + 50) + "px"
        canvas.style.width = canvasSize;
        canvas.style.height = canvasSize;

        const scale = 3;
        const AB = this.sisi[0] * scale;
        const BC = this.sisi[1] * scale;
        const AC = this.sisi[2] * scale;

        const A = [0, 0]; // starting coordinates
        const B = [0, AB];
        const C = [];

        // calculate third point
        C[1] = (AB * AB + AC * AC - BC * BC) / (2 * AB);
        C[0] = Math.sqrt(AC * AC - C[1] * C[1]);

        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(A[0], A[1]);
        ctx.lineTo(B[0], B[1]);
        ctx.lineTo(C[0], C[1]);
        ctx.fillStyle = this.warna;
        ctx.fill();

        return canvas;
    }
}