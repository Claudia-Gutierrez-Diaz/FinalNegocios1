//La etiqueta main es la etiqueta padre
const padre = document.querySelector("MAIN")

//Enlaces:
const enlaceInicio = document.querySelector("#home-box")
const enlaceCats = document.querySelector("#cats-box")
const enlaceProds = document.querySelector("#prods-box")
const enlaceClientes = document.querySelector("#clientes-box")


//Creación de las vistas (opciones del aside):
const paginaInicio = document.createElement("iframe")
paginaInicio.src = "./Panel de adminstración/HTMLS/inicio.html"
paginaInicio.width = "100%"
paginaInicio.height = "100%"
paginaInicio.frameBorder = "0"
padre.appendChild(paginaInicio)

const paginaCats = document.createElement("iframe")
const paginaProds = document.createElement("iframe")
const paginaClientes = document.createElement("iframe")



//Funciones de los enlaces:

enlaceInicio.addEventListener("click", function(){

    eliminarVistaExistente()

    padre.appendChild(paginaInicio)
})


enlaceCats.addEventListener("click", function(){
    
    paginaCats.src = "./Panel de adminstración/HTMLS/categorias.html"
    paginaCats.width = "100%"
    paginaCats.height = "100%"
    paginaCats.frameBorder = "0"

    eliminarVistaExistente()

    padre.appendChild(paginaCats)
})

enlaceProds.addEventListener("click", function(){
    paginaProds.src = "./Panel de adminstración/HTMLS/productos.html"
    paginaProds.width = "100%"
    paginaProds.height = "100%"
    paginaProds.frameBorder = "0"

    eliminarVistaExistente()

    padre.appendChild(paginaProds)
    
})

enlaceClientes.addEventListener("click", function(){
    paginaClientes.src = "./Panel de adminstración/HTMLS/clientes.html"
    paginaClientes.width = "100%"
    paginaClientes.height = "100%"
    paginaClientes.frameBorder = "0"

    eliminarVistaExistente()

    padre.appendChild(paginaClientes)
})


function eliminarVistaExistente(){
    const paginaPrevia = document.querySelector("iframe")

    if(paginaPrevia){
        paginaPrevia.remove()
    }
}


//probando:

document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el nombre de usuario de la URL
    var params = new URLSearchParams(window.location.search);
    var nombreUsuario = params.get('nombre');

    // Muestra el nombre de usuario en algún lugar de la página
    if (nombreUsuario) {
        document.getElementById('resultado').innerText = '¡Bienvenido ' + nombreUsuario + '!';
    }
});


