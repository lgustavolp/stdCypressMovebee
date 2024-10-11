function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">

                <a className="navbar-brand" href="index.html">
                    <img src="assets/img/logo.svg" className="navbar-brand-img" alt="Movebee" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fe fe-x"></i>
                    </button>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" aria-haspopup="true" aria-expanded="false">
                                Sobre nós
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" aria-haspopup="true" aria-expanded="false">
                                Rastrear Pacotes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" aria-haspopup="true" aria-expanded="false">
                                Entregadores
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" aria-haspopup="true" aria-expanded="false">
                                Central de Ajuda
                            </a>
                        </li>
                    </ul>
                    <a className="navbar-btn btn btn-sm btn-warning lift ms-auto" href="/">
                        Entrar
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
