document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el formulario
    var formulario = document.querySelector('form');

    // Agrega un evento al formulario cuando se envía
    formulario.addEventListener('submit', function (event) {
        // Evita que el formulario se envíe de la manera predeterminada
        event.preventDefault();

        // Obtiene el valor del campo de nombre de usuario
        var nombreUsuario = document.getElementById('nombre').value;

        // Redirige a la página de administración con el nombre de usuario como parámetro
        window.location.href = 'administracion.html?nombre=' + encodeURIComponent(nombreUsuario);
    });
});


