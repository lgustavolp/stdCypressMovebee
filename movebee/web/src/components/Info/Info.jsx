function Info() {

    return (
        <section className="pt-8 mb-8 bg-gradient-light-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-7 col-lg-6">
                        <h2>
                            Transforme seus desafios logísticos <span className="text-warning">em sucesso</span>!
                        </h2>
                        <p className="fs-lg text-muted mb-6">
                            No competitivo mundo dos negócios de hoje, um segundo faz diferença.
                        </p>
                        <div className="d-flex">
                            <div className="icon text-warning">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0h24v24H0z"></path>
                                        <path
                                            d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                                            fill="#335EEA"></path>
                                        <rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16"
                                            rx="1"></rect>
                                    </g>
                                </svg>
                            </div>

                            <div className="ms-5">
                                <p className="text-muted mb-6">
                                    Utilizamos tecnologia avançada para garantir que suas entregas sejam feitas no prazo, com a máxima eficiência e sem contratempos.
                                </p>
                            </div>

                        </div>
                        <div className="d-flex">

                            <div className="icon text-warning">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0h24v24H0z"></path>
                                        <path
                                            d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z"
                                            fill="#335EEA"></path>
                                        <path
                                            d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z"
                                            fill="#335EEA" opacity=".3"></path>
                                    </g>
                                </svg>

                            </div>

                            <div className="ms-5">
                                <p className="text-muted mb-6 mb-md-0">
                                    Não deixe que seus desafios logísticos retardem sua jornada. Junte-se à revolução Movebee e eleve suas operações ao próximo nível.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-5 col-lg-6">
                        <div className="w-md-150 w-lg-130 position-relative">
                            <div className="img-skewed img-skewed-start">
                                <img src="assets/img/app.png" className="info-app" alt="Movebee" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info
