const docBody = document.getElementById("root");
//---------------------------------

const myLingkaran = new Lingkaran("lingkaran", "#0f2", 25);
const myPersegi = new Persegi("persegi", "#f0f", 50);
const myPersegiPanjang = new PersegiPanjang("persegi_panjang", "#ff0", 40, 60);
const mySegitigaSamaSisi = new SegitigaSamaSisi("segitiga_sisi", "#f0f0f0", 40);
const mySegitigaSamaKaki = new SegitigaSamaKaki("segitiga_kaki", "#0f6268", 40, 60);
const mySegitigaSiku = new SegitigaSiku("segitiga_siku", "#00f213", 30, 40, 50);

docBody.append(myLingkaran.draw());
docBody.append(myPersegi.draw());
docBody.append(myPersegiPanjang.draw());
docBody.append(mySegitigaSamaSisi.draw());
docBody.append(mySegitigaSamaKaki.draw());
docBody.append(mySegitigaSiku.draw());

console.log(myPersegi.getLuas());
