import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function FilaInformes() 
{
    const [infoArchivos, setInfoArchivos] = useState({})
    const {ing, id} = useParams()

    //Consumo de api
    useEffect(() => {
        fetch(`http://172.19.0.99:3000/consultar/${ing}/${id}`)
        .then(response => response.json())
        .then(data => setInfoArchivos(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
        {Object.values(infoArchivos).map((infoArchivo, index) => {
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
        )})}
        </>
    )
}
export default FilaInformes