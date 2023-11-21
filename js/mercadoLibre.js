let inputBusqueda = document.getElementById('inputBusqueda');
let mainContent = document.getElementById("mainContent");

class Automovil {
    constructor(marca, modelo, precio, imagen, año, km, ciudad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.año = año;
        this.km = km;
        this.ciudad = ciudad;
    }
}

let img1 = "../imagenes/rangRover2.webp";
let img2 = "../imagenes/bmw.jpg";
let img3 = "../imagenes/mercedesg63.webp";
let img4 = "../imagenes/mustang.webp";

let auto1 = new Automovil("Rang Rover", "Velar-R 170 HP", 200000000, img1, 2023, 20000, "Usaquén - Bogotá - Capítal");
let auto2 = new Automovil("BMW", "M5", 250000000, img2, 2020, 100000, "Medellín - Antioquia - Poblado");
let auto3 = new Automovil("Mercedes", "G63", 1070000000, img3, 2019, 50.6000, "Medellín - Antioquia - Poblado");
let auto4 = new Automovil("Ford Mustang", "5.0 Premium", 167000000, img4, 2018, 29000, "Cota - Cundinamarca");

let autos = [auto1, auto2, auto3, auto4];

    inputBusqueda.addEventListener("input", function(event) {
        let userInput = event.target.value.toLowerCase();
        boxProductos.innerHTML = ''; // Limpia el contenido anterior

        for (let auto of autos) {
            if (userInput === '' || auto.marca.toLowerCase().includes(userInput)) {
                // Crea la caja de producto para el auto correspondiente
                let boxProducto = document.createElement("div");
                boxProductos.appendChild(boxProducto);
                boxProducto.setAttribute("class", "box-producto");

                // Caja imagen
                let boxImg = document.createElement("div");
                boxProducto.appendChild(boxImg);
                boxImg.setAttribute("class", "box-img");

                let imgAuto = document.createElement("img");
                boxImg.appendChild(imgAuto);
                imgAuto.setAttribute("src", auto.imagen);
                imgAuto.setAttribute("class", "img-auto");

                // Caja información
                let boxInfo = document.createElement("div");
                boxProducto.appendChild(boxInfo);
                boxInfo.setAttribute("class", "box-info");

                let marca = document.createElement("label");
                boxInfo.appendChild(marca);
                let txtNodeMarca = document.createTextNode(auto.marca + "  " + auto.modelo);
                marca.appendChild(txtNodeMarca);
                marca.setAttribute("class", "marca");

                // Precio
                let precio = document.createElement("label");
                boxInfo.appendChild(precio);
                let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
                let txtNodePrecio = document.createTextNode("$ " + precioStr);
                precio.appendChild(txtNodePrecio);
                precio.setAttribute("class", "precio");

                // Año
                let año = document.createElement("label");
                boxInfo.appendChild(año);

                let txtNodeAño = document.createTextNode(`${auto.año} ${auto.km} km ${auto.ciudad}`);
                año.appendChild(txtNodeAño);
                año.setAttribute("class", "año");

                // Icono de corazón
                let boxCorazon = document.createElement("div");
                boxImg.appendChild(boxCorazon);
                let icon = document.createElement("i");
                boxCorazon.appendChild(icon);
                boxCorazon.setAttribute("class", "box-corazon");
                icon.setAttribute("class", "icon-corazon fa-regular fa-heart");

                // Línea divisoria
                let lineaDiv = document.createElement("hr");
            }
        }
    });


    for (let auto of autos) {
        
        let boxProducto = document.createElement("div");
        boxProductos.appendChild(boxProducto);
        boxProducto.setAttribute("class", "box-producto");

        // Caja imagen
        let boxImg = document.createElement("div");
        boxProducto.appendChild(boxImg);
        boxImg.setAttribute("class", "box-img");

        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        imgAuto.setAttribute("src", auto.imagen);
        imgAuto.setAttribute("class", "img-auto");

        // Caja información
        let boxInfo = document.createElement("div");
        boxProducto.appendChild(boxInfo);
        boxInfo.setAttribute("class", "box-info");

        let marca = document.createElement("label");
        boxInfo.appendChild(marca);
        let txtNodeMarca = document.createTextNode(auto.marca + "  " + auto.modelo);
        marca.appendChild(txtNodeMarca);
        marca.setAttribute("class", "marca");

        // Precio
        let precio = document.createElement("label");
        boxInfo.appendChild(precio);
        let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
        let txtNodePrecio = document.createTextNode("$ " + precioStr);
        precio.appendChild(txtNodePrecio);
        precio.setAttribute("class", "precio");

        // Año
        let año = document.createElement("label");
        boxInfo.appendChild(año);

        let txtNodeAño = document.createTextNode(`${auto.año} ${auto.km} km ${auto.ciudad}`);
        año.appendChild(txtNodeAño);
        año.setAttribute("class", "año");

        //Estrellas
        let boxStar = document.createElement("div");
        boxInfo.appendChild(boxStar);
        boxStar.setAttribute("class", "box-star");

        // Línea divisoria
        let lineaDiv = document.createElement("hr");
    }

    let boxToggle = document.getElementById('boxToggle');
    let buttonToggle = document.getElementById('buttonToggle');
    
    boxToggle.addEventListener("click", () => {
        if(boxToggle.classList.contains("box-toggle-off")) {
            boxToggle.classList.add("box-toggle-on");
            boxToggle.classList.remove("box-toggle-off");
            buttonToggle.classList.add("button-toggle-on");
            buttonToggle.classList.remove("button-toggle-off");
        }else{
            boxToggle.classList.remove("box-toggle-on");
            boxToggle.classList.add("box-toggle-off");
            buttonToggle.classList.remove("button-toggle-on");
            buttonToggle.classList.add("button-toggle-off");
        }
    });