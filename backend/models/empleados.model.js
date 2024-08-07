import {Schema, model} from 'mongoose'

export const esquema = new Schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    }
})

export const EmpleadosLL = new model ('Empleados', esquema)