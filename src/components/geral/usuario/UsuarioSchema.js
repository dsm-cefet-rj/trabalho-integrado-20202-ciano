import { date, object, setLocale, string } from 'yup';
import { pt } from 'yup-locale-pt';

setLocale(pt)

const usuarioSchema = object().shape({
    id: string().required(),
    matricula: string().max(20).uppercase().required(),
    senha: string().min(6).required(),
    categoria: string().typeError("É necessário escolher uma das categorias.").required(),
    nome: string().required(),
    email: string().email().required(),
    data_nasc: date().typeError("É necessário preencher esse campo.").max(new Date(), "A Data de Nascimento não pode ser em uma data futura.").required(),
    telefone: string().required(),
    logradouro: string().required(),
    complemento: string().required(),
    cidade: string().required(),
    bairro: string().required(),
    cep: string().required(),
    data_excluido: date().nullable().default("25/02/13")
});

export default usuarioSchema;