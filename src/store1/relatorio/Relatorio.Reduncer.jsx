export default function (state=[30],action){
    

    switch(action.type){
        case 'Devolucao':
            return [action.payload]
        default:
            return state
    }




}

