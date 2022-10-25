import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layouts/Home.jsx";

import AuthLayout from "./layouts/authLayout.jsx";
import Login from "./pages/Login.jsx";
import Registrar from "./pages/Registrar.jsx";
import OlvidePassword from "./pages/OlvidePassword.jsx";
import NuevoPassword from "./pages/NuevoPassword.jsx";
import ConfirmarCuenta from './pages/ConfirmarCuenta.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />

      <Route element={<AuthLayout/>}>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registrar" element={<Registrar/>}/>
      <Route path="/olvide-password" element={<OlvidePassword />} />
      <Route path="/olvide-password/:token" element={<NuevoPassword />} />   
      <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
