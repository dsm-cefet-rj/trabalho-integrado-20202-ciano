import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteLivroServer } from './LivroSlice';

function DeletandoLivro() {
    let dispatch = useDispatch();
    let history = useHistory()
    let { id } = useParams();
    //id = parseInt(id);
    console.log(id)
   dispatch(deleteLivroServer(id))
   history.push('/livro/consultar')
    
return(
    <>
    </>
)
           
  
}
export default DeletandoLivro;