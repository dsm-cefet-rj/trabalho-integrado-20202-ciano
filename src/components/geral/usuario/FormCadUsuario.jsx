import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import usuarioSchema from './UsuarioSchema';
import { addUsuarioServer } from './UsuariosSlice';
import { formatData } from '../../../utils';

const FormCadUsuario = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [regUsuario] = useState(usuarioSchema.cast({}));

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(usuarioSchema),
    });

    const onSubmit = (usuario) => {
        console.log("oi");
        usuario.data_nasc = formatData(usuario.data_nasc);

        console.log(usuario);

        dispatch(addUsuarioServer(usuario));
        history.push('/menu/bibliotecario');
    }

    return (
        <section className="row justify-content-center flex-grow-1">
            <form onSubmit={handleSubmit(onSubmit)} className="row flex-column perfil_formulario2 col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4 w-25 p-4 my-2 my-sm-4">

                <label className="h5 font-weight-bold mt-3" for="nome">Nome Completo:</label>
                <input defaultValue={regUsuario.nome} className="input_login w-100" type="text" id="nome" name="nome" autofocus ref={register} />
                <p>{errors.nome?.message}</p>

                <div className="border border border-secondary border-3 rounded w-100 mt-3 p-3">
                    <legend className="font-weight-bold h5">Categoria:</legend>

                    <input id="0" value="aluno" name="categoria" className="h-25 ml-3" type="radio" ref={register} />
                    <label for="0" defaultValue={regUsuario.categoria} className="text-dark font-weight-bold h6 ">Aluno</label>

                    <input id="1" value="professor" name="categoria" className="h-25 ml-3" type="radio" ref={register} />
                    <label for="1" defaultValue={regUsuario.categoria} className="text-dark font-weight-bold h6">Professor</label>

                    <input id="2" value="bibliotecario" name="categoria" className="h-25 ml-3" type="radio" ref={register} />
                    <label for="2" defaultValue={regUsuario.categoria} className="text-dark font-weight-bold h6">Bibliotecário </label>
                </div>
                <p>{errors.categoria?.message}</p>

                <label className="h5 font-weight-bold mt-3" for="matricula">Matrícula:</label>
                <input defaultValue={regUsuario.matricula} className="input_login w-100" type="text" id="matricula" name="matricula" ref={register} />
                <p>{errors.matricula?.message}</p>

                <label className="h5 font-weight-bold mt-3" for="email">E-mail:</label>
                <input defaultValue={regUsuario.email} className="input_login w-100" type="email" id="email" name="email" ref={register} />
                <p>{errors.email?.message}</p>

                <label className="h5 font-weight-bold mt-3" for="senha">Senha:</label>
                <input defaultValue={regUsuario.senha} className="input_login w-100" type="password" id="senha" name="senha" ref={register} />
                <p>{errors.senha?.message}</p>

                <label className="h5 font-weight-bold mt-3" for="data_nasc">Data de Nascimento:</label>
                <input defaultValue={regUsuario.data_nasc} className="input_login w-100" type="date" id="data_nasc" name="data_nasc" ref={register} />
                <p>{errors.data_nasc?.message}</p>

                <label className="h5 font-weight-bold mt-3" for="telefone">Telefone:</label>
                <input defaultValue={regUsuario.telefone} className="input_login w-100" type="text" id="telefone" name="telefone" ref={register} />
                <p>{errors.telefone?.message}</p>

                <div className="borda_form mb-1 p-3 pb-5 mt-3">
                    <legend className="h4 font-weight-bold">Endereço:</legend>

                    <label className="h5 font-weight-bold mt-3" for="logradouro">Logradouro:</label>
                    <input defaultValue={regUsuario.logradouro} className="input_login w-100" type="text" id="logradouro" name="logradouro" ref={register} />
                    <p>{errors.logradouro?.message}</p>

                    <label className="h5 font-weight-bold mt-3" for="complemento">Complemento:</label>
                    <input defaultValue={regUsuario.complemento} className="input_login w-100" type="text" id="complemento" name="complemento" ref={register} />
                    <p>{errors.complemento?.message}</p>

                    <label className="h5 font-weight-bold mt-3" for="cidade">Cidade:</label>
                    <input defaultValue={regUsuario.cidade} className="input_login w-100" type="text" id="cidade" name="cidade" ref={register} />
                    <p>{errors.cidade?.message}</p>

                    <label className="h5 font-weight-bold mt-3" for="bairro">Bairro:</label>
                    <input defaultValue={regUsuario.bairro} className="input_login w-100" type="text" id="bairro" name="bairro" ref={register} />
                    <p>{errors.bairro?.message}</p>

                    <label className="h5 font-weight-bold mt-3" for="cep">CEP:</label>
                    <input defaultValue={regUsuario.cep} className="input_login w-100" type="text" id="cep" name="cep" ref={register} />
                    <p>{errors.cep?.message}</p>
                </div>

                <input className="mt-3 align-self-center btn text-white" id="enviar" type="submit" value="Cadastrar" />

            </form>
        </section>
    );
}

export default FormCadUsuario;
