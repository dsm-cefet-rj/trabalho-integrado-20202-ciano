import React from 'react';

function ErrorFormulario(props) {
    return (
        <>
            {
                props.erros1 ? <div className=" alert mb-1 alert-danger text-danger  ">
                    "O campo só admite no máximo 20 caracteres"</div> : ""
            }
            {
                props.erros2 ? <div className="alert alert-danger text-danger ">
                    "O campo Matrícula só pode conter letras de A atá Z e números" </div> : ""
            }
            {
                props.erros3 ? <div className="alert alert-danger text-danger ">
                    "O campo Matrícula está vazio ou está com erros" </div> : ""
            }


        </>

    )
}
export default ErrorFormulario; 