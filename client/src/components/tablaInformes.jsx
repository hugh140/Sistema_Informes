import FilaInformes from "./filaTabla"

function TablaInformes() 
{
    return (
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
    )
}
export default TablaInformes