import React, { useState } from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import ErrorFormulario2 from './validacaoemprestimo/MensagemErro2';

const RegistrarEmprestimo = () => {

    const [regEmprestimo, setRegEmprestimo] = useState({
        matricula: '',
        isbn: '',
        erros1: false,
        erros2: false,
        erros4: false,
        erros5: false,
        erros3: false,

    });

    const onChange = (e) => {
        e.target.value = e.target.value.trim();

        if ([e.target.name].toString() === "matricula") {

            if (/[0-9,a-z]{21}/gi.test(e.target.value)) {

                regEmprestimo.erros1 = true;
            } else {
                regEmprestimo.erros1 = false;
            }
            if (/[!,",.,F/,=,:,_,^,~,`,´,\-,\\,>,<,|,;,*,#,^,~,+,&,¨,%,$,@]/gi.test(e.target.value)) {
                regEmprestimo.erros2 = true;
            }
            else {
                regEmprestimo.erros2 = false;
            }
        }
        if ([e.target.name].toString() === "isbn") {


            if (/[^0-9]/gi.test(e.target.value)) {
                regEmprestimo.erros5 = true;
            }
            else {
                regEmprestimo.erros5 = false;

            }
            if (((document.getElementById("isbn").value.length !== 10) && (document.getElementById("isbn").value.length !== 13))) {
                regEmprestimo.erros4 = true;
            } else {
                regEmprestimo.erros4 = false;
            }

        }
        setRegEmprestimo({
            ...regEmprestimo,
            [e.target.name]: e.target.value
        })

    }
    const enviarRegistroEmpretismo = () => {
        setTimeout(() => {
            setRegEmprestimo({
                erros3: false,
            })
        }, 3000);
        setRegEmprestimo({

            erros3: true,
        })
    }
    const onSubmit1 = (e) => {
        e.preventDefault();
        if (!regEmprestimo.erros1 && !regEmprestimo.erros2 && regEmprestimo.matricula) {
            e.target.reset()
            regEmprestimo.matricula = "";
        } else {
            enviarRegistroEmpretismo();
        }
    }
    const onSubmit2 = (e) => {
        e.preventDefault();
        if (!regEmprestimo.erros4 && !regEmprestimo.erros5 && regEmprestimo.isbn) {
            e.target.reset()
            regEmprestimo.isbn = "";
        } else {
            enviarRegistroEmpretismo();
        }
    }
    const onSubmit3 = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Registrar Empréstimo" link='/emprestimo' />
            <div className="col-11 h5 mt-2 col-sm-8 col-md-6 col-lg-4  mx-auto text-center  ">
                <ErrorFormulario2 erros1={regEmprestimo.erros1} erros2={regEmprestimo.erros2}
                    erros3={regEmprestimo.erros3} erros4={regEmprestimo.erros4} erros5={regEmprestimo.erros5}
                />
            </div>
            <section className="row justify-content-center align-items-start flex-grow-1">
                <div className="row conteudo col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 w-25 p-0">

                    <form onSubmit={onSubmit1} className="row mx-4 justify-content-center w-100 mt-5 p-0" action="#" method="POST">
                        <div className="input-group">
                            {/* 
                                Matricula:
                                - String
                                - Máximo de Caracteres -> 20
                                - Não pode ser Nulo
                            */}
                            <input onChange={onChange} type="text" className="input_login form-control m-0" name="matricula" id="matricula" placeholder="Matrícula" />
                            <input type="submit" className="btn btn-outline-primary " value="Consultar" id="consultar-matricula" />
                        </div>
                    </form>

                    <form onSubmit={onSubmit2} className="row mx-4 justify-content-center w-100" action="#" method="POST">
                        <div className="input-group w-100">
                            {/* 
                                ISBN:
                                - int;
                                - Existe dois padrões de ISBN (ISBN-10 e ISBN-13);
                                - Possui digito verificador, com logica diferente dependendo da versão usada;
                                - Formato exemplo ISBN-10: 0-306-40615-2;
                                - Formato exemplo ISBN-13: 978-0-306-40615-7;
                                - Possui 10 ou 13 digitos (desconsiderando a inclusão de traços ou espaços);
                                - Não pode ser Nulo;
                            */}
                            <input onChange={onChange} type="text" className="input_login form-control my-2" id="isbn" name="isbn" placeholder="ISBN" />
                            <input type="submit" className="btn btn-outline-primary my-2" value="Consultar" id="consultar-isbn" />
                        </div>
                    </form>


                    <form onSubmit={onSubmit3} className="row mx-4 justify-content-center" action="#" method="POST">
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