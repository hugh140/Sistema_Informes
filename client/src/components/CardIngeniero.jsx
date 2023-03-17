import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

function CardIngeniero() 
{
    const [ingenieros, setIngenieros] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/consultar`)
        .then(response => response.json())
        .then(data => setIngenieros(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>{
        Object.values(ingenieros).map((ing, index) => (
            <div key={index} className="col-lg-4">
                <NavLink to={`/consultar/${ing}/1`}>
                    <div className="text-white p-5 m-2 h4 rounded ing-card">
                        {ing}
                    </div>
                </NavLink>
            </div>
        ))}
        </>
    )
}
export default CardIngeniero