import React from 'react';
import CapaLivro from '../img/capa-livro-exemplo.svg';
import TabelaFormatada from '../utils/TabelaFormatada';

const autoresFormatado = (autores) => {
    let autorF = ["Autor:", ""];
    if (autores.length > 0) {
        let aux = 0;

        autores.forEach(
            (autor) => {
                if (aux === 0)
                    autorF[1] = autor;
                else {
                    autorF[0] = "Autores:"
                    autorF[1] = autorF[1].concat(', ', autor);
                }
                ++aux;
            }
        )
    }
    return autorF;
}

const InfoCompletaLivro = (props) => {
    let livro = props.livro;
    let autores = autoresFormatado(livro.autores);

    return (
        <>
            <img src={CapaLivro} alt="Livro fechado" className="size-book-10" />

            <div className="table-responsive">

                <TabelaFormatada titulo="Livro" informacoes={[
                    { th: 'Título:', td: livro.titulo },
                    { th: 'Edição:', td: livro.edicao },
                    { th: autores[0], td: autores[1] },
                    { th: 'Cod. Localização:', td: livro.cod_localizacao },
                    { th: 'ISBN:', td: livro.isbn },
                    { th: 'Quantidade Total:', td: livro.qtd_total + (livro.qtd_total > 1 ? ' livros' : ' livro') }
                ]} />
            </div>
        </>
    );
}
export default InfoCompletaLivro;