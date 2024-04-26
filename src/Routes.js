import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import Sobremim from "./paginas/sobremin";
import Menu from "./componentes/menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontado from "paginas/NaoEncontado";
import ScrollToTop from "componentes/ScrowToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
        <Route  index element={<Inicio/>}/>
        <Route  path="sobremim" element={<Sobremim/>} />
        </Route>
        <Route path="Posts/:id" element={<Post/>} />
       
        <Route  path="*" element={<NaoEncontado/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
   
  );
}

export default AppRoutes;
