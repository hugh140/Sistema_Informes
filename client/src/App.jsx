import TablaInformes from "./pages/TablaInformes"
import ElegirIng from "./pages/ElegirIng";
import detectarCodigoKonami from "./scripts/codigo_konami"
import { BrowserRouter, Route, Routes } from "react-router-dom";

detectarCodigoKonami()

function App() 
{
  return (
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path='/consultar/:ing/:id' element={<TablaInformes />} />
        <Route path='/consultar' element={<ElegirIng />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App