import React from 'react';
import LogoRodape from '../IMG/logo-University-Library.svg';

const Rodape = () => {
    return(
        <footer class="row rodape justify-content-center text-white">
            <div class="d-flex p-3 align-items-center">
                <img src={LogoRodape} alt="Logo da University Library" />
                <h6 class="p-1 font-weight-bold">University Library (2021)</h6>
            </div>
        </footer>
    );
}
export default Rodape;