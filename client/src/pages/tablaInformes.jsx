import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import FilaInformes from "../components/FilaTabla"
import BotonNavegacion from "../components/BotonNavegacion"

function TablaInformes()
{
    const [infoArchivos, setInfoArchivos] = useState({})
    const [status, setStatus] = useState(0)

    const {ing, id} = useParams()

    //Consumo de api
    useEffect(() => {
        fetch(`http://localhost:3000/consultar/${ing}/${id}`)
        .then(response => {
            setStatus(response.status)
            return response.json()
        })
        .then(data => setInfoArchivos(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
        <h1 className="text-center display-1">SAIT</h1>
        <BotonNavegacion link='/consultar/laura/' modo={-1} texto='Atrás' />

        {
        status === 404 
            ? 
        <div class="alert alert-danger my-5" role="alert">
            No existen archivos en esta dirección.
        </div> 
            :
        <>
        <BotonNavegacion link='/consultar/laura/' modo={1} texto='Adelante' />
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
        <BotonNavegacion link='/consultar/laura/' modo={1} texto='Adelante' />
        </>
        }
        </>
    )
}
export default TablaInformes