import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUsuario } from './UsuariosSlice';
import { selectAllUsuarios, addUsuarioServer, deleteUsuariosServer, fetchUsuarios } from './UsuariosSlice';
const FormCadUsuario = () => {

    const dispatch = useDispatch();

    const [regUsuario, setRegUsuario] = useState({
        id: "",
        nome: "",
        categoria: "",
        matricula: "",
        email: "",
        senha: "",
        data: "",
        telefone: "",
        logradouro: "",
        complemento: "",
        bairro: "",
    });
    const onChangeUsuarios = (e) => {
    
            setRegUsuario({ ...regUsuario, [e.target.name]: e.target.value })

      

       

    }
    const onSubmitUsuarios = (e) => {
        e.preventDefault();
        for (let i = 0; i < 2; i++) {
            console.log(document.getElementById(i.toString()).checked)
            if (document.getElementById(i.toString()).checked) {
                regUsuario.categoria = document.getElementById(i.toString()).value;
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
                        <span className="font-weight-bold dark ml-1 mr-1 h5"> Categoria:</span>
                        <input id="0" value="aluno" className="" type="radio" name="categoria"  />
                        <span className="h5 text-dark font-weight-bold">Aluno</span>
                        <input id="1" value="professor" name="categoria" className="mr-1 mb-1 ml-1 " type="radio" />
                        <span className="ml-1 text-dark font-weight-bold h5">Professor</span>
                    </div>
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="text" name="matricula" placeholder="Matricula" />
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="email" name="email" placeholder="E-mail" />
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="password" name="senha" placeholder="Senha" />
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="text" name="data" placeholder="Data Nascimento: xx/xx/xxxx" />
                    <input onChange={onChangeUsuarios} className="input_login w-100 box_perfil" type="text" name="telefone" placeholder="Telefone: (xx)xxxxx-xxxx" />

                    <div className="borda_form mb-1">
                        <legend className="ml-1 mb-1 mt-1 h5">Endereço:</legend>
                        <input onChange={onChangeUsuarios} className="input_login box_perfil w-100" type="text" name="logradouro" placeholder="Logradouro" />
                        <input onChange={onChangeUsuarios} className="input_login box_perfil w-100" type="text" name="complemento" placeholder="Complemento" />
                        <input onChange={onChangeUsuarios} className="input_login box_perfil w-100" type="text" name="bairro" placeholder="Bairro" />
                        <input onChange={onChangeUsuarios} className="input_login box_perfil w-100" type="text" name="cep" placeholder="CEP" />
                    </div>
                    <input className=" mt-3 align-self-center btn text-white " id="atualizar" type="submit" value="Cadastrar" />
                </form>
            </section>


        </div>


    );
}
export default FormCadUsuario;
