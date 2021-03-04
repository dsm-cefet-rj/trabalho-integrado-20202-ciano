import React from 'react';
import LogoUniversityLibrary from './IMG/logo-University-Library.svg';
import Leitor from './IMG/leitor.svg';
import Rodape from './CorpoPagina/rodape';

const BemVindo = () => {
    return(
    <div className="container-fluid d-flex flex-column">
        <header className="row justify-content-center align-items-center cabecalho text-white text-center p-2">
            <img src={LogoUniversityLibrary} alt="Logo da University Library" className="d-md-block mr-1" style={{width: '60px'}} />
            <h1 className="font-weight-bold">University Library</h1>
        </header>
        
        <section className="row justify-content-center flex-grow-1">
            <div className="row col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 p-5 conteudo">
                <p className="font-weight-bold">
                    <span className="h3 font-weight-bold">Bem vindo ao nosso sistema!</span><br/><br/>
                    Aqui você vai poder aproveitar a praticidade de verificar o acervo da biblioteca, renovar o emprestimo do seu livro, 
                    fazer reserva de livro caso ele esteja indisponivel, tudo isso sem precisar sair de casa.<br/><br/>
                    Aproveite!!!
                    <img src={Leitor} alt="Desenho de uma pessoa lendo livro" style={{width: '30px', margin: '-10px auto 0'}} />
                </p>
                    <a href="login.html" className="btn align-self-end col-12 col-sm-4 offset-sm-8 col-xl-3 offset-xl-9 btn_continuar text-white">Continuar</a>
            </div>
        </section>
      
        <Rodape />
    </div>
    );
}
export default BemVindo;