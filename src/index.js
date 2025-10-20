import * as cartService from "./services/cart.js";
import {createItem} from "./services/item.js";


const myCart = []
const myWhishList = []

console.log("Welcome to your Shopee cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 7)
const item2 = await createItem("hotwheels lamboghini", 39.99, 2)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item1)

await cartService.displayCart(myCart)
//await cartService.deleteItem(myCart, item2.name)
//await cartService.deleteItem(myCart, item1.name)

await cartService.calculateTotal(myCart)

