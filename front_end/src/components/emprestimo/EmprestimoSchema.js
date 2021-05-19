import { number, object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';
import {testIsbn} from '../livro/LivroSchema';

setLocale(ptForm);

const emprestimoSchema = object().shape({
    matricula: string().min(10).required(),
    idUsuario: number().notRequired(),

    isbn: string().trim().min(10).max(13).test(testIsbn).required(),
    idLivro: number().notRequired()
});

export default emprestimoSchema;