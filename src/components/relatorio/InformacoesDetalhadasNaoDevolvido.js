import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import CapaLivro from '../img/capa-livro-exemplo.svg';
import InfosGeraisEmprestimo from '../emprestimo/InfosGeraisEmprestimo';

var usuario = { nome: 'Rodrio da Silva Barreto', matricula: '19654684ADM', email: 'exemplo@email.com', telefone: '(21) 93939-9933' };
var livro = { titulo: 'Calculo Vol.1', autor: 'James Stewart', codLocalizacao: 'S15P5-6', isbn: 'C978-85-221-1461-0', qtdDisponivel: 9, qtdTotal: 15, imagem: CapaLivro };
var emprestimo = { id: 1, dataDevolucao: '05/04/2020', dataEmprestimo: '19/03/2020' };

const InformacoesDetalhadasNaoDevolvido = () => {
    return (
        <div className="container-fluid ">

            <CabecalhoVoltar titulo="Informações Detalhadas" link='/relatorio/livros/devolucoes'/>

            <section className="row justify-content-center align-items-start flex-grow-1">
                <div className="row col-sm-8 col-md-7 col-lg-5 col-xl-4 justify-content-center p-0">
                    <div className="row conteudo justify-content-center px-3 py-5 mx-0 w-100">

                        <InfosGeraisEmprestimo usuario={usuario} livro={livro} emprestimo={emprestimo} />

                        <a href="mailto:example@email.com" id="notificar-atraso" className="btn align-self-end btn-lg text-white botao">Notificar Atraso</a>

                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
export default InformacoesDetalhadasNaoDevolvido; 