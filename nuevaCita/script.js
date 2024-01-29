// Seleccionar el formulario por su ID
const formulario = document.querySelector("form");

// Seleccionar los elementos del formulario por su ID
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const fechaCita = document.getElementById("fechaCita");
const horaCita = document.getElementById("horaCita");
const tratamiento = document.getElementById("tratamiento");

// Seleccionar el botón "Guardar" por su ID
const botonGuardar = document.getElementById("botonGuardar");

// Seleccionar el elemento donde se mostrará el resultado
const resultado = document.getElementById("resultado");

// Agregar un evento de clic al botón "Guardar"
botonGuardar.addEventListener("click", function () {
    // Obtener el valor de los campos de entrada
    const nombreValor = nombre.value;
    const edadValor = edad.value;
    const telefonoValor = telefono.value;
    const fechaCitaValor = fechaCita.value;
    const horaCitaValor = horaCita.value;
    const tratamientoValor = tratamiento.value;

    // Mostrar los valores en el resultado
    resultado.innerHTML = `
        Nombre: ${nombreValor}<br>
        Edad: ${edadValor}<br>
        Teléfono: ${telefonoValor}<br>
        Fecha de Cita: ${fechaCitaValor}<br>
        Hora de Cita: ${horaCitaValor}<br>
        Tratamiento: ${tratamientoValor}<br>
    `;
});