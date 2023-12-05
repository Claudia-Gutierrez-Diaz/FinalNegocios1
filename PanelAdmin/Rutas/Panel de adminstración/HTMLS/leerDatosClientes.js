// Lista de clientes (datos iniciales)
var clientes = [
    {
        nombre: 'Moisés',
        apellido: 'Lozano',
        correo: '19151713@aguascalientes.tecnm.mx',
        telefono: '4493246587'
    },
    {
        nombre: 'Alejandro',
        apellido: 'Peralta',
        correo: '19150336@aguascalientes.tecnm.mx',
        telefono: '4495434522'
    }
    // Puedes agregar más clientes según sea necesario
];

// Función para agregar un cliente
function agregarCliente() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;

    // Validar que todos los campos estén completos
    if (nombre === '' || apellido === '' || correo === '' || telefono === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear un objeto de cliente
    var nuevoCliente = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono
    };

    // Agregar el nuevo cliente a la lista
    clientes.push(nuevoCliente);

    // Limpiar el formulario
    limpiarFormulario();

    // Actualizar la tabla de clientes
    actualizarTabla();
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('telefono').value = '';
}

// Función para actualizar la tabla de clientes
function actualizarTabla() {
    var tabla = document.getElementById('tablaClientes');
    var tbody = tabla.getElementsByTagName('tbody')[0];

    tbody.innerHTML = '';

    for (var i = 0; i < clientes.length; i++) {
        var fila = tbody.insertRow(i);
        fila.insertCell(0).textContent = clientes[i].nombre;
        fila.insertCell(1).textContent = clientes[i].apellido;
        fila.insertCell(2).textContent = clientes[i].correo;
        fila.insertCell(3).textContent = clientes[i].telefono;

        var celdaOpciones = fila.insertCell(4);

        // Utilizar una función anónima para capturar el valor actual de 'i'
        (function(index) {
            var btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.classList.add('btn-editar'); // Agregado
            btnEditar.onclick = function () {
                editarCliente(index);
            };
            celdaOpciones.appendChild(btnEditar);

            var btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.classList.add('btn-eliminar'); // Agregado
            btnEliminar.onclick = function () {
                eliminarCliente(index);
            };
            celdaOpciones.appendChild(btnEliminar);
        })(i);
    }
}

// Función para editar un cliente
function editarCliente(index) {
    var cliente = clientes[index];

    // Llenar el formulario con los datos del cliente seleccionado
    document.getElementById('nombre').value = cliente.nombre;
    document.getElementById('apellido').value = cliente.apellido;
    document.getElementById('correo').value = cliente.correo;
    document.getElementById('telefono').value = cliente.telefono;

    // Ocultar el botón "Agregar" y mostrar el botón "Guardar cambios"
    document.getElementById('agregar').style.display = 'none';
    document.getElementById('editar').style.display = 'block';

    // Guardar el índice del cliente que se está editando
    document.getElementById('editar').setAttribute('data-index', index);

    // Cambiar el color del botón Editar al modo edición
    document.querySelector('.btn-editar').style.backgroundColor = 'yellow';
    document.querySelector('.btn-eliminar').style.backgroundColor = ''; // Resetear el color del botón Eliminar
}

// Función para guardar los cambios al editar un cliente
function guardarCambios() {
    var index = document.getElementById('editar').getAttribute('data-index');
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;

    // Validar que todos los campos estén completos
    if (nombre === '' || apellido === '' || correo === '' || telefono === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Actualizar los datos del cliente en la lista
    clientes[index] = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono
    };

    // Limpiar el formulario y mostrar el botón "Agregar"
    limpiarFormulario();
    document.getElementById('agregar').style.display = 'block';
    document.getElementById('editar').style.display = 'none';

    // Actualizar la tabla de clientes
    actualizarTabla();
}

// Función para eliminar un cliente
function eliminarCliente(index) {
    // Eliminar el cliente de la lista
    clientes.splice(index, 1);

    // Actualizar la tabla de clientes
    actualizarTabla();
}

// Llamar a actualizarTabla después de cargar la página
document.addEventListener('DOMContentLoaded', function () {
    actualizarTabla();
});


