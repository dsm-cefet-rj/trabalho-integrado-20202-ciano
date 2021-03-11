import React from 'react';
import {Link} from 'react-router-dom';
const InfsGeraisUsuario = (props) => {

    return (
        <div>
            <section className="d-flex sessao justify-content-center mt-1 mb-5 text-white">
                <div className="d-flex flex-column">
                    <Link to={props.linkMenu2}><img src={props.img1}  className="mb-2 img-thumbnail" /></Link>
                    <Link to={props.linkMenu3}><img src={props.img2}  className="mb-2 img-thumbnail " /></Link>
                    <Link to={props.linkMenu4}><img src={props.img3}  className=" mb-5 img-thumbnail" /></Link>
                </div>
            </section>
        </div>
    );
}
export default InfsGeraisUsuario;