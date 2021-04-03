import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUsuarios, selectAllUsuarios } from '../../components/geral/usuario/UsuariosSlice';
import { adiarData, formatData } from '../../utils';
import { addEmprestimoServer } from '../emprestimo/EmprestimosSlice';
import { fetchLivro, selectAllLivro } from '../livro/LivroSlice';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import emprestimoSchema from './EmprestimoSchema';



const RegistrarEmprestimo = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    let diasDeAcrescimo = 15;

    const usuarios = useSelector(selectAllUsuarios);
    const status = useSelector(state => state.usuarios.status);


    const livros = useSelector(selectAllLivro);
    const status1 = useSelector(state => state.livros.status);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(emprestimoSchema),
    });

    const [emprestimo] = useState(emprestimoSchema.cast({}));

    useEffect(() => {
        if (status === 'not_loaded' || status1 === 'not_loaded') {
            dispatch(fetchUsuarios())
            dispatch(fetchLivro())
        } else if (status === 'failed' || status1 === 'failed') {
            setTimeout(() => dispatch(fetchUsuarios()), 5000);
            setTimeout(() => dispatch(fetchLivro()), 5000);
        }
    }, [status, status1, dispatch]);

    const onSubmitLivro = (formLivro) => {
        let titulo = document.getElementById("titulo");
        let autor = document.getElementById("autor");
        if (typeof livros !== 'undefined') {
            let livro = livros.filter(livro => { return livro.isbn === Number(formLivro.isbn) })[0];

            if (livro) {
                emprestimo.idLivro = livro.id;
                titulo.value = livro.titulo;
                autor.value = livro.autores;
                titulo.style.color = "blue";
                autor.style.color = "blue";

            } else {
                titulo.value = "Titulo não encontrado";
                autor.value = "Autor não encontrado";
                titulo.style.color = "red";
                autor.style.color = "red";
            }
        }
    }

    const onSubmitUsuario = (formUsuario) => {
        let nome = document.getElementById("nome");
        let email = document.getElementById("email");
        if (typeof usuarios !== "undefined") {
            let usuario = usuarios.filter(usuario => { return usuario.matricula === formUsuario.matricula })[0];

            if (usuario) {
                emprestimo.idUsuario = usuario.id;
                email.value = usuario.email;
                nome.value = usuario.nome;
                nome.style.color = "green";
                email.style.color = "green";
            } else {
                email.value = "email não encontrado";
                nome.value = "nome não encontrado";
                email.style.color = "red";
                nome.style.color = "red";
            }
        }
    }

    const onClickRegistrarEmprestimo = () => {

        if (emprestimo.idUsuario && emprestimo.idLivro) {
            let hoje = formatData(new Date());
            let diaDevolucao = adiarData(hoje, diasDeAcrescimo);

            dispatch(addEmprestimoServer({
                id: "",
                livroId: emprestimo.idLivro, 
                usuarioId: emprestimo.idUsuario, 
                data_emprestimo: hoje,
                data_devolucao: diaDevolucao, 
                data_devolvido: null, 
                data_excluido: null
            }));
            history.push("/emprestimo");
        }
        else {
            window.alert("Os Campos Matrícula e ISBN precisam estar preenchidos e consultados!")
        }

    }
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Registrar Empréstimo" link='/emprestimo' />

            <section className="row justify-content-center align-items-start flex-grow-1">
                <div className="row conteudo justify-content-center col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 w-25 p-0">

                    <div className="row mx-4 border border-secondary rounded justify-content-center w-100 mt-5 p-2">
                        <label className="h4">Usuário</label>
                        <form onSubmit={handleSubmit(onSubmitUsuario)} className="w-100">
                            <div className="input-group">
                                <input type="text" className="input_login form-control m-0" name="matricula" id="matricula" placeholder="Matrícula" defaultValue={emprestimo.matricula} ref={register} />
                                <input type="submit" className="btn btn-outline-primary" value="Consultar" id="consultar-matricula" />
                            </div>
                        </form>
                        <p>{errors.matricula?.message}</p>

                        <input id="nome" className="input_login w-100 my-2 form-control" type="text" name="nome-usuario" placeholder="Nome" disabled />
                        <input id="email" className="input_login w-100 my-2 form-control" type="email" name="email-usuario" placeholder="E-mail" disabled />
                    </div><br />

                    <div className="row mx-4 border border-secondary rounded justify-content-center w-100 mt-5 p-2">
                        <label className="h4">Livro</label>
                        <form onSubmit={handleSubmit(onSubmitLivro)} className=" w-100">
                            <div className="input-group">
                                <input type="text" className="input_login form-control m-0" id="isbn" name="isbn" placeholder="ISBN" defaultValue={emprestimo.isbn} ref={register} />
                                <input type="submit" className="btn btn-outline-primary" value="Consultar" id="consultar-isbn" />
                            </div>
                        </form>
                        <p>{errors.isbn?.message}</p>

                        <input id="titulo" className="input_login w-100 my-2 form-control" type="text" name="titulo-livro" placeholder="Título" disabled />
                        <input id="autor" className="input_login w-100 my-2 form-control" type="text" name="autor-livro" placeholder="Autor" disabled />
                    </div>

                    <button className="my-5 btn" id="confirmar" onClick={handleSubmit(onClickRegistrarEmprestimo)}>Registrar Empréstimo</button>
                </div>
            </section>
        </div>
    );
}

export default RegistrarEmprestimo;