import React, { useState, useEffect } from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import ErrorFormulario2 from './validacaoemprestimo/MensagemErro2';
import { selectAllUsuarios, deleteUsuariosServer, fetchUsuarios } from '../../components/geral/usuario/UsuariosSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllLivro, fetchLivro } from '../livro/LivroSlice';
import { addEmprestimoServer, fetchEmprestimo } from '../emprestimo/EmprestimosSlice';
import { useHistory } from 'react-router-dom';
import { formatData, adiarData } from '../../utils';

const RegistrarEmprestimo = () => {
    let history = useHistory();
    let usuarioId1 = "";
    let livroId1 = "";
    const emprestimos = useSelector(selectAllUsuarios);
    const livros = useSelector(selectAllLivro);
    const status = useSelector(state => state.emprestimos.status);
    const error = useSelector(state => state.emprestimos.error);

    const status1 = useSelector(state => state.livros.status);
    const error1 = useSelector(state => state.livros.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'not_loaded' || status1 === 'not_loaded') {
            dispatch(fetchUsuarios())
            dispatch(fetchLivro())
            console.log(status)
        } else if (status === 'failed' || status1 === 'failed') {
            setTimeout(() => dispatch(fetchUsuarios()), 5000);
            setTimeout(() => dispatch(fetchLivro()), 5000);
        }
    }, [status, dispatch]);

    const [regEmprestimo, setRegEmprestimo] = useState({
        matricula: '',
        isbn: '',
    });

    const onChange = (e) => {
        setRegEmprestimo({
            ...regEmprestimo,
            [e.target.name]: e.target.value
        })

    }
    
    const onSubmitLivro = (e) => {
        e.preventDefault();
        let titulo = document.getElementById("titulo");
        let autor = document.getElementById("autor");
        if (livros.toString() != "undefined") {
            const livros1 = livros.filter(liv1 => {
                return liv1.isbn == Number(regEmprestimo.isbn)
            }
            ).map(liv2 => { return { titulo: liv2.titulo, autores: liv2.autores, id: liv2.id } })
            if (livros1.length > 0) {
                titulo.value = livros1[0].titulo
                autor.value = livros1[0].autores
                livroId1 = livros1[0].id;
                autor.style.color = "blue";
                titulo.style.color = "blue";
            } else {
                titulo.value = "Titulo não encontrado"
                titulo.style.color = "red";
                autor.value = "Autor não encontrado"
                autor.style.color = "red";
            }
        }
    }

    const onSubmitUsuario = (e) => {
        e.preventDefault();
        let nome1 = document.getElementById("nome");
        let email1 = document.getElementById("email")
        if (emprestimos.toString() != "undefined") {
            const emprestimos1 = emprestimos.filter(mat1 => {
                return mat1.matricula.toString() == regEmprestimo.matricula
            }
            ).map(mat2 => { return { nome: mat2.nome.toString(), email: mat2.email, id: mat2.id } })
            if (emprestimos1.length > 0) {
                email1.value = emprestimos1[0].email
                nome1.value = emprestimos1[0].nome
                usuarioId1 = emprestimos1[0].id
                nome1.style.color = "green";
                email1.style.color = "green";
            } else {
                email1.value = "email não encontrado"
                nome1.value = "nome não encontrado"
                email1.style.color = "red";
                nome1.style.color = "red";
            }
        }
    }

    const onSubmitEmprestimo = (e) => {
        e.preventDefault();
        
        let hoje = formatData(new Date());
        let diaDevolucao = adiarData(hoje,15);
        
        dispatch(addEmprestimoServer({
            id: "", livroId: livroId1, usuarioId: usuarioId1, data_emprestimo: hoje,
            data_devolucao: diaDevolucao, data_devolvido: null, data_excluido: null
        }));
        history.push("/emprestimo");
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

                    <form onSubmit={onSubmitUsuario} className="row mx-4 justify-content-center w-100 mt-5 p-0" action="#" method="POST">
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

                    <form onSubmit={onSubmitLivro} className="row mx-4 justify-content-center w-100" action="#" method="POST">
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


                    <form onSubmit={onSubmitEmprestimo} className="row mx-4 justify-content-center" action="#" method="POST">
                        {/* 
                            Nome Usuário:
                            - String
                            - Não pode ser Nulo;
                        */}
                        <input id="nome" className="input_login w-100 my-2 form-control" type="text" name="nome-usuario" placeholder="Nome" disabled />


                        {/*
                            Email Usuário:
                            - String;
                            - Possuir formato de email;
                            - Não pode ser Nulo;                        
                        */}
                        <input id="email" className="input_login w-100 my-2 form-control" type="email" name="email-usuario" placeholder="E-mail" disabled />


                        {/* 
                            Título do Livro:
                            - String;
                            - Não pode ser Nulo;
                        */}
                        <input id="titulo" className="input_login w-100 my-2 form-control" type="text" name="titulo-livro" placeholder="Título" disabled />

                        {/* 
                            Autor do Livro:
                            - String;
                            - Não pode ser Nulo;
                        */}
                        <input id="autor" className="input_login w-100 my-2 form-control" type="text" name="autor-livro" placeholder="Autor" disabled />

                        <input className="my-5 btn" id="confirmar" type="submit" value="Registrar Empréstimo" />
                    </form>

                </div>
            </section>
        </div>
    );
}
export default RegistrarEmprestimo;