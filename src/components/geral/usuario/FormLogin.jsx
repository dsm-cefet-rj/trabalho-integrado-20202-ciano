import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { loginServer } from "./LoginSlice";
import loginSchema from './LoginSchema';

const CabecalhoLogin = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    const status = useSelector(state => state.logins.status);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(loginSchema)
    });

    function onSubmit(login) {
        dispatch(loginServer(login));
    }

    useEffect(() => {
        if (status === 'logged_in') {
            history.push('/menu');
        }
    }, [status, history]);

    let informacaoLogin = '';
    if (status === 'failed')
        informacaoLogin = <p className="alert alert-danger justify-content-center mt-2 align-items-center">'A Matricula ou Senha que você inseriu está incorreta, verifique e tente novamente.'</p>

    return (
        <div>
            <section className="d-flex justify-content-center mx-2 my-1">
                <form onSubmit={handleSubmit(onSubmit)} className="col-sm-8 col-md-7 col-lg-6 col-xl-4 mx-auto text-center form w-100">
                    
                    {informacaoLogin}

                    <input className="input_login col " type="text" name="username" id="" ref={register} placeholder="Matrícula" />
                    <p>{errors.username?.message}</p>

                    <input type="password" className="input_login col " name="password" id="password" ref={register} placeholder="***********" />
                    <p>{errors.password?.message}</p>

                    <input className="btn btn-block btn-primary" id="entrar" type="submit" value="Entrar" />
                    <a className="d-flex justify-content-center" href="recuperar-senha.html">Esqueceu a senha?</a>
                </form>
            </section>
        </div>
    );
}
export default CabecalhoLogin;