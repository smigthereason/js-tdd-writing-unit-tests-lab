// Your tests here
import { isPalindrome } from "../utils";

describe('isPalindrome function', () => {
  test('returns true for palindrome words', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for non-palindrome words', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns true for words that are a combination of uppercase and lowercase letters', () => {
    expect(isPalindrome('RaCecAr')).toBe(true);
  });

  test('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('throws an error for input with non-alphabetic characters', () => {
    expect(() => isPalindrome('12321')).toThrow();
  });

  test('throws an error for input that is not a string', () => {
    expect(() => isPalindrome(12321)).toThrow();
    
  });
});