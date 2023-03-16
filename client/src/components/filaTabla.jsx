import { useEffect, useState } from "react"

function FilaInformes() 
{
    const [infoArchivos, setInfoArchivos] = useState({})

    //Consumo de api
    useEffect(() => {
        fetch('http://localhost:3000/consultar/laura/1')
        .then(response => response.json())
        .then(data => setInfoArchivos(data));
    }, [])

    return (
        <>
        {Object.values(infoArchivos).map((infoArchivo, index) => {
            let icon
            if (infoArchivo.extension === '.pdf') icon = 'pdf'
            else icon = 'word'
            console.log(icon)

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
        )})}
        </>
    )
}
export default FilaInformes