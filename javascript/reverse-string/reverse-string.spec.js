import { reverseString } from './reverse-string';

describe('ReverseString', () => {
    test('empty string', () => {
        const expected = '';
        const actual = reverseString('');
        console.log(actual, expected);
        expect(actual).toEqual(expected);
    });

    test('a word', () => {
        const expected = 'tobor';
        const actual = reverseString('robot');
        console.log(actual, expected);
        expect(actual).toEqual(expected);
    });

    test('a capitalized word', () => {
        const expected = 'nemaR';
        const actual = reverseString('Ramen');
        console.log(actual, expected);
        expect(actual).toEqual(expected);
    });

    test('a sentence with punctuation', () => {
        const expected = '!yrgnuh ma I';
        const actual = reverseString('I am hungry!');
        expect(actual).toEqual(expected);
    });

    test('a palindrome', () => {
        const expected = 'racecar';
        const actual = reverseString('racecar');
        expect(actual).toEqual(expected);
    });

    test('an even-sized word', () => {
        const expected = 'reward';
        const actual = reverseString('drawer');
        expect(actual).toEqual(expected);
    });
});