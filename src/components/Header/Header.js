import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header() {

    const token = localStorage.getItem('token');

    return (
        <header>
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="JV.png" height="40" width="50" alt="Logo" />
                    </Link>

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
                        <ul className="navbar-nav" id="icones">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Catálogo</Link>
                            </li>
                            {
                                token ?(
                                    <>
                                        <li className='nav-item'>
                                            <Link className="nav-link" to="/Anunciar">Anunciar</Link>
                                        </li>
                                    </>
                                )
                                    : null
                            }
                            {
                                !token ?
                                    (
                                        <>
                                            <li className='nav-item'>
                                                <Link className="nav-link" to="/Login">Login</Link>
                                            </li>
                                        </>
                                    )
                                    : null
                            }

                            <li className='nav-item'>
                                <Link className="nav-link" to="/Perfil">Perfil</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/BoxAdmPag">teste</Link>
                            </li>
                            {
                                token ?
                                    <li className='nav-item nav-link mouse'
                                            onClick={() => {
                                                localStorage.removeItem('token');
                                                window.location.href = '/login';
                                            }}
                                        >Logout
                                    </li>
                                    : null
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header