let pedido = [];

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

const mostrarPedido = () => {
  const total = pedido.reduce((acc, producto) => acc + producto.precio, 0);
  const encabezado = `Detalle del pedido\nCantidad de productos: ${pedido.length}\nCosto Total $${total}\n`;
  const pedidoTotal =
    encabezado +
    pedido
      .map(
        (item) =>
          `producto ${item.prenda} - talle ${item.talle} - color ${item.color}.\n`
      )
      .join("");

  alert(pedidoTotal);
};

alert("Bienvenida a Charly Lovers. Haga su pedido");
const prendas = [...new Set(stock.map((producto) => producto.prenda))];
while (true) {
  let prenda = inputUsuario(
    `¿Qué es lo que esta buscando? ${prendas} o escriba ESC para finalizar.`,
    [...prendas, "ESC"],
    "Ingrese un producto valido"
  );

  if (prenda == "ESC") {
    break;
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
}
mostrarPedido();
alert("Gracias por utilizar Charly Lovers");
