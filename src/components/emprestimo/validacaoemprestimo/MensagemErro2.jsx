import React from 'react';

function ErrorFormulario2(props) {
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
                    "O campo que você esta tentando consultar está vazio ou está com erros" </div> : ""
            }
            {
                props.erros4 ? <div className="alert alert-danger text-danger ">
                    "O campo ISBN só pode conter  10 ou 13 numeros" </div> : ""
            }
            {
                props.erros5 ? <div className="alert alert-danger text-danger ">
                    "O campo ISBN só pode conter números de 0 até 9" </div> : ""
            }
        </>
    )
}
export default ErrorFormulario2;