// Pages
import TablaInformes from "./pages/TablaInformes"
import ElegirIng from "./pages/ElegirIng";
import SubirInformes from "./pages/SubirInformes";

import detectarCodigoKonami from "./scripts/codigo_konami"
import { BrowserRouter, Route, Routes } from "react-router-dom";

detectarCodigoKonami()

function App() 
{
  return (
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path='/consultar/:ing/:id' element={<TablaInformes />} />
        <Route path='/' element={<ElegirIng />} />
        <Route path='/subir' element={<SubirInformes />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App