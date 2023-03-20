import CardIngeniero from "../components/CardIngeniero"
import NavBar from '../components/NavBar'

function ElegirIng() 
{
    return (
        <main className="container">
        <NavBar />
        <h1 className="text-center display-1">SAIT</h1>
        <div className="container">
            <div className="row text-center">
                <CardIngeniero />
            </div>
        </div>
        </main>
    )
}
export default ElegirIng