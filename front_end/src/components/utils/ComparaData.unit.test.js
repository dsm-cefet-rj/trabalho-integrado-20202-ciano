import '@testing-library/jest-dom/extend-expect';
import ComparaData from './ComparaData';

describe('ComparaData unit', function () {
    
    test('Parâmetros vazios', () => {
        expect(ComparaData()).toBeUndefined()
    });
    
    test('Parâmetros null formato brasileiro', () => {
        expect(ComparaData(null, null, true)).toBeUndefined()
    });

    test('Parâmetros null', () => {
        expect(ComparaData(null, null)).toBeUndefined()
    });

    test('Data1 menor Data2 no formato brasileiro', () => {
        expect(ComparaData('28/02/2020', '01/03/2020', true)).toBe(-1)
    });

    test('Data1 maior Data2 no formato brasileiro', () => {
        expect(ComparaData('01/03/2020', '28/02/2020', true)).toBe(1)
    });

    test('Data1 igual Data2 no formato brasileiro', () => {
        expect(ComparaData('28/02/2020', '28/02/2020', true)).toBe(0)
    });

    test('Data1 menor Data2 no formato Date()', () => {
        expect(ComparaData(new Date(2020,2,28), new Date(2020,3,1))).toBe(-1)
    });

    test('Data1 maior Data2 no formato Date()', () => {
        expect(ComparaData(new Date(2020,3,1), new Date(2020,2,28))).toBe(1)
    });

    test('Data1 igual Data2 no formato Date()', () => {
        expect(ComparaData(new Date(), new Date())).toBe(0)
    });
});