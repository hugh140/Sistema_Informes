import { useParams, NavLink } from "react-router-dom"

function BotonNavegacion({modo, link, texto}) 
{
    const {id} = useParams()
    const className = 'btn btn-outline-info me-3 ' +
        (modo === 1 ? 'float-end' : null)
    let numeroPagina = (Number(id) + modo)

    return (
        <>{
        numeroPagina < 1 ? null : (
        <NavLink to={'/consultar/laura/' + numeroPagina}>
            <button className={className} onClick={' '}>
                    {texto}
            </button>
        </NavLink>
        )}</>
    )
}
export default BotonNavegacion