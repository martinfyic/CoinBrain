//validación del formulario de contacto
function validarForm() {
    let email = document.getElementById("Input1").value;
    let nombre = document.getElementById("Input2").value;
    let telefono = document.getElementById("Input3").value;
    let validacionform = document.getElementById("validacion");

    if (email == "") {
        validacionform.innerHTML = "<p class='text-white bg-danger container pb-3'> Debes completar el campo Email para continuar </p>";
        return false;
    } else {
        validacionform.innerHTML = "";
    }

    if (nombre == "") {
        validacionform.innerHTML = "<p class='text-white bg-danger container pb-3'> Debes completar el campo Nombre y Apellido para continuar </p>";
        return false;
    } else {
        validacionform.innerHTML = "";
    }

    if (telefono == "") {
        validacionform.innerHTML = "<p class='text-white text-center bg-danger container pb-3 mx-3'> Debes completar el campo Teléfono para continuar </p>";
        return false;
    } else {
        validacionform.innerHTML = "";
    }
}

document.getElementById("btn_enviar").addEventListener("click", validarForm);