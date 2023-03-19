import { ENDPOINT } from "../constants/endpoints"
import { useParams} from "react-router-dom"

function FilaInformes({infoArchivos}) 
{
    const {ing} = useParams()

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
                    <a href={ENDPOINT.DESCARGAR + `${ing}/${infoArchivo.archivo}`}>
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