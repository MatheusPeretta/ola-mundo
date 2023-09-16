import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/menu";
import Rodape from "componentes/Rodape";
import PagPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>
      <Routes>
        <Route path="/" element={<PagPadrao/>}>

          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
        </Route>
        <Route path="posts/:id" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
