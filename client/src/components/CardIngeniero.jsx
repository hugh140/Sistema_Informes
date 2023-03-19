import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { ENDPOINT } from "../scripts/endpoints"
import '../styles.css'

function CardIngeniero() 
{
    const [ingenieros, setIngenieros] = useState({})

    useEffect(() => {
        fetch(ENDPOINT.CONSULTAR)
        .then(response => response.json())
        .then(data => setIngenieros(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>{
        Object.values(ingenieros).map((ing, index) => (
            <main key={index} className="col-lg-4">
                <NavLink to={`/consultar/${ing}/1`}>
                    <div className="text-white p-5 me-2 ms-2 mt-2 rounded-top ing-card">
                        <h4>{ing}</h4>
                    </div>
                </NavLink>
                <NavLink to={`/subir/${ing}`}>
                    <div className="text-white py-2 ms-2 me-2 mb-2 h4 rounded-bottom ing-card-subir">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </NavLink>
            </main>
        ))}
        </>
    )
}
export default CardIngeniero