const clavePedidoStorage = "pedido";

// variable donde se guardan los items elegidos por el usuario
let pedido = [];

// para guardar el pedido que se esta armando en el storage del navegador 
const guardarPedidoEnStorage = () => {
  localStorage.setItem(clavePedidoStorage, JSON.stringify(pedido));
}


// para recuperar el pedido no enviado del storage del navegador
const recuperarPedidoDelStorage = () => {
  
  const pedidoEnStorage = localStorage.getItem(clavePedidoStorage);

  if(pedidoEnStorage){
    pedido = JSON.parse(pedidoEnStorage);
  }else{
    pedido = []
  }
}


const stock = [
  {
    id: 1,
    prenda: "Vestido",
    talle: "l",
    color: "negro",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 2,
    prenda: "Vestido",
    talle: "xl",
    color: "negro",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 3,
    prenda: "Vestido",
    talle: "xxl",
    color: "negro",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 4,
    prenda: "Vestido",
    talle: "l",
    color: "blanco",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 5,
    prenda: "Vestido",
    talle: "xl",
    color: "blanco",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 6,
    prenda: "Vestido",
    talle: "xxl",
    color: "blanco",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 7,
    prenda: "Vestido",
    talle: "l",
    color: "rosa",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 8,
    prenda: "Vestido",
    talle: "xl",
    color: "rosa",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 9,
    prenda: "Vestido",
    talle: "xxl",
    color: "rosa",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 10,
    prenda: "Remeron",
    talle: "l",
    color: "negro",
    precio: 5900,
    cantidad: 20,
  },
  {
    id: 11,
    prenda: "Remeron",
    talle: "xl",
    color: "negro",
    precio: 5900,
    cantidad: 20,
  },
  {
    id: 12,
    prenda: "Remeron",
    talle: "xxl",
    color: "negro",
    precio: 5900,
    cantidad: 20,
  },
  {
    id: 13,
    prenda: "Remeron",
    talle: "l",
    color: "blanco",
    precio: 5900,
    cantidad: 20,
  },
  {
    id: 14,
    prenda: "Remeron",
    talle: "xl",
    color: "blanco",
    precio: 5900,
    cantidad: 20,
  },
  {
    id: 15,
    prenda: "Remeron",
    talle: "xxl",
    color: "blanco",
    precio: 5900,
    cantidad: 20,
  },
  {
    id: 16,
    prenda: "Buzos",
    talle: "l",
    color: "negro",
    precio: 5900,
    cantidad: 20,
  },
  {
    id: 17,
    prenda: "Buzos",
    talle: "xl",
    color: "negro",
    precio: 5900,
    cantidad: 20,
  },
  {
    id: 18,
    prenda: "Buzos",
    talle: "xxl",
    color: "negro",
    precio: 5900,
    cantidad: 20,
  },
  {
    id: 19,
    prenda: "Buzos",
    talle: "l",
    color: "blanco",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 20,
    prenda: "Buzos",
    talle: "xl",
    color: "blanco",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 21,
    prenda: "Buzos",
    talle: "xxl",
    color: "blanco",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 22,
    prenda: "Buzos",
    talle: "l",
    color: "rosa",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 23,
    prenda: "Buzos",
    talle: "xl",
    color: "rosa",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 24,
    prenda: "Buzos",
    talle: "xxl",
    color: "rosa",
    precio: 7500,
    cantidad: 20,
  },
  {
    id: 25,
    prenda: "Camisas",
    talle: "l",
    color: "rosa",
    precio: 8300,
    cantidad: 20,
  },
  {
    id: 26,
    prenda: "Camisas",
    talle: "xl",
    color: "rosa",
    precio: 8300,
    cantidad: 20,
  },
  {
    id: 27,
    prenda: "Camisas",
    talle: "xxl",
    color: "rosa",
    precio: 8300,
    cantidad: 20,
  },
  {
    id: 28,
    prenda: "Camisas",
    talle: "l",
    color: "negro",
    precio: 8300,
    cantidad: 20,
  },
  {
    id: 29,
    prenda: "Camisas",
    talle: "xl",
    color: "negro",
    precio: 8300,
    cantidad: 20,
  },
  {
    id: 30,
    prenda: "Camisas",
    talle: "xxl",
    color: "negro",
    precio: 8300,
    cantidad: 20,
  },
  {
    id: 31,
    prenda: "Camisas",
    talle: "l",
    color: "blanco",
    precio: 8300,
    cantidad: 20,
  },
  {
    id: 32,
    prenda: "Camisas",
    talle: "xl",
    color: "blanco",
    precio: 8300,
    cantidad: 20,
  },
  {
    id: 33,
    prenda: "Camisas",
    talle: "xxl",
    color: "blanco",
    precio: 8300,
    cantidad: 20,
  },
  {
    id: 34,
    prenda: "Polleras",
    talle: "l",
    color: "rosa",
    precio: 4700,
    cantidad: 20,
  },
  {
    id: 35,
    prenda: "Polleras",
    talle: "xl",
    color: "rosa",
    precio: 4700,
    cantidad: 20,
  },
  {
    id: 36,
    prenda: "Polleras",
    talle: "xxl",
    color: "rosa",
    precio: 4700,
    cantidad: 20,
  },
];

