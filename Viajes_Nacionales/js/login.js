document.getElementById("formLogin").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let error = document.getElementById("loginError");

    // Validaciones
    if (email === "") {
        error.textContent = "Ingrese su email";
        return;
    }
    if (password === "") {
        error.textContent = "Ingrese su contraseña";
        return;
    }

    // Usuario registrado ficticio (puedes reemplazarlo)
    let usuarioEjemplo = {
        email: "usuario@correo.com",
        password: "1234",
        nombre: "Gerardo"
    };

    // Validar credenciales
    if (email !== usuarioEjemplo.email || password !== usuarioEjemplo.password) {
        error.textContent = "Email o contraseña incorrectos";
        return;
    }

    // Guardar sesión en localStorage
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEjemplo));

    // Redirigir a la página principal
    window.location.href = "./index.html";
    window.location.href = "./paquetes.html";
});
