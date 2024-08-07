import {ProductosFaltanteLL} from "../models/ProductosFaltantes.model";

const test = ()=>{
    console.log('Se esta llamando a Productos Faltantes')
}

ProductosFaltanteLL.create({
    namePro: "Doritos",
})

export default test;