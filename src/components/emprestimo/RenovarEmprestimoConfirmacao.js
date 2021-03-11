import React from 'react';
import { Link } from 'react-router-dom';
import CapaLivro from '../img/capa-livro-exemplo.svg';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import InfosGeraisEmprestimo from './InfosGeraisEmprestimo';

var usuario = { nome: 'Rodrio da Silva Barreto', matricula: '19654684ADM', email: 'exemplo@email.com', telefone: '(21) 93939-9933' };
var livro = { titulo: 'Calculo Vol.1', autor: 'James Stewart', codLocalizacao: 'S15P5-6', isbn: 'C978-85-221-1461-0', qtdDisponivel: 9, qtdTotal: 15, imagem: CapaLivro };
var emprestimo = { id: 1, dataDevolucao: '10/04/2020', dataEmprestimo: '19/03/2020' };

function DataRenovacaoString(dataString) {
    let diasDeAcrescimo = 15;
    let dataArr = dataString.split("/");
    var data = new Date(dataArr[2], dataArr[1], dataArr[0]);
    data.setDate(data.getDate() + diasDeAcrescimo);

    return (
         ('0' + data.getDate()).slice(-2) + "/" + ('0' + data.getMonth()).slice(-2) + "/" + data.getFullYear()
    );
}

const RenovarEmprestimoConfirmacao = () => {

    return (
        <div className="container-fluid ">

            <CabecalhoVoltar titulo="Renovar Empréstimo" link='/emprestimo/renovar'/>

            <section className="row justify-content-center align-items-start flex-grow-1">
                <div className="row col-sm-8 col-md-7 col-lg-5 col-xl-4 justify-content-center p-0">
                    <div className="row conteudo justify-content-center px-3 py-5 mx-0 w-100">

                        <InfosGeraisEmprestimo usuario={usuario} livro={livro} emprestimo={emprestimo} />

                        <h3 className="h4 text-center">Deseja renovar o empréstimo para o dia ({DataRenovacaoString(emprestimo.dataDevolucao)})?</h3>
                        <Link to='/emprestimo/renovar' className="btn align-self-end text-white botao">SIM</Link>

                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
export default RenovarEmprestimoConfirmacao;