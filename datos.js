function Datos() {
    fetch('datos.json')
    .then(function(res){
        return res.json();

    })
   
    let formAgregar= ()=>{
        let formDiv= document.getElementById('Form');
        let btnGuardar=document.getElementById('btnGuardar');
        btnGuardar.onclick=agregar;
        formDiv.style.display="block";
    }
}
