import React from 'react';
import Rodape from '../../utils/Rodape';
import TelaUsuario from './TelaUsuario';
import InfsGeraisMenus from './InfsGeraisMenus';
import btnLivros from '../../img/botoes/btn_Livros.jpg';
import btnFilaDeEspera from '../../img/botoes/btn_FilaDeEspera.jpg';
import btnRenovarEmprestimos from '../../img/botoes/btn_RenovarEmprestimo.jpg';

const MenuInicialUsuario = () => {
    return (
        <div className="container-fluid">
            <TelaUsuario tituloUsuario="Bem vindo," />
            <InfsGeraisMenus img1= {btnLivros} img2= {btnRenovarEmprestimos} img3= { btnFilaDeEspera} />
            <Rodape />
        </div>
    );
}
export default MenuInicialUsuario;