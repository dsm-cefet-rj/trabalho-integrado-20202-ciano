import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';

const CadastrarUsuario = () => {
    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Cadastrar Usuário" />

            <section className="perfil_ajuste row justify-content-center corpo_login p-3">
                <form className="row flex-column perfil_formulario col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4 form w-25" action="#" method="POST">
                    <input className=" box_perfil input_login w-100" type="text" name="nome" placeholder="Nome Completo" autofocus />

                    <div className="ajuste1">
                        <span className="font-weight-bold dark ml-1 mr-1 h5"> Categoria:</span>
                        <input className="" type="radio" name="categoria" checked />
                        <span className="h5 text-dark font-weight-bold">Aluno</span>
                        <input name="categoria" className="mr-1 mb-1 ml-1 " type="radio" />
                        <span className="ml-1 text-dark font-weight-bold h5">Professor</span>
                    </div>
                    <input className="input_login w-100 box_perfil" type="text" name="matricula" placeholder="Matricula" />
                    <input className="input_login w-100 box_perfil" type="email" name="email" placeholder="E-mail" />
                    <input className="input_login w-100 box_perfil" type="password" name="senha" placeholder="Senha" />
                    <input className="input_login w-100 box_perfil" type="text" name="data" placeholder="Data Nascimento: xx/xx/xxxx" />
                    <input className="input_login w-100 box_perfil" type="text" name="telefone" placeholder="Telefone: (xx)xxxxx-xxxx" />

                    <div className="borda_form mb-1">
                        <legend className="ml-1 mb-1 mt-1 h5">Endereço:</legend>
                        <input className="input_login box_perfil w-100" type="text" name="logradouro" placeholder="Logradouro" />
                        <input className="input_login box_perfil w-100" type="text" name="complemento" placeholder="Complemento" />
                        <input className="input_login box_perfil w-100" type="text" name="bairro" placeholder="Bairro" />
                        <input className="input_login box_perfil w-100" type="text" name="cep" placeholder="CEP" />
                    </div>
                    <input className=" mt-3 align-self-center btn text-white " id="atualizar" type="submit" value="Cadastrar" />
                </form>
            </section>
        </div>
    );
}

export default CadastrarUsuario;