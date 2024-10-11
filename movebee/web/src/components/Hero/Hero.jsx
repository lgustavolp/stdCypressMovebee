function Hero() {

    return (
        <section className="pt-4 pt-md-11">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">

                        <img src="assets/img/van.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="Movebee" />

                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1">

                        <h1 className="display-3 text-center text-md-start">
                            O futuro das entregas é <span className="text-warning">aqui</span>.
                        </h1>

                        <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                            Evolua na era digital com soluções logísticas ágeis, inteligentes e eficientes.
                        </p>

                        <div className="text-center text-md-start">
                            <a href="/" className="btn btn-warning shadow lift me-1">
                                Quero saber mais
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
