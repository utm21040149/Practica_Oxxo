import { EmpleadosLL} from "../models/empleados.model.js";

const test = ()=>{
    console.log('Se esta llamando a Empleados')
}

EmpleadosLL.create({
    name:"Luis",
    lastName: "Ruelas",
    age: 20
})

export default test;