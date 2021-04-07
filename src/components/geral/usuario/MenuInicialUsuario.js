import React from 'react';
import btnLivros from '../../img/botoes/btn_Livros.jpg';
import btnRenovarEmprestimos from '../../img/botoes/btn_RenovarEmprestimo.jpg';
import Rodape from '../../utils/Rodape';
import InfsGeraisMenus from './InfsGeraisMenus';
import TelaUsuario from './TelaUsuario';

const MenuInicialUsuario = () => {
    return (
        <div className="container-fluid">
            <TelaUsuario tituloUsuario="Bem vindo," />

            <InfsGeraisMenus
                img1={btnLivros}
                img2={btnRenovarEmprestimos}
                linkMenu1={"/livro"}
                linkMenu2={"/emprestimo/renovar"}
            />

            <Rodape />
        </div>
    );
}
export default MenuInicialUsuario;