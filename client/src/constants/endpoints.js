//Endpoints
const dir = 'http://172.19.0.19:3000'
export const redir = 'http://172.19.0.19:4000'

export const ENDPOINT = {
    CONSULTAR : dir +'/consultar/',
    SUBIR: dir + '/subir/',
    DESCARGAR: dir + '/descargar/',
    ADMIN: dir + '/admin',
    LOGIN: dir + '/login',
    CREAR_CARPETA: dir + '/carpeta/',
    ELIMINAR_CARPETA: dir + '/carpeta/eliminar',
    ELIMINAR_INFORME: dir + '/informe/eliminar',
    LOGOUT: dir + '/admin/logout'
}