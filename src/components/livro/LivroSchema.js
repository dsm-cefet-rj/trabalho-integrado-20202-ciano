import { number, object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const livroSchema = object().shape({

    titulo: string().required(),
    edicao: string().required(),
    autor: string().required(),
    isbn: string().min(17).required(),
    quantidade: number().positive().integer().required(),
    codLocalizacao: string().required(),
});

export default livroSchema;