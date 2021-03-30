import { number, object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

export let livroSchema = object().shape({

    titulo: string().required(),
    genero: string().required(),
    autor: string().required(),
    isbn: number().required(),
    quantidade: number().min(1).required(),
    codLocalizacao: string().required(),
});