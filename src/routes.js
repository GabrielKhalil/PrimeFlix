import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/index';
import Filmes from './pages/Filmes/index';
import Header from "./components/Header/index";
import Erro from "./pages/Erro/index";
import Favoritos from "./pages/Favoritos/index";
function RoutesApp(){
    return(

        <BrowserRouter>
        <Header/>
            <Routes>


                <Route path="/" element={ <Home/> }/>
                <Route path="/filmes/:id" element={ <Filmes/> } />
                <Route path="/favoritos" element= { <Favoritos/> } />

                <Route path="/*" element = { <Erro/> } />

            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;