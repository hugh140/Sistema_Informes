import TablaInformes from "./pages/tablaInformes"
import detectarCodigoKonami from "./scripts/codigo_konami"
import { BrowserRouter } from "react-router-dom";

detectarCodigoKonami()

function App() 
{
  return (
    <BrowserRouter>
      <TablaInformes />
    </BrowserRouter>
  )
}
export default App