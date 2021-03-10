import React from 'react';
import Leitor from '../../img/leitor.svg';

const ConteudoPrincipal = () => {
    return (
        <div>
            <section className="row justify-content-center flex-grow-1">
                <div className="row col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 p-5 conteudo">
                    <p className="font-weight-bold">
                        <span className="h3 font-weight-bold">Bem vindo ao nosso sistema!</span><br /><br />
            Aqui você vai poder aproveitar a praticidade de verificar o acervo da biblioteca, renovar o emprestimo do seu livro,
            fazer reserva de livro caso ele esteja indisponivel, tudo isso sem precisar sair de casa.<br /><br />
            Aproveite!!!
            <img src={Leitor} alt="Desenho de uma pessoa lendo livro" style={{ width: '30px', margin: '-10px auto 0' }} />
                    </p>
                    <a href="login.html" className="btn align-self-end col-12 col-sm-4 offset-sm-8 col-xl-3 offset-xl-9 btn_continuar text-white">Continuar</a>
                </div>
            </section>
        </div>


    );
}

export default ConteudoPrincipal;


