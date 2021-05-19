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
        usuario.data_excluido = null;

        dispatch(addUsuarioServer(usuario));
       history.push('/menu');
    }
    
    return (
        <section className="row justify-content-center flex-grow-1">
            <form onSubmit={handleSubmit(onSubmit)} className="row flex-column perfil_formulario2 col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4 w-25 p-4 my-2 my-sm-4">

                <label className="h5 font-weight-bold mt-3" htmlFor="nome">Nome Completo:</label>
                <input defaultValue={regUsuario.nome} className="input_login w-100" type="text" id="nome" name="nome" ref={register} autoFocus />
                <p>{errors.nome?.message}</p>


                <legend className="font-weight-bold h5">Categoria:</legend>
                <select {...register("categoria")} name="categoria" id="categoria" className="form-control" ref={register}>
                    <option value="">--- Selecione uma opção --- </option>
                    <option value="aluno">Aluno</option>
                    <option value="professor">Professor</option>
                    <option value="bibliotecario">Bibliotecário</option>
                </select>
                <p>{errors.categoria?.message}</p>

                <label className="h5 font-weight-bold mt-3" htmlFor="matricula">Matrícula:</label>
                <input defaultValue={regUsuario.matricula} className="input_login w-100" type="text" id="matricula" name="matricula" ref={register} />
                <p>{errors.matricula?.message}</p>

                <label className="h5 font-weight-bold mt-3" htmlFor="email">E-mail:</label>
                <input defaultValue={regUsuario.email} className="input_login w-100" type="email" id="email" name="email" ref={register} />
                <p>{errors.email?.message}</p>

                <label className="h5 font-weight-bold mt-3" htmlFor="senha">Senha:</label>
                <input defaultValue={regUsuario.senha} className="input_login w-100" type="password" id="senha" name="senha" ref={register} />
                <p>{errors.senha?.message}</p>

                <label className="h5 font-weight-bold mt-3" htmlFor="data_nasc">Data de Nascimento:</label>
                <input defaultValue={regUsuario.data_nasc} className="input_login w-100" type="date" id="data_nasc" name="data_nasc" ref={register} />
                <p>{errors.data_nasc?.message}</p>

                <label className="h5 font-weight-bold mt-3" htmlFor="telefone">Telefone:</label>
                <input defaultValue={regUsuario.telefone} className="input_login w-100" type="text" id="telefone" name="telefone" ref={register} />
                <p>{errors.telefone?.message}</p>

                <div className="borda_form mb-1 p-3 pb-5 mt-3">
                    <legend className="h4 font-weight-bold">Endereço:</legend>

                    <label className="h5 font-weight-bold mt-3" htmlFor="logradouro">Logradouro:</label>
                    <input defaultValue={regUsuario.logradouro} className="input_login w-100" type="text" id="logradouro" name="logradouro" ref={register} />
                    <p>{errors.logradouro?.message}</p>

                    <label className="h5 font-weight-bold mt-3" htmlFor="complemento">Complemento:</label>
                    <input defaultValue={regUsuario.complemento} className="input_login w-100" type="text" id="complemento" name="complemento" ref={register} />
                    <p>{errors.complemento?.message}</p>

                    <label className="h5 font-weight-bold mt-3" htmlFor="cidade">Cidade:</label>
                    <input defaultValue={regUsuario.cidade} className="input_login w-100" type="text" id="cidade" name="cidade" ref={register} />
                    <p>{errors.cidade?.message}</p>

                    <label className="h5 font-weight-bold mt-3" htmlFor="bairro">Bairro:</label>
                    <input defaultValue={regUsuario.bairro} className="input_login w-100" type="text" id="bairro" name="bairro" ref={register} />
                    <p>{errors.bairro?.message}</p>

                    <label className="h5 font-weight-bold mt-3" htmlFor="cep">CEP:</label>
                    <input defaultValue={regUsuario.cep} className="input_login w-100" type="text" id="cep" name="cep" ref={register} />
                    <p>{errors.cep?.message}</p>
                </div>

                <input className="mt-3 align-self-center btn text-white" id="enviar" type="submit" value="Cadastrar" />

            </form>
        </section>
    );
}

export default FormCadUsuario;