const alMenosUno = (filtros, valor) => {
  for (filtro of filtros) {
    if (valor == filtro) {
      return true;
    }
  }
  return false;
};

const inputUsuario = (mensaje, filtros, error) => {
  let input = prompt(mensaje);

  while (!alMenosUno(filtros, input)) {
    alert(error);
    input = prompt(mensaje);
  }

  return input;
};

const agregarAlPedido = (prenda, talle, color) => {
  const itemPedido = stock.find(
    (producto) =>
      producto.prenda == prenda &&
      producto.talle == talle &&
      producto.color == color
  );

  pedido.push(itemPedido);
};

const actualizarHtmlDelPedido = () => {
  let container = document.getElementById("pedido");

  const total = pedido.reduce((acc, producto) => acc + producto.precio, 0);

  let costoTotal = document.getElementById("costoTotal");
  let cantidad = document.getElementById("cantidad");
  costoTotal.innerText = total;

  cantidad.innerText = pedido.length;

  container.innerHTML = pedido
    .map(
      (item) =>
        `<li>producto ${item.prenda} - talle ${item.talle} - color ${item.color}.\n</li>`
    )
    .join("");

  guardarPedidoEnStorage();
};

const nuevoItem = () => {
  const prendas = [...new Set(stock.map((producto) => producto.prenda))];
  let prenda = inputUsuario(
    `¿Qué es lo que esta buscando? ${prendas} o escriba ESC para finalizar.`,
    [...prendas, "ESC"],
    "Ingrese un producto valido"
  );

  //POR EL MOMENTO PARA QUE EL USUARIO CANCELE EL INGRESO DE UN PRODUCTO, TIENE QUE ESCRIBIR ESC, ESTO SERÁ MODIFICADO EN LA ENTREGA FINAL.
  if (prenda == "ESC") {
    return;
  }

  let talles = [
    ...new Set(
      stock
        .filter((producto) => producto.prenda == prenda)
        .map((producto) => producto.talle)
    ),
  ];
  talle = inputUsuario(
    `Indique el talle deseado. Talle ${talles}`,
    talles,
    "Ingrese un talle valido"
  );

  let colores = [
    ...new Set(
      stock
        .filter(
          (producto) => producto.prenda == prenda && producto.talle == talle
        )
        .map((producto) => producto.color)
    ),
  ];

  color = inputUsuario(
    `Indique que color le gustaria. ${colores}.`,
    colores,
    "Ingrese un color valido"
  );

  agregarAlPedido(prenda, talle, color);
  actualizarHtmlDelPedido();
};

const limpiarPedido = () => {
  pedido = [];
  actualizarHtmlDelPedido();
  guardarPedidoEnStorage();
};

const confirmarPedido = () => { 
  //SI EL CARRITO NO TIENE NINGUN PRODUCTO EL USUARIO NO PUEDE CONFIRMAR EL PEDIDO.
  if (pedido.length <= 0) {
    alert("Por favor ingrese un producto al carrito.");
    return;
  }
  alert("Gracias por utiizar Charly Lovers, su pedido ya fue enviado.");
  limpiarPedido();
};


///////// Algoritmo cuando el usuario accede a la pagina

recuperarPedidoDelStorage();
actualizarHtmlDelPedido();

//DEFINO MIS EVENTOS
//CUANDO EL USUARIO CLICKEA LOS BOTONES SE EJECUTAN LAS OPERACIONES.
let nuevoItemBtn = document.getElementById("nuevoItem");
nuevoItemBtn.onclick = nuevoItem;
let confirmarBtn = document.getElementById("confirmar");
confirmarBtn.onclick = confirmarPedido;
let cancelarBtn = document.getElementById("cancelar");
cancelarBtn.onclick = limpiarPedido;

// evento para refrescar la pagina por si el usuario habia cambiado de tab 
document.addEventListener("visibilitychange", function() {
  if (document.hidden){
      console.log("El tab no es visible")
  } else {
      location.reload(); // refresa la pagina
  }}
)
