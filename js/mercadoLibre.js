let inputBusqueda = document.getElementById('inputBusqueda');

class Automovil {
    constructor(marca, modelo, precio, imagen, año, km, ciudad){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.año = año;
        this.km = km;
        this.ciudad = ciudad;
    }
};

let img = "../imagenes/alpacino.jpg";

let auto1 = new Automovil("Rang Rover", "Velar-R 170 HP", 200000000, img, 2023, 20000, "Usaquén - Bogotá - Capítal " );

// alert ( auto1.marca + " " + auto1.modelo); 

inputBusqueda.addEventListener("click", function(event){
    // if (event.key == "Enter"){ 
    let mainContent = document.getElementById("mainContent");
    //caja producto
    let boxProducto = document.createElement("div");
    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");
    //caja imagen
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");

    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto1.imagen);
    imgAuto.setAttribute("class","img-auto");

    //caja información
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");

    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto1.marca + "  " + auto1.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class", "marca");

    ///precio
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    //línea para convertir el número a formato de precio con . en los miles
    let precioStr = Intl.NumberFormat("de-DE").format(auto1.precio);
    let txtNodePrecio = document.createTextNode("$ "+ precioStr);
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");

    //año 
    let año = document.createElement("label");
    boxInfo.appendChild(año);

    let txtNodeAño = document.createTextNode(`${auto1.año} Km ${auto1.km} ${auto1.ciudad}`)
    año.appendChild(txtNodeAño)
    año.setAttribute("class", "año")

    //let icon
    let boxCorazon = document.createElement("div");
    boxImg.appendChild(boxCorazon);
    let icon = document.createElement("i");
    boxCorazon.appendChild(icon);
    boxCorazon.setAttribute("class", "box-corazon");
    icon.setAttribute("class", "icon-corazon fa-regular fa-heart");

    //let linea
    let lineaDiv = document.createElement("hr");
});