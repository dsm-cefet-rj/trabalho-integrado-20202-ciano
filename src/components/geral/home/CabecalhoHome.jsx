import React from 'react';
import LogoUniversityLibrary from '../../img/logo-University-Library.svg';

const CabecalhoHome = () => {
    return (
        <header className="row justify-content-center align-items-center cabecalho text-white text-center p-2">
            <img src={LogoUniversityLibrary} alt="Logo da University Library" className="d-md-block mr-1" style={{ width: '60px' }} />
            <h1 className="font-weight-bold">University Library</h1>
        </header>
    );
}
export default CabecalhoHome;