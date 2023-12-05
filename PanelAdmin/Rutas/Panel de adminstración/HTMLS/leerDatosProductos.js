var productos = [
    {
        producto: 'Vaso tipo Starbucks',
        desCorta: 'Vasos tipo Starbuks, con vaso acrílico',
        desLarga: `Disfruta de tus bebidas favoritas todo el tiempo con nuestros novedosos vasos fabricados en plástico y diseñados 
                para usarse para todo tipo de líquidos. Si vas a la playa no puede faltar este singular accesorio que te mantendrá hidratado 
                durante tus vacaciones, por su diseño de rosca no permite derrames esto lo hace ideal también para llevar al GYM y 
                mantenerte hidratado durante todo tu entrenamiento con una gran capacidad de 710ml. 
                De igual forma si lo usas para la escuela mantendrás un estilo fresco y tus bebidas conservarán muy bien la temperatura. 
                Este vaso es tan versátil que lo recomendamos para uso doméstico o aligerar un día laboral; tu vaso siempre estará cuando 
                lo necesites. Cuenta con doble pared y un interior liso que permite mantenerlo limpio todo el tiempo.`,
        precio: 250.00,
        productAvailability: 'disponible'
    },
    {
        producto: 'Vaso Cristal con tapa',
        desCorta: 'Vaso Cristal con Tapa de Bambú, decoración calabaza.',
        desLarga: `El vaso de vidrio está hecho de cristal de alta calidad, éste no genera hongos ya que es material es de vidrio y bambú, 
        no se contiene plástico. El termo de cristal es altamente térmico. El vaso de vidrio individual no contiene plomo ni BPA, 
        y es lo suficientemente fuerte como para soportar cambios repentinos en temperaturas, en otras palabras tiene propiedades térmicas. 
        El termo de vidrio es apto para lavaplatos, pero las tapas de madera de bambú debe lavarse a mano y dejarse bien seca. 
        La tapa de madera de bambú refleja nuestro firme compromiso con el medio ambiente al utilizar madera es el termo 
        es un producto sostenible y renovable. El termo de cristal con forma de lata es perfecto para cualquier bebida fría o caliente 
        y para cualquier ocasión. El vaso térmico con popote puede utilizarse para beber cerveza refrescante, hacer cócteles perfectos 
        como whiskey o un café de Starbucks. Sirve tus bebidas favoritas en este termo individual de cristal para una experiencia 
        inolvidable.`,
        precio: 350.00,
        productAvailability: 'disponible'
    },
    {
        producto: 'Termo Inoxidable',
        desCorta: 'Termo de acero inoxidable 1.5 Lts, decoración personalizada.',
        desLarga: `El vaso térmico para llevar mantiene sus bebidas calientes durante al menos 5 horas y frías hasta 8 horas, 
        para que pueda disfrutar de sus bebidas y café favoritos tranquilamente durante varias horas, ideal para viajar y en casa. 
        Gracias a su aislamiento al vacío, no te quemarás los dedos con esta taza de café para llevar de acero inoxidable de doble pared.`,
        precio: 450.00,
        productAvailability: 'disponible'
    },
    {
        producto: 'Vaso de Cristal 15 Oz',
        desCorta: 'Vaso de Cristal 15 Oz, personalizable con caja de cartón y listón.',
        desLarga: `Este vasos cristal tiene una capacidad de 500 ml, lo que es lo suficientemente grande como para contener más bebidas o café. 
        Y el estuario de la botella es un estuario estándar. Por lo tanto, al hacer su propio jugo, 
        puede agregar grandes trozos de pulpa o hielo en la taza para decorar para que tenga suficiente`,
        precio: 170.00,
        productAvailability: 'disponible'
    },
    {
        producto: 'Centro de mesa',
        desCorta: 'Centro de mesa con globos',
        desLarga: 'Paquete evento sencillo: 10 centros de mesa globo burbuja, guirnalda 2 metros, luces y cortinas',
        precio: 2000.00,
        productAvailability: 'disponible'
    },
    {
        producto: 'Arreglo Floral',
        desCorta: 'Arreglo floral chico',
        desLarga: 'Arreglo floral chico, variedad de flores de temporada',
        precio: 350.00,
        productAvailability: 'disponible'
    },
    {
        producto: 'Burbuja Chica ',
        desCorta: 'Burbuja chica',
        desLarga: 'Burbuja chica, con frase y diseño personalizado.',
        precio: 200.00,
        productAvailability: 'disponible'
    },
    {
        producto: 'Caja de cartón',
        desCorta: 'Caja de cartón de 20x20x20',
        desLarga: `Proteger nuestros productos cuando son enviados a cualquier sitio de la República es lo más importante, 
        tanto para nosotros como para los clientes, por ello, traemos esta cajita súper resistente para pequeños productos 
        que requieren ser trasladados de un punto a otro. O bien, si lo que quieres es darles una excelente presentación 
        a tus productos esta cajita es perfecta. La cajita de Envío Chica es sencilla de armar, no requiere pegamento 
        y es sumamente resistente. No dejes pasar la oportunidad de contar con ella para cumplir tus metas.`,
        precio: 35.00,
        productAvailability: 'disponible'
    },
    {
        producto: 'Chocolates Milky ',
        desCorta: 'Chocolate Milky Way Mini 52 piezas, 442g',
        desLarga: `Si eres un amante del chocolate, entonces no puedes dejar de añadir a tu carrito de la despensa el 
        chocolate Milky Way minis. 
        Chocolate con relleno de caramelo y nougat lo hacen irresistible. Adquiere esta presentación en bote de 442 g 
            con 52 piezas para ofrecer a tus invitados un delicioso y dulce bocado en tus reuniones especiales`,
        precio: 154.00,
        productAvailability: 'disponible'
    },
    {
        producto: 'Disfraz inflable',
        desCorta: 'Disfraz inflable de animal, cosplay, vestido de fiesta de cosplay, disfraz de lujo para adultos',
        desLarga: `Este disfraz es fantástico para aquellos que desean destacar en una fiesta de disfraces o hacer que las actividades 
        al aire libre sean memorables. Nuestro disfraz inflable se ve fantástico y se ríe donde quiera que vayas. 
        ¿Por qué no darle una oportunidad este Halloween. Requiere baterías para el ventilador que mantendrá el traje inflado.`,
        precio: 699.00,
        productAvailability: 'disponible'
    },
    // Puedes agregar más productos según sea necesario
];






