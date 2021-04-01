import { date, object, setLocale, string } from 'yup';
import { pt } from 'yup-locale-pt';

setLocale(pt)

const usuarioSchema = object().shape({
    id: string().required(),
    matricula: string().max(20).required(),
    senha: string().min(6).required(),
    categoria: string().required(),
    nome: string().required(),
    email: string().email().required(),
    data_nasc: date().required(),
    telefone: string().required(),
    logradouro: string().required(),
    complemento: string().required(),
    cidade: string().required(),
    bairro: string().required(),
    cep: string().required(),
});

export default usuarioSchema;