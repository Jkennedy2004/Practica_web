import { inicializar } from "./database"
import {consultar, insertar, modificar} from "./metodo"

console.log("Hola Mundo")
async function main() {
    await inicializar()
    const usuarioNuevo = await insertar("Jhon", "jg374997@gmial.com")
    console.log(usuarioNuevo)
    const usuario = await consultar()
    console.log(usuario)
    const usuarioI = await consulta1(usuarioNuevo.id)
    console.log(usuarioI)
    const usuariomodificados = await modificar(usuarioNuevo.id, "Kenedy", "Jkg374997@gmail.com")
    console.log(usuariomodificados)
    const usuarioEliminado = await eliminar(usuarioNuevo.id)
    console.log(usuarioEliminado)
    const vistaNueva = await insertarVista("Usuario", usuarioNuevo.id)
    console.log(vistaNueva)
}

main()