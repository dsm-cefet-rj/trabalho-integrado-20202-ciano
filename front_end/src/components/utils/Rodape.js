import React from 'react';
import LogoRodape from '../img/logo-University-Library.svg';

const Rodape = () => {
    return (
        <footer className="row rodape justify-content-center text-white">
            <div className="d-flex p-3 align-items-center">
                <img src={LogoRodape} alt="Logo da University Library" />
                <h6 className="p-1 font-weight-bold">University Library (2021)</h6>
            </div>
        </footer>
    );
}
export default Rodape;