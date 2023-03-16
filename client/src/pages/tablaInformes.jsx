import FilaInformes from "../components/FilaTabla"
import BotonNavegacion from "../components/BotonNavegacion"

function TablaInformes() 
{
    return (
        <>
        <h1 className="text-center">Sistema de almacenamiento de Informes Técnicos</h1>

        <BotonNavegacion link='/consultar/laura/' modo={-1} texto='Atrás' />
        <BotonNavegacion link='/consultar/laura/' modo={1} texto='Adelante' />

        <table className="table">
        <thead>
            <tr>
                <th scope="col">Archivo</th>
                <th scope="col">Fecha</th>
            </tr>
        </thead>
        <tbody>
            <FilaInformes />
        </tbody>
        </table>

        <BotonNavegacion link='/consultar/laura/' modo={-1} texto='Atrás' />
        <BotonNavegacion link='/consultar/laura/' modo={1} texto='Adelante' />
        </>
    )
}
export default TablaInformes