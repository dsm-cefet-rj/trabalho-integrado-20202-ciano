import React, { useState } from 'react';
import ErrorFormulario from './validacaoemprestimo/MensagemErro1';

const ConsultarMatricula = () => {
    const [dados, setDados] = useState({
        matricula: "",
        erros1: false,
        erros2: false,
        erro3: false

    });
    const onChange = (e) => {
        e.target.value = e.target.value.trim();

        if (/[0-9,a-z]{21}/gi.test(e.target.value)) {

            dados.erros1 = true;
        } else {
            dados.erros1 = false;
        }
        if (/[!,",/,.,=,:,_,^,~,`,´,\-,>,<,|,;,*,#,+,&,¨,%,$,@]/gi.test(e.target.value)) {
            dados.erros2 = true;
        }
        else {
            dados.erros2 = false;
        }

        setDados({
            ...dados,
            [e.target.name]: e.target.value
        })

    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!dados.erros1 && !dados.erros2 && dados.matricula) {

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
        <div className="mt-2">
            <div className="col-11 h5 col-sm-8 col-md-6 col-lg-4  mx-auto text-center  ">
                <ErrorFormulario erros1={dados.erros1} erros2={dados.erros2} erros3={dados.erro3} />
            </div>
            <section className="row justify-content-center corpo_login my-5">
                <form onSubmit={onSubmit} className="formulario_email col-12 col-sm-10 col-md-7 col-lg-7 col-xl-5 h-100 w-25" action="#" method="POST">
                    <h3 className="row justify-content-center text-center titulo_email h-25 mb-0 mt-3">Ensira a Matrícula do Aluno</h3>
                    <input onChange={onChange} className="input_login w-100" type="text" name="matricula" placeholder="Matrícula" />
                    <input className="btn btn-block align-self-center" id="pesq" type="submit" value="Pesquisar" />
                </form>
            </section>
        </div>
    );
}
export default ConsultarMatricula;