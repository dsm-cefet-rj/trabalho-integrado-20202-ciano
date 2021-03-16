import React from 'react';

function ErrorFormulario4(props) {
    return (
        <>
            {
                props.erros1 ? <div className=" alert mb-1 alert-danger text-danger  ">
                    "campo quantidade só pode conter números inteiros"</div> : ""
            }
            {
                props.erros2 ? <div className="alert alert-danger text-danger ">
                   "campo só admite no mínimo 1 caracter" </div> : ""
            }
             {
                props.erros4 ? <div className="alert alert-danger text-danger ">
                    "campo isbn só pode conter no maximo 10 ou 13 numeros" </div> : ""
            }
            {
                props.erros5 ? <div className="alert alert-danger text-danger ">
                    "campo isbn só pode conter números de 0 até 9" </div> : ""
            }
            {
                props.erros3 ? <div className="alert alert-danger text-danger ">
                    "Existe(m) campo(s) vazio(s) ou com erro(s)" </div> : ""
            }
            


        </>

    )
}
export default ErrorFormulario4; 