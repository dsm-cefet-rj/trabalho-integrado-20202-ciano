import React from 'react';

function ErrorFormulario(props) {
    return (
        <>
            {
                props.erros1 ? <div className=" alert mb-1 alert-danger text-danger  ">
                    "campo só admite no máximo 20 caracteres"</div> : ""
            }
            {
                props.erros2 ? <div className="alert alert-danger text-danger ">
                    "campo matrícula só pode conter  letras de a ate z e números" </div> : ""
            }
            {
                props.erros3 ? <div className="alert alert-danger text-danger ">
                    "campo Matrícula está vazio ou está com erros" </div> : ""
            }


        </>

    )
}
export default ErrorFormulario; 