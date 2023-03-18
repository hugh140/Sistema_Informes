import { useState } from "react"
import { ENDPOINT } from "../scripts/endpoints"
import '../styles.css'

function SubirInformes() 
{
    const [files, setFiles] = useState()
    const [alertas, setAlerta] = useState([])
    console.log(alertas)

    function submit(e) {
        e.preventDefault()
        
        const data = new FormData()
        
        for (let i = 0; i < files.length; i++)
            data.append('informe',files[i])

        fetch(ENDPOINT.SUBIR, {
            method: 'POST',
            body: data,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(data => setAlerta(data))
        .catch(error => console.log(error))
    }

    return (
        <>
        <form onSubmit={submit}>
            <input type="file" onChange={e => setFiles(e.target.files)} multiple='multiple' />
            <input type="submit" value="Subir" />
        </form>
        
        {Object.values(alertas).map((alerta, index) => (
            <p 
                key={index} 
                className={`alerta-${alerta.estado}`
            }>
                {alerta.mensaje}
            </p>
        ))}
        </> 
    )
}
export default SubirInformes