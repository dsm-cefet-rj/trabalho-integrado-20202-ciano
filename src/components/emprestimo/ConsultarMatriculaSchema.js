import { object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const consultarMatriculaSchema = object().shape({

    matricula: string().max(20).required(),
});

export default consultarMatriculaSchema;