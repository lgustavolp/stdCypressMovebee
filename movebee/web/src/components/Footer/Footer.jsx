import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai'

function Footer() {

  return (
    <footer className="py-8 py-md-11 bg-gray-200">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <img src="assets/img/logo.svg" alt="brand" className="footer-brand img-fluid mb-2" />
            <p className="text-gray-700 mb-2">
              O futuro das entregas é aqui!
            </p>
            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li className="list-inline-item list-social-item me-3">
                <AiOutlineInstagram size={32} color='#3a3a3c' />
              </li>
              <li className="list-inline-item list-social-item me-3">
                <AiOutlineFacebook size={32} color='#3a3a3c' />
              </li>
              <li className="list-inline-item list-social-item me-3">
                <AiOutlineLinkedin size={32} color='#3a3a3c' />
              </li>
            </ul>

          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold text-uppercase text-gray-700">
              Serviços
            </h6>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Rastrear pacotes
                </a>
              </li>
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Fazer entregas
                </a>
              </li>
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Entregadores
                </a>
              </li>
            </ul>

          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold text-uppercase text-gray-700">
              Produtos
            </h6>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Movebee Expresso
                </a>
              </li>
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Movebee Fácil
                </a>
              </li>
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Movebee Envios
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
            <h6 className="fw-bold text-uppercase text-gray-700">
              Ajuda
            </h6>
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Fale com a gente
                </a>
              </li>
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Suporte entregador
                </a>
              </li>
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Suporte à empresas
                </a>
              </li>
            </ul>

          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold text-uppercase text-gray-700">
              Sobre nós
            </h6>
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Conheça a Movebee
                </a>
              </li>
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Trabalhe conosco
                </a>
              </li>
              <li>
                <a href="/" className="text-reset">
                  Sala de imprensa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
