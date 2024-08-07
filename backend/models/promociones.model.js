import {Schema, model} from 'mongoose'

export const esquema = new Schema({
    promocion:{
        type:String
    },
    fecha:{
        type:String
    }
})

export const ProductosFaltanteLL = new model ('Promociones', esquema)