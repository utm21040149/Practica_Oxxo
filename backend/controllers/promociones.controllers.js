import { PromocionesLL } from "../models/promociones.model";

const test = () =>{
    console.log('Se manda a llamar a Promociones')
}

PromocionesLL.create({
    promocion: 10,
    fecha: "20 Noviembre"
})

export default test;