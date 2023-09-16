import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/menu";
import Rodape from "componentes/Rodape";
import PagPadrao from "componentes/PaginaPadrao";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<PagPadrao/>}>

          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>

        </Route>
        
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
