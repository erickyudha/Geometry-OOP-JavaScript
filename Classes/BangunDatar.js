/* Kelompok 3
- ERICK YUDHA PRATAMA SUKKU
- FAUZI DARMAWAN
- ARBIANSYAH
- RAHMAT FAJRI NANDIPINTO
- MIDHAT DJA'FAR SIDIK 
*/

class BangunDatar {
    constructor(name, warna) {
        if (this.constructor === BangunDatar) {
            throw new Error("Abstract class can't be instantiated.");
        }

        this.name = name;
        this._warna = warna;
    };

    getLuas() { };
    getKeliling() { };
    getWarna() {
        return this.warna;
    };
    draw() { };
}

