import React from 'react';
const InfsGeraisUsuario = (props) => {
    return (
        <div>
            <section className="d-flex sessao justify-content-center mt-1 mb-5 text-white">
                <div className="d-flex flex-column">
                    <a href=""><img src={props.img1} alt="Livros" className="mb-2 img-thumbnail" /></a>
                    <a href=""><img src={props.img2} alt="Renovar Emprestimo" className="mb-2 img-thumbnail " /></a>
                    <a href=""><img src={props.img3} alt="Fila de Espera" className=" mb-5 img-thumbnail" /></a>
                </div>
            </section>
        </div>
    );
}
export default InfsGeraisUsuario;