export function RegistrarEmprestimoConsultar(matricula) {
    return {
        type: 'CONSULTA_MATRICULA',
        payload: matricula
    }
}
export function RegistrarEmprestimoConsultar2(isbn) {
    return {
        type: 'CONSULTA_ISBN',
        payload: isbn

    }
}