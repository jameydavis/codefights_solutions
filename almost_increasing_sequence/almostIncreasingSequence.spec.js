import {almostIncreasingSequence} from './almostIncreasingSequence';

describe('Almost Increasing Sequence', () => {
    it('exists', () => {
        expect(almostIncreasingSequence).toBeDefined();
    });

    it('2 element array returns true', () => {
        //given
        let sequence = [1, 2];

        //when
        let ans = almostIncreasingSequence(sequence);

        //then
        expect(ans).toBe(true);
    });

    it('3 same element array returns false', () => {
        //given
        let sequence = [1, 1, 1];

        //when
        let ans = almostIncreasingSequence(sequence);

        //then
        expect(ans).toBe(false);
    });

    it('3 incrementing element array returns true', () => {
        //given
        let sequence = [1, 2, 3];

        //when
        let ans = almostIncreasingSequence(sequence);

        //then
        expect(ans).toBe(true);
    });

    it('3 decrementing element array returns false', () => {
        //given
        let sequence = [3, 2, 1];

        //when
        let ans = almostIncreasingSequence(sequence);

        //then
        expect(ans).toBe(false);
    });

    it('3 element array with 1st value incorrect returns true', () => {
        //given
        let sequence = [3, 1, 2];

        //when
        let ans = almostIncreasingSequence(sequence);

        //then
        expect(ans).toBe(true);
    });

    it('3 element array with 2nd value incorrect returns true', () => {
        //given
        let sequence = [1, 3, 2];

        //when
        let ans = almostIncreasingSequence(sequence);

        //then
        expect(ans).toBe(true);
    });

    it('3 element array with 3rd value incorrect returns true', () => {
        //given
        let sequence = [2, 3, 1];

        //when
        let ans = almostIncreasingSequence(sequence);

        //then
        expect(ans).toBe(true);
    });

    it('4 element array with 2 incorrect values returns false', () => {
        //given
        let sequence = [1, 2, 1, 2];

        //when
        let ans = almostIncreasingSequence(sequence);

        //then
        expect(ans).toBe(false);
    });

    it('codefights array', () => {
        let sequence = [1, 2, 3, 4, -5, 5, 6];
        let ans = almostIncreasingSequence(sequence);
        expect(ans).toBe(true);
    })
});
