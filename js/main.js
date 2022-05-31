//Clave utilizada para recuperar y persistir el pedido del localStorage
const CLAVE_PEDIDO_STORAGE = "pedido";

//Palabras claves utilizadas para cargar los items del catalago
const TODO = "todo";
const CATEGORIA_VESTIDOS = "vestidos";
const CATEGORIA_SACOS = "sacos";
const CATEGORIA_EXTRAS = "extras";

//Identificador del objeto spinner en el DOM
const SPINNER = "spinner";

//Mensajes mostrados al usuario en caso de un error o si realiza una busqueda la cual no trae resultados
const MENSAJE_NO_PRENDAS =
  "Para la búsqueda realizada no se encontraron prendas, por favor intente de nuevo con otra búsqueda o seleccione una de las categorías disponibles";
const MENSAJE_ERROR_CATALOGO =
  "Ocurrió un error inesperado. Por favor intente refrescar la página.";

// variable donde se guardan los items elegidos por el usuario en memoria
let pedido = [];

// para guardar el pedido que se esta armando en el storage del navegador
const guardarPedidoEnStorage = () => {
  localStorage.setItem(CLAVE_PEDIDO_STORAGE, JSON.stringify(pedido));
};

// para recuperar el pedido no enviado del storage del navegador
const recuperarPedidoDelStorage = () => {
  pedido = JSON.parse(localStorage.getItem(CLAVE_PEDIDO_STORAGE)) || [];
};

//Variable para cargar el catalogo en memoria
let stock = [];

//Funcion usada para vaciar el carrito. Setea el pedido como un array vacio y persiste dicho cambia en el localStorage
const limpiarPedido = () => {
  pedido = [];
  guardarPedidoEnStorage();
  cerrarCarrito();
};

//Funcion usada cuando el usuario hace click en el boton "vaciar carrito"
///Antes de que se lleve a cabo dicha operacion se le muestra al usuario en el cual debe dar su consentimiento.
const vaciarCarrito = () => {
  Swal.fire({
    title: "¿Esta seguro de que quiere borrar el pedido?",
    text: "Los items seleccionados serán eliminados",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "green",
    cancelButtonColor: "red",
    confirmButtonText: "¡Si, vaciar!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      limpiarPedido();
      Swal.fire("¡Eliminado!", "Su pedido ha sido borrado.", "success");
    }
  });
};

//Esta funcion es usada cuando el usuario confirma su pedido
///Como resultado se limpia el pedido despues de mostrarle una notificacion al usuario
const confirmarPedido = () => {
  Swal.fire(
    "Compra exitosa.",
    "Gracias por utiizar Charly Lovers, su pedido ya fue enviado.",
    "success"
  );
  limpiarPedido();
};

//Funcion que agrega una prenda elegida por el usuario a la variable pedido
const agregarAlCarrito = (prendaId) => {
  const prendaSeleccionada = stock.find((producto) => producto.id === prendaId);
  pedido.push(prendaSeleccionada);
  guardarPedidoEnStorage();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Producto agregado al carrito",
    showConfirmButton: false,
    timer: 1500,
  });
};

//Esta funcion renderiza los elementos de la variable stock como elementos del DOM
const renderizarCatalogo = () => {
  window.scrollTo(0, 0);

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

//Para ocultar el carrito
const cerrarCarrito = () => {
  let carrito = document.getElementById("carrito");
  carrito.innerHTML = "";
};

//Para mostrar el carrito al usuario
///Este metodo renderiza cada elemento de la variable pedido como un elemento HTML de una venta modal.
const mostrarCarrito = () => {
  const total = pedido.reduce((acc, producto) => acc + producto.precio, 0);
  let carrito = document.getElementById("carrito");
  carrito.innerHTML = `<div class="modal">
  <div class="modal-container">
      <img class="modal-img" src="img/CHARLY LOVERS.png" >
      <h2 class="title">Detalle de tu orden de compra</h2>
      <p class="paragraph">Total del pedido: $${total}</p>
      <div class="modal-container-productos"> 
      ${pedido
        .map(
          (item, index) =>
            `<div class="producto-catalogo">
        
        <div> ${item.titulo} - $${item.precio}</div>
        <div><input class="btn-remover" type="button" value="X" onclick="removerItemDelCarrito(${index})"/></div>
            
        </div>`
        )
        .join("")}

      </div>

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

//Funcion utilizada cuando el usuario hace click en el boton para eliminar el item del carrito
///Un modal de confirmacion es mostrado al usuario antes de llegar dicha operacion a cabo
////En caso de que el carrito ya no contenga elementos una vez llevada a cabo la operacion, el mismo será cerrado. Caso contrario se invocara al metodo mostrarCarrito para volver a renderizar todos los elementos del pedido.
const removerItemDelCarrito = (carritoPosition) => {
  const prenda = pedido[carritoPosition];

  Swal.fire({
    text: `¿Esta seguro de que quiere borrar la prenda "${prenda.titulo}" del carrito?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "green",
    cancelButtonColor: "red",
    confirmButtonText: "¡Si, eliminar!",
    cancelButtonText: "¡Me arrepenti!",
  }).then((result) => {
    if (result.isConfirmed) {
      pedido.splice(carritoPosition, 1);
      guardarPedidoEnStorage();

      if (pedido.length > 0) {
        mostrarCarrito();
      } else {
        cerrarCarrito();
      }

      Swal.fire(`"${prenda.titulo}" removido del carrito!`, "success");
    }
  });
};

