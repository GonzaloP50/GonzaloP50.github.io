document.getElementById("celda1").onclick=function(){
	document.getElementById("VentanaTel").style.display="block";
	document.getElementById("VentanaTel").style.backgroundColor="yellow";
}

document.getElementById("CerrarTel").onclick=function(){
	document.getElementById("VentanaTel").style.display="none";
}

document.getElementById("celda2").onclick=function(){
	document.getElementById("VentanaMail").style.display="block";
	document.getElementById("VentanaMail").style.backgroundColor="yellow";
}

document.getElementById("CerrarMail").onclick=function(){
	document.getElementById("VentanaMail").style.display="none";
}

document.getElementById("celda3").onclick=function(){
	document.getElementById("VentanaEstudios").style.display="block";
}

document.getElementById("CerrarEstudios").onclick=function(){
	document.getElementById("VentanaEstudios").style.display="none";
}