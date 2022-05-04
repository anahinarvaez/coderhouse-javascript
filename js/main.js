const CLAVE_PEDIDO_STORAGE = "pedido";

// variable donde se guardan los items elegidos por el usuario
let pedido = [];

// para guardar el pedido que se esta armando en el storage del navegador
const guardarPedidoEnStorage = () => {
  localStorage.setItem(CLAVE_PEDIDO_STORAGE, JSON.stringify(pedido));
};

// para recuperar el pedido no enviado del storage del navegador
const recuperarPedidoDelStorage = () => {
  pedido = JSON.parse(localStorage.getItem(CLAVE_PEDIDO_STORAGE)) || [];
};

const stock = [
  {
    id: 1,
    titulo: "Vestido Blanco",
    img: "../img/pexels-olya-kobruseva-4869701.jpg",
    descripcion: "Lorem ipsum dolor si",
    precio: 3500,
  },
  {
    id: 2,
    titulo: "Ropa Informal",
    img: "../img/pexels-ram-dabhi-5774741.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 3,
    titulo: "Vestido Naranja",
    img: "../img/pexels-thirdman-8053687.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 4,
    titulo: "Vestido Negro Playa",
    img: "../img/pexels-alexander-zvir-4941258.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 5,
    titulo: "Saco Cielo",
    img: "../img/pexels-cottonbro-10669649.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 6,
    titulo: "Vestido Floreado",
    img: "../img/pexels-juliano-astc-9396259.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 7,
    titulo: "Mono Corto",
    img: "../img/pexels-mikhail-nilov-7624800.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
    precio: 4500,
  },
  {
    id: 8,
    titulo: "Vestido Rojo",
    img: "../img/pexels-rulo-davila-5315369.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 9,
    titulo: "Vestido Rayas Azul",
    img: "../img/pexels-sharath-kumar-10130971.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 10,
    titulo: "Vestido Negro Corto",
    img: "../img/pexels-rich-ortiz-5661568.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 11,
    titulo: "Jardinero Cuadriculado",
    img: "../img/pexels-josue-ladoo-pelegrin-7446545.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 12,
    titulo: "Vestido Estampado",
    img: "./img/pexels-jennifer-enujiugha-2395921.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 13,
    titulo: "Vestido Blanco Playa",
    img: "../img/pexels-trương-kháng-9747505.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 14,
    titulo: "Saco Fucsia",
    img: "../img/pexels-cottonbro-10669636.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 15,
    titulo: "Saco Coral",
    img: "../img/pexels-rulo-davila-10145728.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4500,
  },
  {
    id: 16,
    titulo: "Pantalon Naranja",
    img: "./img/pexels-rulo-davila-7861082.jpg",
    descripcion: "Lorem ipsum dolor sit",
    precio: 4600,
  },
];

const limpiarPedido = () => {
  pedido = [];
  guardarPedidoEnStorage();
  cerrarCarrito();
};

const confirmarPedido = () => {
  alert("Gracias por utiizar Charly Lovers, su pedido ya fue enviado.");
  limpiarPedido();
};

const agregarAlCarrito = (prendaId) => {
  const prendaSeleccionada = stock.find((producto) => producto.id === prendaId);
  pedido.push(prendaSeleccionada);
  guardarPedidoEnStorage();
};

const renderizarCatalogo = () => {
  let catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = stock
    .map(
      (item) =>
        `<div class="card">
      <img src="${item.img}" alt="" />
      <h4>${item.titulo}</h4>
      <p>$${item.precio}</p>
      <input type="button" value="Agregar al Carrito" onclick="agregarAlCarrito(${item.id})"/>
    </div>`
    )
    .join("");
};

const cerrarCarrito = () => {
  let carrito = document.getElementById("carrito");
  carrito.innerHTML = "";
};

const mostrarCarrito = () => {
  const total = pedido.reduce((acc, producto) => acc + producto.precio, 0);
  let carrito = document.getElementById("carrito");
  carrito.innerHTML = `<div class="modal">
  <div class="modal-container">
      <img class="modal-img" src="img/CHARLY LOVERS.png" >
      <h2 class="title">Detalle de tu orden de compra</h2>
      <p class="paragraph">Total del pedido: $${total}</p>
      ${pedido
        .map(
          (item) =>
            `<div>
        ${item.titulo} $${item.precio}
        </div>`
        )
        .join("")}
      <div class="btns">
          <a href="#" class="open-view" onclick="limpiarPedido()">Vaciar carrito</a>
          <a href="#" class=" ${
            pedido.length > 0 ? "open-guide" : "open-guide-disabled"
          }" onclick="confirmarPedido() ">Comprar</a>
      </div>
      <a href="#" class="close" onclick="cerrarCarrito()">&times;</a>
  </div>
</div> `;
};

///////// Algoritmo cuando el usuario accede a la pagina
renderizarCatalogo();
recuperarPedidoDelStorage();

// evento para refrescar la pagina por si el usuario habia cambiado de tab
document.addEventListener("visibilitychange", function () {
  document.hidden ? console.log("El tab no es visible") : location.reload();
});
