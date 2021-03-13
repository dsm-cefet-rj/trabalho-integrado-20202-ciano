import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';

const RegistrarEmprestimo = () => {
    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Registrar Empréstimo" link='/emprestimo' />

            <section className="row justify-content-center align-items-start flex-grow-1">
                <div className="row conteudo col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 w-25 p-0">

                    <form className="row mx-4 justify-content-center w-100 mt-5 p-0" action="#" method="">

                        <div className="input-group">
                            {/* 
                                Matricula:
                                - String
                                - Máximo de Caracteres -> 20
                                - Não pode ser Nulo
                            */}
                            <input type="text" className="input_login form-control m-0" name="matricula" id="matricula" placeholder="Matrícula" />
                            <button className="btn btn-outline-primary " type="button" id="consultar-matricula">Consultar</button>
                        </div>
                    </form>

                    <form className="row mx-4 justify-content-center w-100" action="#" method="">
                        <div className="input-group w-100">
                            {/* 
                                ISBN:
                                - String;
                                - Existe dois padrões de ISBN (ISBN-10 e ISBN-13);
                                - Possui digito verificador, com logica diferente dependendo da versão usada;
                                - Formato exemplo ISBN-10: 0-306-40615-2;
                                - Formato exemplo ISBN-13: 978-0-306-40615-7;
                                - Possui 10 ou 13 digitos (desconsiderando a inclusão de traços ou espaços);
                                - Não pode ser Nulo;
                            */}
                            <input type="text" className="input_login form-control my-2" name="isbn" placeholder="ISBN" />
                            <button className="btn btn-outline-primary my-2" type="button" id="consultar-isbn">Consultar</button>
                        </div>
                    </form>


                    <form className="row mx-4 justify-content-center" action="#" method="POST">
                        {/* 
                            Nome Usuário:
                            - String
                            - Não pode ser Nulo;
                        */}
                        <input className="input_login w-100 my-2 form-control" type="text" name="nome-usuario" placeholder="Nome" disabled />
                        
                        
                        {/*
                            Email Usuário:
                            - String;
                            - Possuir formato de email;
                            - Não pode ser Nulo;                        
                        */}
                        <input className="input_login w-100 my-2 form-control" type="email" name="email-usuario" placeholder="E-mail" disabled />
                        
                        
                        {/* 
                            Título do Livro:
                            - String;
                            - Não pode ser Nulo;
                        */}
                        <input className="input_login w-100 my-2 form-control" type="text" name="titulo-livro" placeholder="Título" disabled />
                        
                        {/* 
                            Autor do Livro:
                            - String;
                            - Não pode ser Nulo;
                        */}
                        <input className="input_login w-100 my-2 form-control" type="text" name="autor-livro" placeholder="Autor" disabled />

                        <input className="my-5 btn" id="confirmar" type="submit" value="Registrar Empréstimo" />
                    </form>

                </div>
            </section>
        </div>
    );
}
export default RegistrarEmprestimo;