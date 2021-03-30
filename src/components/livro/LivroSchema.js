import { number, object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const livroSchema = object().shape({

    titulo: string().required(),
    edicao: string().required(),
    autor: string().required(),
    isbn: string().required(),
    quantidade: number().min(1).required(),
    codLocalizacao: string().required(),
});

export default livroSchema;