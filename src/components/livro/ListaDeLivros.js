import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';

const ListaDeLivros = () => {
    return (
        <div className="container-fluid">
 
            <CabecalhoVoltar titulo="Lista de Livros" />

            <section className=" corpo_listar_livro   row  justify-content-center  corpo_login  ">
                <form className="form_listar_livro formulario_email  col-12 col-sm-10 col-md-7 col-lg-7 col-xl-5 form" action="#" method="POST">


                </form>
            </section>

            <Rodape />
        </div>
    );
}
export default ListaDeLivros;