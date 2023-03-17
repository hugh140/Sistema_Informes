function FilaInformes({infoArchivos}) 
{
    return (
        <>{
        Object.values(infoArchivos).map((infoArchivo, index) => {
            let icon
            if (infoArchivo.extension === '.pdf') icon = 'pdf'
            else icon = 'word'

            return (
            <tr key={index}>
                <td>
                    <i className={`fa-solid fa-file-${icon} me-5 h3`}></i>
                    <a href={'http://localhost:3000/descargar/laura/'+infoArchivo.archivo}>
                        {infoArchivo.archivo}
                    </a>
                </td>
                <td>{infoArchivo.fecha}</td>
            </tr>
        )})
        }</>
    )
}
export default FilaInformes