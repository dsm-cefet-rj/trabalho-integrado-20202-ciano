import { object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const emprestimoSchema = object().shape({

    matricula: string().required(),
    nome: string().required(),
    email: string().email().required(),

    isbn: string().required(),
    titulo: string().required(),
    autor: string().required(),
});

export default emprestimoSchema;