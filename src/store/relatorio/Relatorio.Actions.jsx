export function RelatorioDevolucao(titulo, devolvido, dataEmprestimo, dataDevolucao) {

      return {
            type: 'Devolucao',
            payload: [titulo, devolvido, dataEmprestimo, dataDevolucao]
      }
}