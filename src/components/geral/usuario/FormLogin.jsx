import React, { useState } from 'react';
import ErrorFormulario3 from './validacaousuario/MensagemErro3';
import { useSelector } from 'react-redux';

const CabecalhoLogin = () => {
    const result = useSelector(state => state.relatorio);
    const [dados, setDados] = useState({
        matricula: "",
        senha: " ",
        erros1: false,
        erros2: false,
        erros4: false,
    });
    const onChange = (e) => {
        e.target.value = e.target.value.trim();
        if ([e.target.name].toString() === "matricula") {
            if (/[0-9,a-z]{21}/gi.test(e.target.value)) {
                dados.erros1 = true;
            } else {
                dados.erros1 = false;
            }
            if (/[!,",/,.,=,:,_,^,~,`,´,\-,\\,>,<,|,;,*,#,+,&,¨,%,$,@]/gi.test(e.target.value)) {
                dados.erros2 = true;
            }
            else {
                dados.erros2 = false;
            }
        }

        if ([e.target.name].toString() === "senha") {

            if ((document.getElementById("senha").value).length < 6) {
                dados.erros4 = true;
            } else {
                dados.erros4 = false;
            }
        }
        setDados({
            ...dados,
            [e.target.name]: e.target.value
        })

    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!dados.erros1 && !dados.erros2 && !dados.erros4 && dados.matricula && dados.senha) {

            e.target.reset()
            dados.matricula = "";
        } else {
            setTimeout(() => {
                setDados({
                    erro3: false,
                })
            }, 3000);
            setDados({
                erro3: true,
            })
        }
    }
    return (
        <div>

            <section className="d-flex justify-content-center mx-2 my-1">
                <form onSubmit={onSubmit} className="col-sm-8 col-md-7 col-lg-6 col-xl-4 mx-auto text-center form w-100" action="#" method="POST">
                    <ErrorFormulario3 erros1={dados.erros1} erros2={dados.erros2} erros3={dados.erros3} erros4={dados.erros4} />

                    {/* 
                        Matricula:
                        - String
                        - Máximo de Caracteres -> 20
                        - Não pode ser Nulo
                    */}
                    <input onChange={onChange} className=" input_login col " type="text" name="matricula" placeholder="Matrícula" />
                    {/* 
                        Matricula:
                        - String
                        - Minimo de Caracteres -> 6
                        - Não pode ser Nulo
                    */}
                    <input type="password" onChange={onChange} className="input_login col " id="senha" name="senha" placeholder="***********" />
                    <input className="btn btn-block btn-primary" id="entrar" type="submit" value="Entrar" />
                    <a className="d-flex justify-content-center" href="recuperar-senha.html">Esqueceu a senha?</a>
                </form>
                {result}
            </section>
        </div>
    );
}
export default CabecalhoLogin;