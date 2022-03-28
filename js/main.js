alert("Bienvenida a Charly Lovers. Haga su pedido");
let producto;
let talle;
let color;
let pedido = "productos";
let itemPedido;

while (true) {
  producto = prompt(
    "¿Qué es lo que esta buscando? Remeras, pantalones, camisas, polleras o escriba ESC para finalizar."
  );

  if (producto == "ESC") {
    break;
  }

  if (
    !(
      producto == "remeras" ||
      producto == "pantalones" ||
      producto == "camisas" ||
      producto == "polleras"
    )
  ) {
    alert("Ingrese un producto valido");
    continue;
  }

  talle = prompt("Indique el talle deseado. Talle s-m-l-xl.");

  if (!(talle == "s" || talle == "m" || talle == "l" || talle == "xl")) {
    alert("Ingrese un talle valido");
    continue;
  }

  color = prompt("Indique que color le gustaria. Rosa, blanco o negro");
  if (!(color == "rosa" || color == "blanco" || color == "negro")) {
    alert("Ingrese un color valido");
    continue;
  }

  itemPedido = `producto ${producto} - talle ${talle} - color ${color}.`;

alert(`${
  itemPedido
} Fue agregado a su pedido`)

  pedido = `${pedido} \n ${itemPedido}`
  
}
alert (pedido)
alert("Gracias por utilizar Charly Lovers");
