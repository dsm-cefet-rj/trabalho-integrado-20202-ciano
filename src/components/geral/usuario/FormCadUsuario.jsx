import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsuarioServer } from './UsuariosSlice';
const FormCadUsuario = () => {

    const dispatch = useDispatch();
    const [enderecoUsuarios, setEnderecoUsuarios] = useState({
        logradouro: "",
        complemento: "",
        cidade: "",
        bairro: "",
        cep: "",
    }

    )
    const [regUsuario, setRegUsuario] = useState({
        id: "",
        matricula: "",
        senha: "",
        categoria: "",
        nome: "",
        email: "",
        data_nasc: "",
        telefone: "",
        endereco: {},
        data_excluido: null
    });
    const onChangeUsuarios = (e) => {

        setRegUsuario({ ...regUsuario, [e.target.name]: e.target.value })
    }
    const onChangeUsuarios2 = (e) => {
        setEnderecoUsuarios({ ...enderecoUsuarios, [e.target.name]: e.target.value })


        setRegUsuario({ ...regUsuario, [e.target.name]: e.target.value })




    }
    const onSubmitUsuarios = (e) => {
        e.preventDefault();
        regUsuario.endereco = enderecoUsuarios
        console.log(enderecoUsuarios)
        for (let i = 0; i < 3; i++) {
            if (document.getElementById(i.toString()).checked) {
                regUsuario.categoria = document.getElementById(i.toString()).value;
                break
            }

        }
        dispatch(addUsuarioServer(regUsuario));
    }
    return (
        <div>
            <section className="perfil_ajuste row justify-content-center corpo_login p-3">
                <form onSubmit={onSubmitUsuarios} className="row flex-column perfil_formulario col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4 form w-25" action="#" method="POST">
                    <input onChange={onChangeUsuarios} className=" box_perfil input_login w-100" type="text" name="nome" placeholder="Nome Completo" autofocus />

                    <div className="ajuste1">

                        <span className="font-weight-bold dark ml-0 mr-1 h5"> Categoria:</span>
                        <input id="0" value="aluno" className=" mt-4 h-25" type="radio" name="categoria" />
                        <span className="h6 text-dark ml-1 font-weight-bold">Aluno</span>
                        <input id="1" value="professor" name="categoria" className="mr-1 mb-1 ml-1 h-25 " type="radio" />
                        <span className="ml-1 text-dark font-weight-bold h6">Professor</span>
                        <input id="2" value="bibliotecario" name="categoria" className="mx-1 my-0 h-25" type="radio" />
                        <span className="ml-1 text-dark  font-weight-bold h6">bibliotecário</span>
                        <span className="font-weight-bold dark ml-1 mr-1 h5"> Categoria:</span>
                        <input id="0" value="aluno" className="" type="radio" name="categoria" />
                        <span className="h5 text-dark font-weight-bold">Aluno</span>
                        <input id="1" value="professor" name="categoria" className="mr-1 mb-1 ml-1 " type="radio" />
                        <span className="ml-1 text-dark font-weight-bold h5">Professor</span> 2a8ae82b8644cd47bff693ef2d5aac698f8bae82
                    </div>
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="text" name="matricula" placeholder="Matricula" />
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="email" name="email" placeholder="E-mail" />
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="password" name="senha" placeholder="Senha" />
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="text" name="data_nasc" placeholder="Data Nascimento: xx/xx/xxxx" />
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="text" name="telefone" placeholder="Telefone: (xx)xxxxx-xxxx" />
                    <div className="borda_form mb-1">
                        <legend className="ml-1 mb-0 mt-0 h5">Endereço:</legend>
                        <input onChange={onChangeUsuarios2} className="input_login box_perfil w-100" type="text" name="logradouro" placeholder="Logradouro" />
                        <input onChange={onChangeUsuarios2} className="input_login box_perfil w-100" type="text" name="complemento" placeholder="Complemento" />
                        <input onChange={onChangeUsuarios2} className="input_login box_perfil w-100" type="text" name="cidade" placeholder="Cidade" />
                        <input onChange={onChangeUsuarios2} className="input_login box_perfil w-100" type="text" name="bairro" placeholder="Bairro" />
                        <input onChange={onChangeUsuarios2} className="input_login box_perfil w-100" type="text" name="cep" placeholder="CEP" />
                    </div>
                    <input className=" mt-1 align-self-center btn text-white " id="atualizar" type="submit" value="Cadastrar" />
                </form>
            </section>


        </div>


    );
}
export default FormCadUsuario;
