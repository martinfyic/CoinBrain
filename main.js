class Acumulador {
    constructor(divisas, cotizacion, importe) {
        this.divisas = divisas,
            this.cotizacion = cotizacion,
            this.importe = importe
    }
    importeTotal (){
        this.importe += this.importe; //Test formula para saber cuantos USD va gastando
    }
}
const intercambios = [];

//Funciones
//Solicitar nombre al cliente
function solicitarNombre() {

    alert("Bienvenido a Bitcamb, con los intercambios mayores a USD 1200 tendras un regalo de USDT 100");
    let nombre = prompt("Ingresa tu nombre");

    while (nombre === "") {
        nombre = prompt("El campo nombre esta vacio, debes ingresar tu nombre para continuar");
    }
    return nombre;
}

// Selección de monedas a intercambiar + splicitud de importe en USD
function intercambioMoneda() {

    moneda = prompt("Selecciona la moneda desea \n 0) BTC  \n 1) ETH \n 2) BNB \n 3) ADA \n 4) USDT");
    let importe = parseInt(prompt("Ingrese un importe en USD"));

    alert(nombreCliente + " intercambiaremos el equivalente de 1.00 USD = " + cotizacion[moneda] + " " + divisas[moneda])

    opcion = prompt("¿Esta seguro de cambiar tus USD " + importe + " equivalentes a " + divisas[moneda] + " " + importe * cotizacion[moneda] + "\n 2) Acepto intercambio  \n 3) No acepto intercambio");
    if (opcion === "2") {
        let monedaSeleccionada = new Acumulador(divisas[moneda], cotizacion[moneda], importe);
        intercambios.push(monedaSeleccionada);
        console.log("Usted realizó la compra de " + divisas[moneda] + " " + cotizacion[moneda] * importe + " equivalente a tus USD " + importe);
        opcion = prompt("Elije la opción: \n 1) Intercambiar nuevamente \n 3) Salir");
    }
}

// Variables globales
let nombreCliente = solicitarNombre();

// Arrays
// Monedas
const divisas = ["BTC", "ETH", "BNB", "ADA", "USDT", ];
// Tasa de cambio
const cotizacion = [0.000047, 0.00082, 0.0042, 1.97, 0.95, ];

// Desarrollo programa
let opcion = prompt("Elije la opción: \n 1) Intercambiar monedas \n 2) Finalizar intercambio  \n 3) Salir");

while (opcion !== "3") {
    if (opcion === "1") {
        intercambioMoneda();
    }
    if (opcion === "2") {
        opcion = prompt("Estas seguro de finalizar? \n 1) Intercambiar monedas \n 3) Salir")
    }
}

alert("Intercambio finalizado, " + nombreCliente + " gracias por confiar en nosotros");
console.log(nombreCliente + " gracias por confiar en nosotros")

// Mostrar objeto por consola
console.log(intercambios);

//array de importes
const arrayImporte = intercambios.map((sum) => sum.importe);
console.log(arrayImporte);
//Suma total de importes
const arrayImporteTotal = arrayImporte.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log("El total gastado es de USD " + arrayImporteTotal);

if (arrayImporteTotal > 1200){
    alert(nombreCliente + "tienes un regalo de USDT 100")
}

//Fin