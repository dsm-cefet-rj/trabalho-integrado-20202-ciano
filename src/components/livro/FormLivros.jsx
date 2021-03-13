import React from 'react';
const FormLivros = (props) => {
    return (
        <section className="perfil_ajuste  row  justify-content-center  corpo_login  ">
            <form className="row flex-column perfil_formulario col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 form w-25" action="#" method="POST" >
                
                {/* 
                    Título do Livro:
                    - String;
                    - Não pode ser Nulo;
                */}
                <input className="box_perfil input_login mt-5 w-100 mb-5 " type="text" name="titulo" placeholder="Título" />
                
                {/* 
                    Gênero:
                    - String;
                    - Não pode ser Nulo;
                */}
                <input className="box_perfil mb-5  input_login w-100" type="text" name="genero" placeholder="Gênero" />
                
                {/* 
                    Autor do Livro:
                    - String;
                    - Não pode ser Nulo;
                */}
                <input className="box_perfil input_login w-100 mb-5 " type="text" name="autor" placeholder="Autor" />
                
                {/* 
                    ISBN:
                    - String;
                    - Existe dois padrões de ISBN (ISBN-10 e ISBN-13);
                    - Possui digito verificador, com logica diferente dependendo da versão usada;
                    - Formato exemplo ISBN-10: 0-306-40615-2;
                    - Formato exemplo ISBN-13: 978-0-306-40615-7;
                    - Possui 10 ou 13 digitos (desconsiderando a inclusão de traços ou espaços);
                    - Não pode ser Nulo;
                */}
                <input className="input_login mb-5  box_perfil w-100" type="text" name="isbn" placeholder="ISBN" />
                
                {/* 
                    Quantidade de Livros:
                    - Inteiro
                    - Minimo -> 1
                    - Não pode ser Nulo;
                */}
                <input className="input_login w-100 mb-5 box_perfil" type="text" name="quantidade" placeholder="Quantidade" />
                
                {/* 
                    Codigo de Localização:
                    - String
                    - Não pode ser Nulo;
                */}
                <input className="input_login w-100 mb-5 box_perfil" type="text" name="localizacao" placeholder="Cód. localização" />
                
                <input className="mt-2 align-self-center btn" id={props.idNome} type="submit" value={props.btnNome} />
            </form>
        </section>
    );
}
export default FormLivros;