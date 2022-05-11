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

let stock = [] ;

const limpiarPedido = () => {
  pedido = [];
  guardarPedidoEnStorage();
  cerrarCarrito();
};

const vaciarCarrito = () => {
  Swal.fire({
    title: '¿Esta seguro de que quiere borrar el pedido?',
    text: "Los items seleccionados serán eliminados",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Si, vaciar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      limpiarPedido();
      Swal.fire(
        '¡Eliminado!',
        'Su pedido ha sido borrado.',
        'success'
      )
    }
  })

};

const confirmarPedido = () => {
  Swal.fire(
    'Compra exitosa.',
    'Gracias por utiizar Charly Lovers, su pedido ya fue enviado.',
    'success'
  )
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
          <a href="#" class="open-view" onclick="vaciarCarrito()">Vaciar carrito</a>
          <a href="#" class=" ${
            pedido.length > 0 ? "open-guide" : "open-guide-disabled"
          }" onclick="confirmarPedido() ">Comprar</a>
      </div>
      <a href="#" class="close" onclick="cerrarCarrito()">&times;</a>
  </div>
</div> `;
};


const init = () => {
  fetch("./js/data.json")
  .then((response) => response.json())
  .then((json) => {
    stock = json

    setTimeout(()=>{
      renderizarCatalogo();
      recuperarPedidoDelStorage();
    },3000)

  });
}
///////// Algoritmo cuando el usuario accede a la pagina


init()



// evento para refrescar la pagina por si el usuario habia cambiado de tab
document.addEventListener("visibilitychange", function () {
  document.hidden ? console.log("El tab no es visible") : location.reload();
});
