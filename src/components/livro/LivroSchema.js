import * as yup from 'yup';
import { ptForm } from 'yup-locale-pt';

yup.setLocale(ptForm);

const SchemaLivro = yup.object().shape({

    titulo: yup.string().required(),
    genero: yup.string().required(),
    autor: yup.string().required(),
    isbn: yup.string().required(),
    quantidade: yup.number().required(),
    codLocalizacao: yup.number().required(),
});

export default SchemaLivro;