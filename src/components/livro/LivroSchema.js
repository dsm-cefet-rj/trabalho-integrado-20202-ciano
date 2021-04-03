import { number, object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const isbnValidation = (value) => {
    let isbn = value.toUpperCase();
    let soma = 0;

    console.log(isbn);

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

    titulo: string().required(),
    edicao: string().required(),
    autor: string().required(),
    isbn: string().trim().min(10).max(13).test(testIsbn).required(),
    quantidade: number().positive().integer().required(),
    codLocalizacao: string().required(),
});

export default livroSchema;