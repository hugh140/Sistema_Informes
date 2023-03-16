import { useParams, NavLink } from "react-router-dom"

function BotonNavegacion({modo, link, texto}) 
{
    const {id} = useParams()
    const destLink = link + (Number(id) + modo)

    return (
        <NavLink to={'/consultar/laura/' + (Number(id) + modo)}>
            <button className='btn btn-outline-info me-3' onClick={' '}>
                    {texto}
            </button>
        </NavLink>
    )
}
export default BotonNavegacion