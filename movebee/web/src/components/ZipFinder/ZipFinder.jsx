import { useState } from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

import api from '../../services';

import { BiSolidMap } from 'react-icons/bi'

function ZipFinder() {
  const [cepInput, setCepInput] = useState('')
  const [cepOk, setCepOk] = useState(false)
  const [address, setAddress] = useState({
    cep: '01310-100',
    logradouro: 'Avenida Paulista',
    bairro: 'Bela Vista',
    cidade_uf: 'São Paulo/SP',
  })
  const [notice, setNotice] = useState(null)

  const [loading, setLoading] = useState(false)

  async function handleSearch(event) {
    setLoading(true)
    setCepOk(false)

    event.preventDefault();

    setNotice(null)

    if (cepInput === '') {
      //alert('Preencha algum CEP')
      MySwal.fire('Preencha algum CEP')
      setLoading(false)
      return;
    }

    api.get(`/zipcode/${cepInput}`)
      .then(response => {
        setAddress(response.data);
        setCepInput("");
        setLoading(false)
        setCepOk(true)
      }).catch(error => {
        const { message } = error.response.data
        if (message) {
          setNotice(message)
        }
        setCepInput("")
        setLoading(false)
      })
  }

  return (
    <section className="py-8 py-md-11 bg-gradient-dark-black" id="ZipFinder">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-5">
            <span className="badge rounded-pill bg-warning-soft mb-3">
              <span className="h6 text-uppercase">Busca CEP</span>
            </span>
            <h2 className="fw-bold text-white text-opacity-70">
              Consulte a cobertura de atendimento.
            </h2>
            <p className="fs-lg text-gray-700">
              Digite seu CEP e descubra se nosso serviço de entrega inteligente está disponível em sua região.
            </p>
            <form className="mb-8">
              <div className="row gx-4">
                <div className="col-12 col-md">
                  <div className="form-group mb-md-0">
                    <input data-cy="inputCep" className="form-control bg-light border-0" placeholder="Digite o CEP" value={cepInput}
                      onChange={(event) => setCepInput(event.target.value)} />
                  </div>
                </div>
                <div className="col-12 col-md-auto">
                  <button data-cy="submitCep" className="btn btn-warning-soft" onClick={handleSearch}>Buscar</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 col-lg-6 offset-lg-1">
            <div className="card card-border border-warning shadow-lg mb-5">
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex align-items-center">
                    <div className="me-auto">
                      <p className="fw-bold mb-1">
                        Rua/Logradouro
                      </p>
                      <p className="fs-sm text-muted mb-0" data-cy="street">
                        {address.logradouro}
                      </p>
                    </div>
                    {loading ?
                      <div className="spinner-grow text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div> :
                      <div className="text-center me-1">
                        <BiSolidMap size={28} color={cepOk ? '#42ba96' : '#94a2d3'} />
                      </div>
                    }
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <div className="me-auto">
                      <p className="fw-bold mb-1">
                        Bairro
                      </p>
                      <p className="fs-sm text-muted mb-0" data-cy="district">
                        {address.bairro}
                      </p>
                    </div>
                    {loading ?
                      <div className="spinner-grow text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div> :
                      <div className="text-center me-1">
                        <BiSolidMap size={28} color={cepOk ? '#42ba96' : '#94a2d3'} />
                      </div>
                    }
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <div className="me-auto">
                      <p className="fw-bold mb-1">
                        Cidade/Estado
                      </p>
                      <p className="fs-sm text-muted mb-0" data-cy="city_State">
                        {address.cidade_uf}
                      </p>
                    </div>
                    {loading ?
                      <div className="spinner-grow text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div> :
                      <div className="text-center me-1">
                        <BiSolidMap size={28} color={cepOk ? '#42ba96' : '#94a2d3'} />
                      </div>
                    }
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <div className="me-auto">
                      <p className="fw-bold mb-1">
                        CEP
                      </p>
                      <p className="fs-sm text-muted mb-0" data-cy="zipcode">
                        {address.cep}
                      </p>
                    </div>
                    {loading ?
                      <div className="spinner-grow text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div> :
                      <div className="text-center me-1">
                        <BiSolidMap size={28} color={cepOk ? '#42ba96' : '#94a2d3'} />
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            {notice &&
              <p className="fs-sm text-center text-gray-500 mb-0" data-cy="notice">
                {notice}
              </p>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZipFinder
