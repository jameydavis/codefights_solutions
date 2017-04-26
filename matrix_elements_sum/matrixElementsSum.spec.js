import {matrixElementsSum} from './matrixElementsSum';

describe('Matrix Elements Sum', () => {
    it('exists', () => {
        expect(matrixElementsSum).toBeDefined();
    });

    it('matrix with one array containing 0 returns 0', () => {
        //given
        let matrix = [[0]];

        //when
        let sum = matrixElementsSum(matrix);

        //then
        expect(sum).toBe(0);
    });

    it('matrix with one array containing 5 returns 5', () => {
        //given
        let matrix = [[5]];

        //when
        let sum = matrixElementsSum(matrix);

        //then
        expect(sum).toBe(5);
    });

    it('matrix with one array containing more than one element returns the sum of the elements', () => {
        //given
        let matrix = [[5, 3]];

        //when
        let sum = matrixElementsSum(matrix);

        //then
        expect(sum).toBe(8);
    });

    it('matrix returns sum of elements', () => {
        //given
        let matrix = [[5],
                      [3],
                      [7]];

        //when
        let sum = matrixElementsSum(matrix);

        //then
        expect(sum).toBe(15);
    });

    it('matrix returns 0 for any value under a 0', () => {
        //given
        let matrix = [[0],
                      [3]];

        //when
        let sum = matrixElementsSum(matrix);

        //then
        expect(sum).toBe(0);
    });

    it('matrix returns sum for any values not under a 0', () => {
        //given
        let matrix = [[1, 0, 0],
                      [3, 3],
                      [2, 5, 8]];

        //when
        let sum = matrixElementsSum(matrix);

        //then
        expect(sum).toBe(6);
    });
});
