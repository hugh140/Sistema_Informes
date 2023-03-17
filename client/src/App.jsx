import TablaInformes from "./pages/TablaInformes"
import detectarCodigoKonami from "./scripts/codigo_konami"
import { BrowserRouter, Route, Routes } from "react-router-dom";

detectarCodigoKonami()

function App() 
{
  return (
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path='/consultar/:ing/:id' element={<TablaInformes />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App