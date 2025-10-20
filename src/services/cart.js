import { calcularSubtotal } from "./item.js"
async function addItem (userCart, item) {
  userCart.push(item)
}

async function deleteItem (userCart, name) {
  const index = userCart.findIndex(item => item.name === name)//retorna index quando o item.name for igual ao passado pelo usuario
  if(index!== -1){
    userCart.splice(index, 1)//deleta item
  }
}

async function removeItem (userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name)

  if(userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity-=1
    calcularSubtotal(userCart[indexFound])

  }else{
    userCart.splice(indexFound, 1)
  }
}

async function calculateTotal (userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal, 0);
  console.log(`\nShopee cart total: R$ ${result.toFixed(2)}`);
}

async function displayCart(userCart) {
  
  
  console.log("\nYour cart list: ")
  userCart.forEach((item, index) => {//percorre a lista e exibe cada item
    calcularSubtotal(item)
    console.log(`${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | Subtotal: R$ ${item.subtotal.toFixed(2)}`)
  })
  
}

export{
  addItem,
  deleteItem,
  removeItem,
  calculateTotal,
  displayCart
}