let pedido = "productos";


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

const agregarAlPedido = ( producto, talle, color) => {

  let itemPedido = `producto ${producto} - talle ${talle} - color ${color}.`;

  alert(`${itemPedido} Fue agregado a su pedido`);

  pedido = `${pedido} \n ${itemPedido}`;

}

alert("Bienvenida a Charly Lovers. Haga su pedido");
let producto;
let talle;
let color;


while (true) {
  producto = inputUsuario(
    "¿Qué es lo que esta buscando? Remeras, pantalones, camisas, polleras o escriba ESC para finalizar.",
    ["remeras", "pantalones", "camisas", "polleras", "ESC"],
    "Ingrese un producto valido"
  );

  if (producto == "ESC") {
    break;
  }

  talle = inputUsuario(
    "Indique el talle deseado. Talle s-m-l-xl.",
    ["s", "m", "l", "xl"],
    "Ingrese un talle valido"
  );

  color = inputUsuario(
    "Indique que color le gustaria. Rosa, blanco o negro.",
    ["rosa", "blanco", "negro"],
    "Ingrese un color valido"
  );

  agregarAlPedido (producto, talle, color)
}
alert(pedido);
alert("Gracias por utilizar Charly Lovers");
