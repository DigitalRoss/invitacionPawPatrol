// IMAGENES --------------------------------------------------------------------------
let posicion_imagen = 0;
let imagenes = [
	{ name: "1.png", width: "320px", top: "-25px", left: "0px" },
	{ name: "4.png", width: "300px", top: "-25px", left: "10px" },
	{ name: "3.png", width: "160px", top: "-4px", left: "65px" },
	{ name: "2.png", width: "330px", top: "-65px", left: "-30px" },
];
const elemento_img = document.getElementById("imagenes");
function cambiarImagenes() {
	elemento_img.hidden = true;
	elemento_img.style.top = imagenes[posicion_imagen].top;
	elemento_img.style.left = imagenes[posicion_imagen].left;
	elemento_img.style.width = imagenes[posicion_imagen].width;
	elemento_img.src = "./img/" + imagenes[posicion_imagen].name;

	setTimeout(() => {
		elemento_img.hidden = false;
	}, 50);
	posicion_imagen < imagenes.length - 1 ? posicion_imagen++ : (posicion_imagen = 0);
}

// FOTOS --------------------------------------------------------------------------
let posicion_foto = 0;
const fotos = ["foto1.jpg"];
const elemento_foto = document.getElementById("foto");
function cambiarFoto() {
	// elemento_foto.hidden = true;
	elemento_foto.src = "./img/" + fotos[posicion_foto];

	setTimeout(() => {
		// elemento_img.hidden = false;
	}, 50);
	posicion_foto < fotos.length - 1 ? posicion_foto++ : (posicion_foto = 0);
}

cambiarImagenes();
cambiarFoto();

function remove_loader() {
	let loader = document.getElementById("loader");
	// remove loader element
	loader.parentNode.removeChild(loader);
	audio.play();
}

window.onload = () => {
	if (imagenes.length > 1) setInterval(cambiarImagenes, 6000);
	if (fotos.length > 1) setInterval(cambiarFoto, 2000);
};
