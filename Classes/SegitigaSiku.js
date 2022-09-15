class SegitigaSiku extends Segitiga {
    constructor(name, warna, sisiAlas, sisiSamping, sisiMiring) {
        if (Math.pow(sisiMiring, 2) !== Math.pow(sisiAlas, 2) + Math.pow(sisiSamping, 2)) {
            throw new Error("Segitiga bukan siku-siku!");
        }
        const convertedSisi = [sisiAlas, sisiSamping, sisiMiring];
        super(name, warna, convertedSisi);
    }
}