import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import livroSchema from './LivroSchema';
import { addLivroServer, fetchLivro, selectLivroById, updateLivroServer } from './LivroSlice';


const FormLivros = () => {
    let { id } = useParams();
    id = parseInt(id)
    const history = useHistory();
    const dispatch = useDispatch();

    let livroFound = useSelector(state => selectLivroById(state, id))
    const status = useSelector(state => state.livros.status);

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchLivro())
        } else if (status === 'failed') {
            setTimeout(() => dispatch(fetchLivro()), 5000);
        }
    }, [status, dispatch])

    const [formLivro] = useState(
        id ? livroFound ?? livroFound : livroSchema.cast({})
    )

    const [actionType,] = useState(
        id ?
            livroFound
                ? 'updateLivro'
                : 'addLivro'
            : 'addLivro'
    )

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(livroSchema),
    });

    const onSubmit = (livro) => {
        livro.autores = ((livro.autores).split(',')).map(autor => autor.trim());
        livro.data_excluido = null;

        if (actionType === 'addLivro') {
            dispatch(addLivroServer(livro));
        } else {
            livro.id = livroFound.id;
            dispatch(updateLivroServer(livro))
        }
        history.push('/livro');
    }

    return (
        <section className="row justify-content-center flex-grow-1">

            <form onSubmit={handleSubmit(onSubmit)} className="row flex-column perfil_formulario2 col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 w-25 p-5 my-2 my-sm-4 ">

                <label className="h5 font-weight-bold" htmlFor="titulo">Título:</label>
                <input defaultValue={formLivro.titulo} id="titulo" name="titulo" className="input_login w-100" type="text" ref={register} />
                <p>{errors.titulo?.message}</p>


                <label className="h5 font-weight-bold" htmlFor="edicao">Edição:</label>
                <input defaultValue={formLivro.edicao} id="edicao" name="edicao" className="input_login w-100" type="text" ref={register} />
                <p>{errors.edicao?.message}</p>


                <label className="h5 font-weight-bold" title="Separe os autores por vírgulas. Ex: Maria Silva, Carlos Brandão" htmlFor="autores">Autores:</label>
                <input defaultValue={formLivro.autores} id="autores" name="autores" className="input_login w-100" type="text" ref={register} />
                <p>{errors.autores?.message}</p>


                <abbr title="International Standard Book Number"><label className="h5 font-weight-bold" title="Digite apenas os dígitos que compõe o ISBN, sem incluir espaços ou traços." htmlFor="isbn">ISBN:</label>
                    <input defaultValue={formLivro.isbn} id="isbn" name="isbn" className="input_login w-100" type="number" ref={register} /></abbr>
                <p>{errors.isbn?.message}</p>


                <label className="h5 font-weight-bold" htmlFor="qtd_total">Quantidade de Livros:</label>
                <input defaultValue={formLivro.qtd_total} id="qtd_total" name="qtd_total" className="input_login w-100 box_perfil" type="number" ref={register} />
                <p>{errors.qtd_total?.message}</p>


                <label className="h5 font-weight-bold" htmlFor="cod_localizacao">Código de Localização:</label>
                <input defaultValue={formLivro.cod_localizacao} id="cod_localizacao" name="cod_localizacao" className="input_login w-100 box_perfil" type="text" ref={register} />
                <p>{errors.cod_localizacao?.message}</p>

                <input className="btn align-self-center" id='enviar' type="submit" value={(actionType === "addLivro") ? 'Cadastrar' : 'Atualizar'} />
            </form>
        </section>
    );
}
export default FormLivros;