document.addEventListener('DOMContentLoaded', function () {
    // Cargar datos predefinidos al cargar la página
    cargarDatos();
});

function cargarDatos() {
    var tabla = document.getElementById('tablaProductos');
    var tbody = tabla.getElementsByTagName('tbody')[0];

    // Limpiar la tabla antes de cargar los datos
    tbody.innerHTML = '';

    // Iterar sobre los productos y agregar filas a la tabla
    for (var i = 0; i < productos.length; i++) {
        var fila = tbody.insertRow(i);
        var celdaProducto = fila.insertCell(0);
        var celdaDesCorta = fila.insertCell(1);
        var celdaDesLarga = fila.insertCell(2);
        var celdaPrecio = fila.insertCell(3);
        var celdaDisponibilidad = fila.insertCell(4);
        var celdaOpciones = fila.insertCell(5);

        celdaProducto.innerHTML = productos[i].producto;
        celdaDesCorta.innerHTML = productos[i].desCorta;
        celdaDesLarga.innerHTML = productos[i].desLarga;
        celdaPrecio.innerHTML = productos[i].precio;
        celdaDisponibilidad.innerHTML = productos[i].productAvailability;

        // Agregar botones de opciones (Editar y Eliminar)
        var botonEditar = document.createElement('input');
        botonEditar.type = 'button';
        botonEditar.value = 'Editar';
        botonEditar.onclick = (function (index) {
            return function () {
                editarProducto(index);
            };
        })(i);

        var botonEliminar = document.createElement('input');
        botonEliminar.type = 'button';
        botonEliminar.value = 'Eliminar';
        botonEliminar.onclick = (function (index) {
            return function () {
                eliminarProducto(index);
            };
        })(i);

        celdaOpciones.appendChild(botonEditar);
        celdaOpciones.appendChild(botonEliminar);
    }
}

function agregarProducto() {

    
    var nuevoProducto = {
        producto: document.getElementById('producto').value,
        desCorta: document.getElementById('desCorta').value,
        desLarga: document.getElementById('desLarga').value,
        precio: document.getElementById('precio').value,
        productAvailability: document.getElementById('productAvailability').value
    };

    // Agregar el nuevo producto al array
    productos.push(nuevoProducto);

    // Volver a cargar los datos en la tabla
    cargarDatos();

    // Limpiar los campos del formulario
    limpiarFormulario();
}

function editarProducto(index) {
    // Mostrar el botón "Guardar cambios" y ocultar "Agregar"
    document.getElementById('agregar').style.display = 'none';
    document.getElementById('editar').style.display = 'inline-block';

    // Llenar el formulario con los datos del producto seleccionado
    document.getElementById('producto').value = productos[index].producto;
    document.getElementById('desCorta').value = productos[index].desCorta;
    document.getElementById('desLarga').value = productos[index].desLarga;
    document.getElementById('precio').value = productos[index].precio;
    document.getElementById('productAvailability').value = productos[index].productAvailability;

    // Guardar el índice del producto que se está editando
    document.getElementById('editar').setAttribute('data-index', index);
}

function guardarCambios() {
    // Obtener el índice del producto que se está editando
    var index = document.getElementById('editar').getAttribute('data-index');

    // Actualizar los datos del producto con los valores del formulario
    productos[index].producto = document.getElementById('producto').value;
    productos[index].desCorta = document.getElementById('desCorta').value;
    productos[index].desLarga = document.getElementById('desLarga').value;
    productos[index].precio = document.getElementById('precio').value;
    productos[index].productAvailability = document.getElementById('productAvailability').value;

    // Volver a cargar los datos en la tabla
    cargarDatos();

    // Limpiar los campos del formulario
    limpiarFormulario();

    // Ocultar el botón "Guardar cambios" y mostrar "Agregar"
    document.getElementById('agregar').style.display = 'inline-block';
    document.getElementById('editar').style.display = 'none';
}

function eliminarProducto(index) {
    // Eliminar el producto del array
    productos.splice(index, 1);

    // Volver a cargar los datos en la tabla
    cargarDatos();
}

function limpiarFormulario() {
    // Limpiar los campos del formulario
    document.getElementById('producto').value = '';
    document.getElementById('desCorta').value = '';
    document.getElementById('desLarga').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('productAvailability').value = 'disponible';
}