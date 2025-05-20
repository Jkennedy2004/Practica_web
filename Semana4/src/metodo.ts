import { Usuario }  from "./modelos/usuario"
import { appdatasource } from "./sqlite"

const insertar = async (id: number, nombre: string, correo: string)=>{

    const usuarioNuevo= new Usuario()
    usuarioNuevo.nombre = nombre
    usuarioNuevo. correo = correo

    return await appdatasource.manager.save(usuarioNuevo)
}

const consultar = async ()=>{
    return await appdatasource.manager.find(Usuario)
}
const consulta1 = async(id:number)=>{
    return await appdatasource.manager.findOne(Usuario, {where:{id}})
}

const modificar = async (id:number, nombre: string, correo: string)=>{

    const usuarioEncontrado= await consulta1(id)
    if (usuarioEncontrado){
    usuarioEncontrado.nombre = nombre
    usuarioEncontrado.correo = correo
    }
    
    return await appdatasource.manager.save(usuarioEncontrado)

}

const eliminar = async (id: number)=>{
    const usuarioEncontrado = await consulta1(id)
    if(usuarioEncontrado){
        return await appdatasource.manager.remove(usuarioEncontrado)
    }
    return null
}

const insertarVista = async (id:number, nombre: string, correo: string)=>{

    const vistaNueva= await consulta1(id)
    if (vistaNueva){
    vistaNueva.nombre = nombre
    vistaNueva.correo = correo
    }
    
    return await appdatasource.manager.save(vistaNueva)

}

export{
    insertar, consulta1, consultar, modificar, eliminar
}
   
