import {allLongestStrings} from './allLongestStrings';

describe('allLongestStrings', () => {
    it('exists', () => {
        expect(allLongestStrings).toBeDefined();
    });

    it('given an array with 1 string it returns that string', () => {
        //given
        let arr = ["123"];

        //when
        let longestString = allLongestStrings(arr);

        //then
        expect(longestString).toEqual(["123"]);
    });

    it('given an array with multiple strings it returns the longest string', () => {
        //given
        let arr = ["123", "12345", "12"];

        //when
        let longestString = allLongestStrings(arr);

        //then
        expect(longestString).toEqual(["12345"]);
    });

    it('given an array with multiple strings it returns all the longest strings', () => {
        //given
        let arr = ["123", "12345", "12", "45678", "4", "90123"];

        //when
        let longestString = allLongestStrings(arr);

        //then
        expect(longestString).toEqual(["12345", "45678", "90123"]);
    });
});
