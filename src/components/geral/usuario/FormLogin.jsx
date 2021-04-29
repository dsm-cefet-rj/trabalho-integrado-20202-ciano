import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";
import {loginServer} from "./LoginSlice"

const CabecalhoLogin = () => {
   
    const history = useHistory();
    const dispatch = useDispatch()
    const status = useSelector(state => state.logins.status);
    
    const { register, handleSubmit, errors } = useForm(/*{
            resolver: yupResolver(projetoSchema)
        }*/);
        
    function onSubmit(login){
        console.log(login);
        dispatch(loginServer(login));
    }
      
    useEffect(() => {
        if (status === 'logged_in' ) {
            history.push('/Home');
        }
    }, [status])

    return (
        <div>

            <section className="d-flex justify-content-center mx-2 my-1">
                <form onSubmit={handleSubmit(onSubmit)} className="col-sm-8 col-md-7 col-lg-6 col-xl-4 mx-auto text-center form w-100" action="#" method="GET">
                    

                    {/* 
                        Matricula:
                        - String
                        - Máximo de Caracteres -> 20
                        - Não pode ser Nulo
                    */}
                    <input className=" input_login col " type="text" name="username" id="username"  ref={register} placeholder="Matrícula" />
                    {/* 
                        Matricula:
                        - String
                        - Minimo de Caracteres -> 6
                        - Não pode ser Nulo
                    */}
                    <input type="password" className="input_login col "  name="password" id="password" ref={register}  placeholder="***********" />
                    <input className="btn btn-block btn-primary" id="entrar" type="submit" value="Entrar" />
                    <a className="d-flex justify-content-center" href="recuperar-senha.html">Esqueceu a senha?</a>
                </form>
            
            </section>
        </div>
    );
}
export default CabecalhoLogin;