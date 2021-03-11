import React from 'react';
import LogoUniversityLibrary from '../../img/logo-University-Library.svg';
import {Link} from 'react-router-dom';
const CabecalhoLogin = () => {
    return (
        <div>
            <header className="d-flex justify-content-center align-items-center">
            <Link to="/" ><img src={LogoUniversityLibrary} alt="A imagem da logo não carregou" className="mt-5 ajuste4 mb-3" /></Link>   
            </header>
        </div>
    );
}
export default CabecalhoLogin;