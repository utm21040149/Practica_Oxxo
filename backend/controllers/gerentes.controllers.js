import {GerenteLL} from "../models/gerentes.model.js";

const test = ()=>{
    console.log("Se esta llamando a Gerentes")
}

GerenteLL.create({
    name:"Suil",
    lastName: "Saleur",
    age: 40
})

export default test;