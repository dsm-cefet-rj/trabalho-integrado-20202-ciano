
export function RelatorioDevolucao(titulo, devolvido, dataEmprestimo, dataDevolucao) {



      return {
            type: 'Devolucao',
            payload: [titulo, devolvido, dataEmprestimo, dataDevolucao]


            // [livros[0].titulo .titulo,usuarios[0].nome ,emprestimos[0].data_devolucao,emprestimos[0].data_emprestimo,
            //emprestimos[0].data_devolvido]



      }

}