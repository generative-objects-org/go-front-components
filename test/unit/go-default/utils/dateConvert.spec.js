import {
    getDashedDate,
    getDateFromSlashedDate
} from '@/utils/dateConverters.js';

describe('dateConverter', () => {
    describe('getDashedDate', () => {
        it('should return null if not a date', () => {
            expect(getDashedDate(null)).toEqual(null);
            expect(getDashedDate('test')).toEqual(null);
            expect(getDashedDate(12)).toEqual(null);
            expect(getDashedDate(new Date('a'))).toEqual(null);
        });

        const testInputs = [
            {
                input: new Date(2018, 10, 10),
                expected: '2018-11-10',
                desc: 'without leading zeroes'
            },
            {
                input: new Date(2018, 2, 1),
                expected: '2018-03-01',
                desc: 'with leading zeroes'
            }
        ];

        testInputs.forEach(val => {
            it('should return the dashed version of a date ' + val.desc, () => {
                expect(getDashedDate(val.input)).toEqual(val.expected);
            });
        });
    });

    describe('getDateFromSlashedDate', () => {
        it('should return null when not a date', () => {
            expect(getDateFromSlashedDate('')).toBe(null);
            expect(getDateFromSlashedDate('456/22')).toBe(null);
            expect(getDateFromSlashedDate('45/78/23')).toBe(null);
            expect(getDateFromSlashedDate('05/02/210')).toBe(null);
        });

        it('should return a valid Date object', () => {
            let result = getDateFromSlashedDate('05/02/1986');
            expect(result).toBeInstanceOf(Date);
            expect(result.getUTCFullYear()).toEqual(1986);
            expect(result.getUTCMonth()).toEqual(1);
            expect(result.getUTCDate()).toEqual(5);
            expect(result.getUTCHours()).toEqual(0);
            expect(result.getUTCMinutes()).toEqual(0);
            expect(result.getUTCSeconds()).toEqual(0);
        });
    });
});
