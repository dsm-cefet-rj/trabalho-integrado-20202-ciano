import { object, setLocale, string } from 'yup';
import { pt } from 'yup-locale-pt';

setLocale(pt)

const usuarioSchema = object().shape({
    username: string().label('Matricula').required().max(20).uppercase(),
    password: string().label('Senha').required().min(6)
});

export default usuarioSchema;