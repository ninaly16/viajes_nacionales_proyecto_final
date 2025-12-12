const div = document.getElementById("miDiv");

// Usar el valor de data-src como fondo
div.style.backgroundImage = `url('${div.dataset.src}')`;

// Lista de destinos (puedes sustituirla por datos reales)
const destinos = [
    "Salto Ángel",
    "Margarita",
    "Los Roques",
    "Mérida",
    "Canaima",
    "Choroní",
    "Morrocoy",
    "Caracas",
    "La Guaira",
    "Gran Sabana",
    "La Tortuga",
    "Chichiriviche",
    "Roraima"
];

const input = document.getElementById("inputBuscador");
const lista = document.getElementById("listaResultados");

input.addEventListener("input", () => {
    const texto = input.value.toLowerCase();
    lista.innerHTML = "";

    if (texto === "") {
        lista.style.display = "none";
        return;
    }

    const filtrados = destinos.filter(destino =>
        destino.toLowerCase().includes(texto)
    );

    if (filtrados.length === 0) {
        lista.style.display = "none";
        return;
    }

    filtrados.forEach(destino => {
        const li = document.createElement("li");
        li.textContent = destino;

        li.addEventListener("click", () => {
            input.value = destino;
            lista.style.display = "none";
        });

        lista.appendChild(li);
    });

    lista.style.display = "block";
});

let card_destino = [
  {
    "id": 1,
    "imagen": '/medias/imagenes/Producto/LosRoques.PNG',
    "nombre": "Arhipielago de Los Roques",
    "pagina": "Ir a la pagina..."
  },
  {
    "id": 2,
    "imagen": '/medias/imagenes/Producto/Salto Angel3.PNG',
    "nombre": "Salto Angel",
    "pagina": "Ir a la pagina..."
  },
  {
    "id": 3,
    "imagen": '/medias/imagenes/Producto/GRanSabana.PNG',
    "nombre": "Gran Sabana",
    "pagina": "Ir a la pagina..."
  },
  {
    "id": 4,
    "imagen": '/medias/imagenes/Producto/Maracaibo6.PNG',
    "nombre": "Maracaibo",
    "pagina": "Ir a la pagina..."
  },
  {
    "id": 5,
    "imagen": '/medias/imagenes/Producto/Morocoy.PNG',
    "nombre": "Morocoy.PNG",
    "pagina": "Ir a la pagina..."
  },
  {
    "id": 6,
    "imagen": '/medias/imagenes/Producto/Colonia Tovar.PNG',
    "nombre": "Colonia Tovar",
    "pagina": "Ir a la pagina..."
  },      
];

let destinosContainer = document.getElementById('card_destino');

document.addEventListener("DOMContentLoaded", () => {
  card_destino.forEach(destinoC => {
    
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img class="imagen" src="${destinoC.imagen}">
      <div class="nombre">${destinoC.nombre}</div>
      <div class="pagina">${destinoC.pagina}</div>
    `;

    destinosContainer.appendChild(card);
  });
});

// Revisar si el usuario está logueado
let zonaLogin = document.getElementById("zonaLogin");
let usuario = localStorage.getItem("usuarioLogueado");

if (usuario) {
    usuario = JSON.parse(usuario);
    zonaLogin.innerHTML = `
        <p><b> Hola ${usuario.nombre}</b></p>
        <button id="logoutBtn">Cerrar Sesión</button>
    `;
} else {
    zonaLogin.innerHTML = `
        <li><a href="/pages/ingresar.html">Ingresar</a></li>
    `;
}

// Botón cerrar sesión
document.addEventListener("click", function(e) {
    if (e.target.id === "logoutBtn") {
        localStorage.removeItem("usuarioLogueado");
        location.reload();
    }
});

