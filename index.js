var content = warning.childNodes[0];

const comprobar = () => {
	verificarCorreo() && verificarContraseña() ? darBienvenida() : alertar();
};

const verificarContraseña = () => {
	const contraseña1 = document.getElementById("contraseña1").value;
	const contraseña2 = document.getElementById("contraseña2").value;

	if (contraseña1 != "" && contraseña2 != "") {
		if (contraseña1 != contraseña2) {
			alert("las contraseñas deben ser iguales");
			return false;
		} else {
			return true;
		}
	}
};

const verificarCorreo = () => {
	const correo = document.getElementById("correo").value;

	let numArrobas = 0;
	const com = correo.substr(-4);

	for (let i = 1; i < correo.length; i++) {
		if (correo[i] == "@") {
			numArrobas += 1;
		}
	}
	if (numArrobas != 1) {
		alert("El correo debe contener 1 arroba");
	}

	if (com != ".com") {
		alert("El correo debe terminnar en '.com'");
	}

	return numArrobas == 1 && com == ".com";
};

const darBienvenida = () => {
	alert(`Bienvenido nuevo usuario`);

	if (warning.style.backgroundColor == "#dc3545") {
		warning.style.backgroundColor = "white";
	}
};

const alertar = () => {
	const warning = document.getElementById("warning");

	warning.style.backgroundColor = "#dc3545";
};
