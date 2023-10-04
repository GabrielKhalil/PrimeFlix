import { Link } from "react-router-dom";
import './erro.css';

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1><br/>
            <h2>Página não encontrada!!</h2> <br/>
            <Link to="/">Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro;