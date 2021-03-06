import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUsuarios, selectAllUsuarios } from '../geral/usuario/UsuariosSlice';
import matriculaSchema from './ConsultarMatriculaSchema';


const ConsultarMatricula = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const usuarios = useSelector(selectAllUsuarios);
    const status = useSelector(state => state.usuarios.status);

    const [matriculaOnLoad] = useState(matriculaSchema.cast({}));

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchUsuarios());
        } else if (status === 'failed') {
            setTimeout(() => dispatch(fetchUsuarios()), 5000);
        }
    }, [status, dispatch]);

    const onSubmit = (form) => {
        let usuario = usuarios.filter(usuario => usuario.matricula === form.matricula)[0];

        if (typeof usuario !== 'undefined') {
            history.push(props.rota + usuario.id);
        }
        else {
            window.alert("Matrícula não existe no sistema!");
        }
    }

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(matriculaSchema),
    });

    return (
        <section className="row justify-content-center align-items-start flex-grow-1">
            <div className="conteudo col-12 col-sm-10 col-md-7 col-lg-7 col-xl-5 py-4 px-5 my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="row justify-content-center text-center titulo_email h-25 mb-0 mt-3">Ensira a Matrícula</h3>
                    <input className="input_login w-100" type="text" name="matricula" placeholder="Matrícula" defaultValue={matriculaOnLoad.matricula} ref={register} />
                    <br /><span>{errors.matricula?.message}</span>
                    <input className="btn btn-block align-self-center" id="pesq" type="submit" value="Pesquisar" />
                </form>
            </div>
        </section>
    );
}
export default ConsultarMatricula;