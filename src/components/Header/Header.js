import './Header.css';

function Header () {

    function botaoEvento(){
        
    }

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

                {/* <button 
                    onClick = {botaoEvento}
                    className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#menuCursos" 
                    style="cursor:pointer" 
                    aria-expanded="true"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {on && <div className="navbar-collapse collapse" id="menuCursos">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Perfil</a>
                        </li>
                        <li className='nav-item'>
                            <a className="nav-link" href="#">Anunciar</a>
                        </li>
                    </ul>
                </div>
                }    */}
            </div>

        </nav>
    </header>
    )
}

export default Header