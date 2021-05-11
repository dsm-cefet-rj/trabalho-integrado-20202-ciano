import React from 'react';
import { useSelector } from 'react-redux';
import btnCadastrarUsuario from '../../img/botoes/btn_CadastrarUsuario.jpg';
import btnLivros from '../../img/botoes/btn_Livros.jpg';
import btnManterEmprestimos from '../../img/botoes/btn_ManterEmprestimos.jpg';
import btnRelatorios from '../../img/botoes/btn_Relatorios.jpg';
import btnRenovarEmprestimos from '../../img/botoes/btn_RenovarEmprestimo.jpg';
import Rodape from '../../utils/Rodape';
import BotoesMenuIncial from './BotoesMenuIncial';
import TelaUsuario from './TelaUsuario';

const MenuInicialBibliotecario = () => {
    // const UserAuthStatus = useSelector(state => state.logins.state);
    const UserAuth = useSelector(state => state.logins.currentUserAuth);

    let botoes;
    if (UserAuth.categoria === 'bibliotecario') {
        botoes = <BotoesMenuIncial botoes={[
            { link: "/emprestimo", img: btnManterEmprestimos },
            { link: "/livro", img: btnLivros },
            { link: "/relatorio", img: btnRelatorios },
            { link: "/usuario/cadastrar", img: btnCadastrarUsuario },
        ]} />;
    }
    else {
        botoes = <BotoesMenuIncial botoes={[
            { link: "/livro", img: btnLivros },
            { link: "/emprestimo/renovar", img: btnRenovarEmprestimos },
        ]} />;
    }

    return (
        <div className="container-fluid d-flex flex-column">
            <TelaUsuario tituloUsuario={"Bem vindo, " + (typeof UserAuth.usuario !== 'undefined' ? UserAuth.usuario.nome : '')} />

            {botoes}

            <Rodape />
        </div>
    );
}
export default MenuInicialBibliotecario;