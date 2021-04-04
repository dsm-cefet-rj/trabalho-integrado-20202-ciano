import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CapaLivro from '../img/capa-livro-exemplo.svg';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import { fetchLivro, selectLivroById } from './LivroSlice';


const InformacoesDetalhadasConsulta = () => {
  let { id } = useParams();
  id = parseInt(id)

  let atualizarLivros = useSelector(state => selectLivroById(state, id))
  const status = useSelector(state => state.livros.status);


  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'not_loaded') {
      dispatch(fetchLivro())
    } else if (status === 'failed') {
      setTimeout(() => dispatch(fetchLivro()), 5000);
    }
  }, [status, dispatch])



  console.log(typeof (atualizarLivros) == "undefined")
  if (typeof (atualizarLivros) == "undefined") {

    atualizarLivros = {};
  }

  return (
    <div className="container-fluid ">

      <CabecalhoVoltar titulo="Informações Detalhadas" link='/livro' />

      <section className="row justify-content-center align-items-start flex-grow-1">
        <div className="row col-sm-8 col-md-7 col-lg-5 col-xl-4 justify-content-center p-0">
          <div className="row conteudo justify-content-center px-3 py-5 mx-0 w-100">

            <img src={CapaLivro} alt="Livro fechado" className="ajuste3" />

            <div className="table-responsive ">

              <table className="table table-striped mt-5">

                <thead className="thead-dark">
                  <tr>
                    <th scope="col" colspan="2" className="text-center">Livro</th>
                  </tr>
                </thead>
                <tbody className="font-weight-bold w-100 text-left mt-5 ">
                  <tr>
                    <th scope="row" className="w-0">Título:</th>
                    <td className="font-weight-bold w-100 text-left " >{atualizarLivros.titulo}</td>
                  </tr>
                  <tr>
                    <th scope="row">Edição:</th>
                    <td className="font-weight-bold w-100 text-left">{atualizarLivros.edicao}</td>
                  </tr>
                  <tr>
                    <th scope="row">Autor:</th>
                    <td className="font-weight-bold w-100 text-left">{atualizarLivros.autores}</td>
                  </tr>

                  <tr>
                    <th scope="row">Cod. Localização:</th>
                    <td className="font-weight-bold w-100 text-left">{atualizarLivros.cod_localizacao}</td>
                  </tr>
                  <tr>
                    <th scope="row">ISBN:</th>
                    <td className="font-weight-bold w-100 text-left">{atualizarLivros.isbn}</td>
                  </tr>
                  <tr>
                    <th scope="row">QTD Total:</th>
                    <td className="font-weight-bold w-100 text-left ">{atualizarLivros.qtd_total}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </section>

      <Rodape />
    </div>
  );
}
export default InformacoesDetalhadasConsulta;