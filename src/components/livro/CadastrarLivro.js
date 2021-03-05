import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';

const CadastrarLivro = () => {

    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Cadastrar Livro" />

            <section className="perfil_ajuste row justify-content-center  corpo_login">
                <form className="row flex-column perfil_formulario col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 form w-25" action="#" method="POST" >
                    <input autofocus className="input_login mt-5  w-100 mb-5 box_perfil" type="text" name="titulo" placeholder="Título" />
                    <input className="box_perfsil mb-5  input_login w-100" type="text" name="gênero" placeholder="Gênero" />
                    <input className="input_login w-100 mb-5 box_perfil" type="text" name="autor" placeholder="Autor" />
                    <input className="input_login mb-5  box_perfil w-100" type="text" name="isbn" placeholder="ISBN" />
                    <input className="input_login w-100 mb-5 box_perfil" type="text" name="quantidade" placeholder="Quantidade" />
                    <input className="input_login w-100 mb-5 box_perfil" type="text" name="localizacao" placeholder="Cód. localização" />

                    <input className=" mt-2 align-self-center btn" id="cadastrar" type="submit" value="Cadastrar" />
                </form>
            </section>
        </div>
    );
}
export default CadastrarLivro;