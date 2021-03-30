import React from 'react';
import { useDispatch} from 'react-redux';

import { deleteLivroServer } from './LivroSlice';
import { useParams, useHistory,Link } from 'react-router-dom';
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