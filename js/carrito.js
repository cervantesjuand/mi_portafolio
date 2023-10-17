let numRestar = document.getElementById('numRestar')   
let numView = document.getElementById('numView') 
let numSumar = document.getElementById('numSumar')
let cantProductos = document.getElementById('cantProductos')
//Simulación de valor proveniente de una BD
let valorUnitarioProducto = 48000;
let valorUnitarioProductoStr = new Intl.NumberFormat('de-DE').format(valorUnitarioProducto);
document.getElementById('valorUnitarioProducto').innerHTML = valorUnitarioProductoStr.toString();

numRestar.addEventListener('click', function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt > 0) {
    auxInt--;
    document.getElementById('numView').innerText = auxInt.toString();
    if (auxInt == 1) {
    document.getElementById('cantProductos').innerHTML = auxInt.toString() + " producto";
    }
    else if (auxInt == 0 || auxInt > 1) {
        document.getElementById('cantProductos').innerHTML = auxInt.toString() + " productos";
    }
    let auxSubTotal = auxInt * valorUnitarioProducto
    let auxSubTotalStr =  new Intl.NumberFormat("de-DE").format(auxSubTotal)
    document.getElementById('valorSubtotal').innerText = auxSubTotalStr;
  }
})

numSumar.addEventListener('click', function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt < 10) {
    auxInt++;
    document.getElementById('numView').innerText = auxInt.toString();
    if (auxInt == 1) {
    document.getElementById('cantProductos').innerHTML = auxInt.toString() + " producto";
    }
    else if (auxInt == 0 || auxInt > 1) {
    document.getElementById('cantProductos').innerHTML = auxInt.toString() + " productos";
    }
    let auxSubTotal = auxInt * valorUnitarioProducto
    let auxSubTotalStr =  new Intl.NumberFormat("de-DE").format(auxSubTotal)
    document.getElementById('valorSubtotal').innerText = auxSubTotalStr;
}
})


