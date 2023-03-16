import FilaInformes from "../components/filaTabla"

function TablaInformes() 
{
    return (
        <>
        <h1>Sistema de almacenamiento de Informes Técnicos</h1>
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
        </>
    )
}
export default TablaInformes