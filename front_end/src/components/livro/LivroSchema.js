import { number, object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

/* 
ISBN:
    - String;
    - Existe dois padrões de ISBN (ISBN-10 e ISBN-13);
    - Possui digito verificador, com logica diferente dependendo da versão usada;
    - Formato exemplo ISBN-10: 0-306-40615-2;
    - Formato exemplo ISBN-13: 978-0-306-40615-7;
    - Possui 10 ou 13 digitos (desconsiderando a inclusão de traços ou espaços);
    - Não pode ser Nulo;
*/

const isbnValidation = (value) => {
    let isbn = value.toUpperCase();
    let soma = 0;

    if (isbn.length === 10) {
        for (let i = 0; i < isbn.length; i++) {
            let digito = parseInt(isbn.charAt(i));

            //Transforma o digito verificador X em 10
            if ((i === isbn.length - 1) && (isbn.charAt(i).toUpperCase() === 'X')) {
                digito = 10;
            }

            if (!isNaN(digito))
                soma += digito * (i + 1);

            else
                return false;
        }
        let resp = soma % 11;
        return resp === 0;

    } else if (isbn.length === 13) {
        for (let i = 0; i < isbn.length - 1; i++) {
            let digito = parseInt(isbn.charAt(i));
            let multiplicador;

            if (i % 2 === 0) //verifica se o i é par
                multiplicador = 1;
            else
                multiplicador = 3;

            if (!isNaN(digito))
                soma += digito * multiplicador;
            else
                return false;
        }
        let resp = 10 - (soma % 10);

        return resp.toString() === isbn.charAt(12);
    }

    return false;
}

export const testIsbn = {
    name: 'isbn',
    message: 'O campo deve ter um ISBN válido.',
    test: isbnValidation
}

const livroSchema = object().shape({
    id: string(),
    titulo: string().required(),
    edicao: string().required(),
    autores: string().required(),
    isbn: string().trim().min(10).max(13).test(testIsbn).required(),
    qtd_total: number().typeError('O campo deve contar apenas número.').min(1).positive().integer().required(),
    cod_localizacao: string().required(),
});

export default livroSchema;