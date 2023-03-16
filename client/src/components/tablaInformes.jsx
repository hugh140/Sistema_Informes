import { useEffect, useState } from "react"

function TablaInformes() 
{
    const [DownloadURL, setDownloadURL] = useState('')
    console.log(DownloadURL)

    return (
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Archivo</th>
                <th scope="col">Fecha</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <i className="fa-solid fa-file-word me-3"></i>
                    <a href='http://localhost:3000/descargar/laura/Probabilidad.pdf'>
                        Archivo.pdf
                    </a>
                </td>
                <td>14-02-2023</td>
            </tr>
            
        </tbody>
        </table>
    )
}
export default TablaInformes