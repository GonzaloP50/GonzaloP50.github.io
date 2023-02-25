
const ventanaCont = document.getElementById("VentanaContacto");
const ventanaPers = document.getElementById("VentanaPersonal");
const ventanaEst = document.getElementById("VentanaEstudios");
const ventanaTrab = document.getElementById("VentanaTrabajo");
const ventanaRes = document.getElementById("VentanaResumen");
const ventanaOtros = document.getElementById("VentanaOtros");

function cerrarTodo(){
	ventanaCont.setAttribute('style', 'display: none');
	ventanaPers.setAttribute('style', 'display: none');
	ventanaEst.setAttribute('style', 'display: none');
	ventanaTrab.setAttribute('style', 'display: none');
	ventanaRes.setAttribute('style', 'display: none');
	ventanaOtros.setAttribute('style', 'display: none');
}

document.getElementById("celda1").onclick=function(){
	cerrarTodo();
	ventanaCont.setAttribute('style', 'display: block');
}

document.getElementById("CerrarContacto").onclick=function(){
	ventanaCont.setAttribute('style', 'display: none');
}


document.getElementById("celda2").onclick=function(){
	cerrarTodo();
	ventanaPers.setAttribute('style', 'display: block');
}

document.getElementById("CerrarPersonal").onclick=function(){
	ventanaPers.setAttribute('style', 'display: none');
}


document.getElementById("celda3").onclick=function(){
	cerrarTodo();
	ventanaEst.setAttribute('style', 'display: block');
	window.scroll({
		top: 0,
		behavior: 'smooth'
	  });
}

document.getElementById("CerrarEstudios").onclick=function(){
	ventanaEst.setAttribute('style', 'display: none');
}


document.getElementById("celda4").onclick=function(){
	cerrarTodo();
	ventanaTrab.setAttribute('style', 'display: block');
	window.scroll({
		top: 0,
		behavior: 'smooth'
	  });
}

document.getElementById("CerrarTrabajo").onclick=function(){
	ventanaTrab.setAttribute('style', 'display: none');
}

document.getElementById("celda5").onclick=function(){
	cerrarTodo();
	ventanaRes.setAttribute('style', 'display: block');
}

document.getElementById("CerrarResumen").onclick=function(){
	ventanaRes.setAttribute('style', 'display: none');
}

document.getElementById("celda6").onclick=function(){
	cerrarTodo();
	ventanaOtros.setAttribute('style', 'display: block');
}

document.getElementById("CerrarOtros").onclick=function(){
	ventanaOtros.setAttribute('style', 'display: none');
}
