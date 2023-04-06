document.querySelector('img').onclick = function(){
    alert('Oye! Deja de tocarme!')
}

let miImage = document.querySelector('img');
miImage.onmouseover = function(){
    let miSrc = miImage.getAttribute('src');
    if (miSrc==='images/erizo-pigmeo.jpg'){
        miImage.setAttribute('src', 'images/erizo-pigmeo-happy.jpg');
    } else {
        miImage.setAttribute('src', 'images/erizo-pigmeo.jpg')
    }
}

miImage.onmouseout = function(){
    let miSrc = miImage.getAttribute('src');
    if (miSrc==='images/erizo-pigmeo-happy.jpg'){
        miImage.setAttribute('src', 'images/erizo-pigmeo.jpg');
    } else {
        miImage.setAttribute('src', 'images/erizo-pigmeo-happy.jpg')
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, dale un nombre.');
    if (!miNombre){
        estableceNombreUsuario()
    } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Se llamará, ' + miNombre;
    }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
   } else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Su nombre es ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
   