////////// mostrar spinner
/////// se llama cuando se tiene que hacer una llamada asincronica
const mostrarSpinner = () => {
  let carrito = document.getElementById("catalogo");
  carrito.innerHTML = `<div class="lds-heart" id="${SPINNER}"><div></div></div>`;
};

////////// ocultar spinner
const ocultarSpinner = () => {
  document.getElementById(SPINNER).remove();
};

// Para mostrar un mensaje por pantalla al usuario
///NOTA: actualmente solo es utilizado cuando ocurre un error durante la busqueda de un producto la cual genera un error o bien cuando la busqueda no trae resultados
const mostrarMensaje = (mensaje, isError) => {
  Swal.fire({
    icon: isError ? "error" : "warning",
    title: "Oops...",
    text: mensaje,
    showConfirmButton: !isError,
  });
};

/////// llamada al servidor para traer ropa fitrada por categoria
const traerRopa = (categoria) => {
  mostrarSpinner();

  fetch(`./js/db/${categoria ? categoria : TODO}.json`)
    .then((response) => response.json())
    .then((json) => {
      stock = json;
      setTimeout(() => {
        renderizarCatalogo();
      }, 3000);
    })
    .catch((error) => manejoDeError(error));
};

//llamada al servidor para traer las prendas filtradas
/// Nota: la logica de filtrado deberia realizarse en el backend, pero para la entrega se decidio representar esa logica con este metodo.
////Nota2: Se decidio incluir agregar una operacion ramdom la cual genera una excepcion en la invocacion del metodo para mostrar como se aplica un manejo de error.
const filtrarPrendas = () => {
  let buscador = document.getElementById("search-box");
  const filtro = buscador.value;

  if (!filtro || filtro == "") {
    console.log("No se realiza la búsqueda ya que el buscador está vacío.");
    return;
  }

  buscador.value = "";
  mostrarSpinner();

  fetch(`./js/db/todo.json`)
    .then((response) => response.json())
    .then((prendas) => {
      stock = prendas.filter((prenda) => stringEquals(prenda.titulo, filtro));

      ///Simula un error de servidor
      if (Math.random() > 0.799) {
        throw new Error(`Error random`);
      }

      setTimeout(() => {
        if (stock.length > 0) {
          renderizarCatalogo();
        } else {
          mostrarMensaje(MENSAJE_NO_PRENDAS, false);
          ocultarSpinner();
        }
      }, 1500);
    })
    .catch((error) => manejoDeError(error));
};

//Funcion ultizada para el manejo de errores que puedan ocurrir durante la invocacion de algun metodo
const manejoDeError = (error) => {
  console.error(error);
  mostrarMensaje(MENSAJE_ERROR_CATALOGO, true);
  ocultarSpinner();
};

// compara que dos string sean iguales aunque:
// esten escritos de difrente manera con minuscula o mayuscula
// tengan espacios en blanco
const stringEquals = (string1, string2) => {
  return string1
    .replace(/ /g, "")
    .toLowerCase()
    .includes(string2.replace(/ /g, "").toLowerCase());
};

///// trae todas las prendas del catalago
const traerTodos = () => {
  traerRopa();
};

///// trae los vestidos del catalogo
const filtrarPorVestidos = () => {
  traerRopa(CATEGORIA_VESTIDOS);
};

///// trae los sacos del catalogo
const filtrarPorSacos = () => {
  traerRopa(CATEGORIA_SACOS);
};

///// trae los extras del catalogo
const filtrarPorExtras = () => {
  traerRopa(CATEGORIA_EXTRAS);
};

//// evento enter para disparar busqueda de prenda
const buscador = document.getElementById("search-box");

///Evento cuando se esta escribiendo en el buscador y se presiona la tecla enter se ejecuta el metodo para llevar a cabo la busqueda
buscador.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    filtrarPrendas();
  }
});

// evento para refrescar la pagina por si el usuario habia cambiado de tab
document.addEventListener("visibilitychange", function () {
  document.hidden ? console.log("El tab no es visible") : location.reload();
});

///////// Algoritmo BEGIN
traerTodos();
recuperarPedidoDelStorage();
///////// Algoritmo END
