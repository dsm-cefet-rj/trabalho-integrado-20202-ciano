/**
 * Compara a data1 com a data2 e verifica se a data1 é maior, menor ou igual a data2.
 * 
 * @param {Date | string} data1 
 * @param {Date | string} data2 
 * @param {boolean} padraoBr Por default é false. Caso seja true, aceita que a data1 e data2 seja passada como string no padrão brasileiro ex:"25/02/2020".
 * @returns {number} Retorna -1 se data1 for menor, retorna 1 se a data1 for maior e retorna 0 se a data1 for igual a data2.
 */
const ComparaData = (data1, data2, padraoBr = false) => {
    if (typeof data1 === 'string' && typeof data2 === 'string' || Date.prototype.isPrototypeOf(data1) && Date.prototype.isPrototypeOf(data2)) {
        if (typeof data1 === 'string' && typeof data2 === 'string' && padraoBr) {
            let dataArr = data1.split('/')
            data1 = new Date(dataArr[2], (dataArr[1] - 1), dataArr[0]);
            dataArr = data2.split('/')
            data2 = new Date(dataArr[2], (dataArr[1] - 1), dataArr[0]);
        }

        if (data1.getTime() < data2.getTime())
            return -1;
        else if (data1.getTime() > data2.getTime())
            return 1;
        else
            return 0;
    }
    return undefined;
}
export default ComparaData;