// Pages
import TablaInformes from "./pages/TablaInformes"
import ElegirIng from "./pages/ElegirIng";
import SubirInformes from "./pages/SubirInformes";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";

import detectarCodigoKonami from "./scripts/codigoKonami"
import { BrowserRouter, Route, Routes } from "react-router-dom";

detectarCodigoKonami()

function App() 
{
  return (
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path='/consultar/:ing/:id' element={<TablaInformes />} />
        <Route path='/' element={<ElegirIng />} />
        <Route path='/subir/:ing' element={<SubirInformes />} />
        
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App