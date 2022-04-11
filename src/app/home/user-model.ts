import { Billetera } from "../cartera/billetera/billetera.model";

export interface Usuario{
    id : string,
    clave? : string,
    fingerprint? : string,
    nombre : string,
    apellido? : string,
    f_nacimiento? : string,
    num_cel? : number,
    correo? : string,
    billetera? : Billetera
}
