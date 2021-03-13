import React from 'react';
import {Link} from 'react-router-dom';
const InfsGeraisUsuario = (props) => {

    return (
        <div>
            <section className="d-flex sessao justify-content-center mt-1 mb-5 text-white">
                <div className="d-flex flex-column">
                    <Link to={props.linkMenu1}><img src={props.img1} alt="Botão com imagem de livros" className="mb-2 img-thumbnail" /></Link>
                    <Link to={props.linkMenu2}><img src={props.img2} alt="Botão com imagem de livros"  className="mb-2 img-thumbnail" /></Link>
                </div>
            </section>
        </div>
    );
}
export default InfsGeraisUsuario;