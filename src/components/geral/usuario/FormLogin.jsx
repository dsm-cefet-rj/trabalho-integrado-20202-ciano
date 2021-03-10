import React from 'react';
const CabecalhoLogin = () => {
    return (
        <div>
            <section className="d-flex justify-content-center mx-2 my-1">
                <form className="col-sm-8 col-md-7 col-lg-6 col-xl-3 form w-100" action="#" method="POST">
                    <input className=" input_login col " type="text" name="matricula" placeholder="Matrícula" />
                    <input className="input_login  col " type="password" name="senha" placeholder="Senha" />
                    <input className="btn btn-block btn-primary" id="entrar" type="submit" value="Entrar" />
                    <a className="d-flex justify-content-center" href="recuperar-senha.html">Esqueceu a senha?</a>
                </form>

            </section>
        </div>
    );
}
export default CabecalhoLogin;