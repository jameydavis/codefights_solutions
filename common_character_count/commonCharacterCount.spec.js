import {commonCharacterCount} from './commonCharacterCount';

describe('Common Character Count', () => {
    it('exists', () => {
        expect(commonCharacterCount).toBeDefined();
    });

    it('for 2 strings with "a" and "a" it returns 1', () => {
        //given
        let s1 = "a";
        let s2 = "a";

        //when
        let count = commonCharacterCount(s1, s2);

        //then
        expect(count).toBe(1);
    });

    it('for 2 strings with "abc" and "aba" it returns 2', () => {
        //given
        let s1 = "abc";
        let s2 = "aba";

        //when
        let count = commonCharacterCount(s1, s2);

        //then
        expect(count).toBe(2);
    });

    it('for 2 strings with same lengths and different counts of letters it returns the correct count', () => {
        //given
        let s1 = "aabcc";
        let s2 = "adcaa";

        //when
        let count = commonCharacterCount(s1, s2);

        //then
        expect(count).toBe(3);
    });

    it('for 2 strings with different lengths and same letters it returns the count of the shorter string', () => {
        //given
        let s1 = "zzzz";
        let s2 = "zzzzzzzzzz";

        //when
        let count = commonCharacterCount(s1, s2);

        //then
        expect(count).toBe(4);
    });

});
