class SegitigaSamaKaki extends Segitiga {
    constructor(name, warna, sisiAlas, sisiSamping) {
        const convertedSisi = [sisiAlas, sisiSamping, sisiSamping];
        super(name, warna, convertedSisi);
    }
}