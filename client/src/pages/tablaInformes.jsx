import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import FilaInformes from "../components/FilaTabla"
import BotonNavegacion from "../components/BotonNavegacion"
import NavBar from "../components/NavBar"

import { ENDPOINT } from "../scripts/endpoints"

const MODO = {
    ADELANTAR: 1,
    RETROCEDER: -1
}

function TablaInformes()
{
    const [infoArchivos, setInfoArchivos] = useState({})
    const [status, setStatus] = useState(0)

    const {ing, id} = useParams()

    //Consumo de api
    useEffect(() => {
        fetch(ENDPOINT.CONSULTAR + `${ing}/${id}`)
        .then(response => {
            setStatus(response.status)
            return response.json()
        })
        .then(data => setInfoArchivos(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="container">
        <NavBar />
        <h1 className="text-center display-3">SAIT</h1>
        <h5>{ing}</h5>
        <BotonNavegacion link={`/consultar/${ing}/`} modo={MODO.RETROCEDER} texto='Atrás' />

        {
        status === 404 
            ? 
        <div className="alert alert-danger my-5" role="alert">
            No existen archivos en esta dirección.
        </div> 
            :
        <>
        <BotonNavegacion link={`/consultar/${ing}/`} modo={MODO.ADELANTAR} texto='Adelante' />
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Archivo</th>
                <th scope="col">Fecha</th>
            </tr>
        </thead>
        <tbody>
            <FilaInformes infoArchivos={infoArchivos} />
        </tbody>
        </table>
        <BotonNavegacion link={`/consultar/${ing}/`} modo={MODO.ADELANTAR} texto='Adelante' />
        </>
        }
        </div>
    )
}
export default TablaInformes