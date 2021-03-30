import { date, string, number, object, setLocale } from 'yup';
import { pt } from 'yup-locale-pt';

setLocale(pt)

export let usuarioSchema = object().shape(
    {
        id: number(),
        matricula: string().max(20).required(),
        senha: string().min(6).required(),
        categoria: string().required(),
        nome: string().required(),
        email: string().email().required(),
        data_nasc: date(),
        telefone: string(),
        logradouro: string(),
        complemento: string(),
        cidade: string(),
        bairro: string(),
        cep: string()
    }
)