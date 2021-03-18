export function ConsultarMatricula(matricula) {
    return {
        type: 'CONSULTA_MATRICULA',
        payload: matricula
    }
}
export function ConsultarIsbn(isbn) {
    return {
        type: 'CONSULTA_ISBN',
        payload: isbn

    }
}