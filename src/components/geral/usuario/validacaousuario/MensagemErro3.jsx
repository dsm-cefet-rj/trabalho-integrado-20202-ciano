import React from 'react';

function ErrorFormulario3(props) {
    return (
        <>
            {
                props.erros1 ? <div className=" alert mb-1 alert-danger text-danger  ">
                    "campo só admite no máximo 20 caracteres"</div> : ""
            }
            {
                props.erros2 ? <div className="alert alert-danger text-danger ">
                    "campo matrícula só pode conter  letras de a ate z e números inteiros" </div> : ""
            }

            {
                props.erros4 ? <div className="alert alert-danger text-danger ">
                    "campo senha tem que conter no minimo 6 caracteres" </div> : ""
            }

            {
                props.erros3 ? <div className="alert alert-danger text-danger ">
                    "campo que você esta tentando logar está vazio ou está com erros" </div> : ""
            }

        </>

    )
}
export default ErrorFormulario3; 