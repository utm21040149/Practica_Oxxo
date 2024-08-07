import {ProductosLL} from "../models/productos.model.js";

const test = ()=>{
    console.log('Se esta llamando a Productos')
}

ProductosLL.create({
    namePro: "Gancito",
    stock: 10,
    price: 20
})

export default test;