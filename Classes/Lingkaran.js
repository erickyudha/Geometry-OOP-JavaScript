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
        const root = document.createElement("div")

        const shape = document.createElement("div");
        shape.id = this.name;

        shape.style.width = (this.radius * 2) + "px";
        shape.style.height = (this.radius * 2) + "px";
        shape.style.borderRadius = "50%";
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