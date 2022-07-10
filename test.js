// con boton cambiar creo evento para realizar el intercambio con valor agregado en USD y seleccion de monedas

let cambiar = document.getElementById("taza");
cambiar.onclick = () => {
    //capturo input donde ingresa importe user y luego capturo el value
    let seccionUsd = document.getElementById("cantidadUsd");
    let importeUsd = parseFloat(seccionUsd.value);
    console.log(importeUsd); // VER -- borrar
    //capturo select donde user elige moneda y luego capturo el value
    let seleccionMonedas = document.getElementById("monedaSeleccion");
    let opcionMoneda = parseFloat(seleccionMonedas.options[seleccionMonedas.selectedIndex].value);
    console.log(opcionMoneda); // VER -- borrar
    //muestro resultado
    let resultado = opcionMoneda * importeUsd;
    document.getElementById("cantidadIntercambio").value = resultado;
};
