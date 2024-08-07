import {Schema, model} from 'mongoose'

export const esquema = new Schema({
    namePro:{
        type:String
    }
})

export const ProductosFaltanteLL = new model ('ProductosFaltantes', esquema)