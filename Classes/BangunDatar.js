class BangunDatar {
    constructor(name, warna) {
        if (this.constructor === BangunDatar) {
            throw new Error("Abstract class can't be instantiated.");
        }

        this.name = name;
        this.warna = warna;
    };

    getLuas() { };
    getKeliling() { };
    getWarna() {
        return this.warna;
    };
    draw() { };
}

