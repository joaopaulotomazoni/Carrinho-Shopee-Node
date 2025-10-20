async function createItem(name, price, quantity, subtotal=0) {
  return{
    name,
    price,
    quantity,
    subtotal,
  }
}

async function calcularSubtotal(item) {
  let subtotal = item.price * item.quantity
  item.subtotal=subtotal;
  return item.subtotal
}

export {createItem, calcularSubtotal};