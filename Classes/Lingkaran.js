class Lingkaran extends BangunDatar {
    constructor(name, warna, radius) {
        super(name, warna);

        this.radius = radius;
    }

    getLuas() {
        return Math.PI * this.radius * this.radius;
    }
    getKeliling() {
        return 2 * Math.PI * this.radius;
    }
    draw() {
        const shape = document.createElement("div");
        shape.id = this.name;

        shape.style.width = (this.radius * 2) + "px";
        shape.style.height = (this.radius * 2) + "px";
        shape.style.borderRadius = "50%";
        shape.style.backgroundColor = this.warna;

        return shape;
    }

}