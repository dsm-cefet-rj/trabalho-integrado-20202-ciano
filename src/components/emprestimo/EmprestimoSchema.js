import { object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const emprestimoSchema = object().shape({

    matricula: string().min(10).required(),
    nome: string().required(),
    email: string().email().required(),

    isbn: string().min(17).required(),
    titulo: string().required(),
    autor: string().required(),
});

export default emprestimoSchema;