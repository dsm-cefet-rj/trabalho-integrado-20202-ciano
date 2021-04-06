import React from 'react';

const StatusBox = (props) => {
    let resp;

    switch (props.estilo) {
        case 'warning':
            resp =
                <section className="d-flex justify-content-center align-items-center flex-grow-1">
                    <div className="d-flex alert alert-warning justify-content-center mt-2 align-items-center w-50 h-25">
                        <h2 className="h4 text-center">{props.status}</h2>
                    </div>
                </section>
            break;
        default:
            resp =
                <section className="d-flex justify-content-center align-items-center flex-grow-1">
                    <div className="d-flex alert alert-info justify-content-center mt-2 align-items-center w-50 h-25">
                        <h2 className="h4 text-center">{props.status}</h2>
                    </div>
                </section>
    }

    return (resp);
}
export default StatusBox;