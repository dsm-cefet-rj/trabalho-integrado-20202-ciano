import React from 'react';
import Cabecalho from './CorpoPagina/cabecalho-voltar';
import Rodape from './CorpoPagina/rodape';

const LivroListaDeLivros = () => {
    return (
        <div className="container-fluid">
 
            <Cabecalho titulo="Lista de Livros" />

            <section className=" corpo_listar_livro   row  justify-content-center  corpo_login  ">
                <form className="form_listar_livro formulario_email  col-12 col-sm-10 col-md-7 col-lg-7 col-xl-5 form" action="#" method="POST">


                </form>
            </section>

            <Rodape />
        </div>

    );
}
export default LivroListaDeLivros;