class PersegiPanjang extends SegiEmpat {
    constructor(name, warna, panjang, lebar) {
        if (panjang === lebar) {
            throw new Error("Panjang = Lebar, use Persegi class instead!");
        }

        const convertedSisi = [panjang, lebar, panjang, lebar];
        super(name, warna, convertedSisi);
    }
}