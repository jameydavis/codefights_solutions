import {isLucky} from './isLucky';

describe('isLucky', () => {
    it('exists', () => {
        expect(isLucky).toBeDefined();
    });

    it('returns true for 11', () => {
        //given
        let ticketNumber = 11;

        //when
        let ans = isLucky(ticketNumber);

        //then
        expect(ans).toBe(true);
    });

    it('returns false for 12', () => {
        //given
        let ticketNumber = 12;

        //when
        let ans = isLucky(ticketNumber);

        //then
        expect(ans).toBe(false);
    });

    it('returns true for 123510', () => {
        //given
        let ticketNumber = 123510;

        //when
        let ans = isLucky(ticketNumber);

        //then
        expect(ans).toBe(true);
    });
});
