import TablaInformes from "./pages/tablaInformes"
import detectarCodigoKonami from "./scripts/codigo_konami"
import { BrowserRouter, Route, Routes } from "react-router-dom";

detectarCodigoKonami()

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/consultar/:ing/:id' element={<TablaInformes />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App