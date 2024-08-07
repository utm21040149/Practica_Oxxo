import {Schema, model} from 'mongoose'

export const esquema = new Schema({
    namePro:{
        type:String
    },
    stock:{
        type:Number
    },
    price:{
        type:Number
    }
})

export const ProductosLL = new model ('Productos Faltantes', esquema)