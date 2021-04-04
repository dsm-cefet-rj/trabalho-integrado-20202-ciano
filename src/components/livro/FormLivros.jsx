import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addLivroServer, fetchLivro, selectLivroById, updateLivroServer } from './LivroSlice';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import livroSchema from './LivroSchema';

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

    const [formLivro, setFormLivro] = useState(
        id?livroFound??{}:{}
    )
    
    const [actionType,]=useState(
        id?
        livroFound
        ?'updateLivro'
        :'addLivro'
        :'addLivro'
    )

    const onChange = (e) => {

        setFormLivro({
            ...formLivro,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        formLivro.isbn = parseInt(formLivro.isbn)
        formLivro.qtd_total = parseInt(formLivro.qtd_total)

        if (actionType === "addLivro") {
            dispatch(addLivroServer(formLivro));

        } else {
            dispatch(updateLivroServer(formLivro))
        }
        history.push("/livro");
    }

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(livroSchema),
    });

    return (
        <>
            <section className="perfil_ajuste  row  justify-content-center  corpo_login  " >

                <form onSubmit={handleSubmit(onSubmit)} className="row flex-column perfil_formulario2 col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 form w-25" action="#" method="POST" >
                    <div className="my-2 text-center">

                    </div>
                    {/* 
                    Título do Livro:                              
                    - String;
                    - Não pode ser Nulo;
                */}
                    <input onChange={onChange} value={formLivro.titulo} className="box_perfil input_login mt-5 w-100 mb-5 " type="text" id="titulo" name="titulo" placeholder="Título" ref={register} />
                    &nbsp;<p>{errors.titulo?.message}</p>
                    {/* 
                    Gênero:
                    - String;
                    - Não pode ser Nulo;
                */}
                    <input onChange={onChange} value={formLivro.edicao} id="edicao" className="box_perfil mb-5  input_login w-100" type="text" name="edicao" placeholder="Edição" ref={register} />
                    &nbsp;<p>{errors.edicao?.message}</p>
                    {/* 
                    Autor do Livro:
                    - String;
                    - Não pode ser Nulo;
                */}
                    <input onChange={onChange} value={formLivro.autores} id="autor" className="box_perfil input_login w-100 mb-5 " type="text" name="autores" placeholder="Autor" ref={register} />
                    &nbsp;<p>{errors.autor?.message}</p>
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
                    <input onChange={onChange} value={formLivro.isbn} id="isbn" className="input_login mb-5  box_perfil w-100" type="number" name="isbn" placeholder="ISBN" ref={register} />
                    &nbsp;<p>{errors.isbn?.message}</p>
                    {/* 
                    Quantidade de Livros:
                    - Inteiro
                    - Minimo -> 1
                    - Não pode ser Nulo;
                */}
                    <input onChange={onChange} value={formLivro.qtd_total} id="quantidade" className="input_login w-100 mb-5 box_perfil" type="number" name="qtd_total" placeholder="Quantidade" ref={register} />
                    &nbsp;<p>{errors.quantidade?.message}</p>
                    {/* 
                    Codigo de Localização:
                    - String
                    - Não pode ser Nulo;
                */}
                    <input onChange={onChange} value={formLivro.cod_localizacao} id="codLocalizacao" className="input_login w-100 mb-5 box_perfil" type="text" name="cod_localizacao" placeholder="Cód. localização" ref={register} />
                    &nbsp;<p>{errors.codLocalizacao?.message}</p>

                    <input className="mt-2 align-self-center btn" id={(actionType === "addLivro")?'cadastrar':'atualizar'} type="submit" value={(actionType === "addLivro")?'Cadastrar':'Atualizar'} />
                </form>
            </section>
        </>
    );
}
export default FormLivros;