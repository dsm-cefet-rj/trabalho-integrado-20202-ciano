import { number, object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const consultarMatriculaSchema = object().shape({

    matricula: string().required(),
});

export default consultarMatriculaSchema;