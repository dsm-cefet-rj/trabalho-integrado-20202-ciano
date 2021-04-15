import { date, object, setLocale, string } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm);

const RelatorioSchema = object().shape({
    titulo: string(),
    data_inicio: date(),
    data_final: date().max(new Date()),
});

export default RelatorioSchema;