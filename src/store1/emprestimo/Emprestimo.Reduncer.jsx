import { usuarios, livros } from '../../mocks/db.json';
export default function EmprestimoReducer(state = " ", action) {
    switch (action.type) {
        case 'CONSULTA_MATRICULA':
            const Filtro_Aluno = (((usuarios.filter((aluno1) => { return action.payload === aluno1.matricula }))).map(aluno2 => {
                return { nome: aluno2.nome, email: aluno2.email }
            }))
            if (Filtro_Aluno.length === 0) {
                return ([{ nome: "", email: "" }]);
            }
            return Filtro_Aluno;

        case 'CONSULTA_ISBN':
            const FiltroLivro = ((livros.filter((livro1) => { return Number(action.payload) === livro1.isbn }))).map(livro2 => {
                return { titulo: livro2.titulo, autores: livro2.autores }
            })

            if (FiltroLivro.length === 0) {
                return ([{ titulo: "", autores: "" }]);
            }
            return FiltroLivro;
        default:
            return state
    }




}

