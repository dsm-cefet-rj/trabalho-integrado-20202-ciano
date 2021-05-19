import React from 'react';
import { useSelector } from 'react-redux';
import btnCadastrarUsuario from '../../img/botoes/btn_CadastrarUsuario.webp';
import btnLivros from '../../img/botoes/btn_Livros.webp';
import btnManterEmprestimos from '../../img/botoes/btn_ManterEmprestimos.webp';
import btnRelatorios from '../../img/botoes/btn_Relatorios.webp';
import btnRenovarEmprestimos from '../../img/botoes/btn_RenovarEmprestimo.webp';
import Rodape from '../../utils/Rodape';
import BotoesMenuIncial from './BotoesMenuIncial';
import TelaUsuario from './TelaUsuario';

const MenuInicial = () => {
    const UserAuth = useSelector(state => state.logins.currentUserAuth);

    let botoes;
    if (UserAuth.categoria === 'bibliotecario') {
        botoes = <BotoesMenuIncial botoes={[
            { link: "/emprestimo", img: btnManterEmprestimos, id: "btnManterEmprestimos" },
            { link: "/livro", img: btnLivros, id: "btnLivros" },
            { link: "/relatorio", img: btnRelatorios, id: "btnRelatorios" },
            { link: "/usuario/cadastrar", img: btnCadastrarUsuario, id: "btnCadastrarUsuario" },
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
            <TelaUsuario tituloUsuario={"Bem vindo, " + (UserAuth.usuario !== null ? UserAuth.usuario.nome : '')} />

            {botoes}

            <Rodape />
        </div>
    );
}
export default MenuInicial;