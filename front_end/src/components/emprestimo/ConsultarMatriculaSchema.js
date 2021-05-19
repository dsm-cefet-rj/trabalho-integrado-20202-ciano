import { object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const consultarMatriculaSchema = object().shape({

    matricula: string().min(10).required(),
});

export default consultarMatriculaSchema;