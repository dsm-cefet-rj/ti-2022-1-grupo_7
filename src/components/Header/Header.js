import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header () {
    
    return(
    <header>
        <nav className="navbar navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src = "JV.png" height="40" width="50" alt="Logo"/> 
                    
                </a>

                <form className="d-flex">
                    <input className="form-control m-2" type="text" />
                </form>

                <button 
                    className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#menuCursos"
                    aria-expanded="true"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="menuCursos">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Catálogo</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link" to="/Anunciar">Anunciar</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link" to="/Perfil">Perfil</Link>
                        </li>
                    </ul>
                </div>
              
            </div>

        </nav>
    </header>
    )
}

export default Header