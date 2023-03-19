function subirInforme(e, files, selectIng) {
    const data = new FormData()
    
    for (let i = 0; i < files.length; i++)
        data.append('informe',files[i])
    return data
}
export default subirInforme