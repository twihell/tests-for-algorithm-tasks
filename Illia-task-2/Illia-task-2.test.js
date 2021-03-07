const { checkSquareEvenNumbers } = require('./Illia-task-2');

describe('checkSquareEvenNumbers: ', () => {
  test('should be defined', () => {
    expect(checkSquareEvenNumbers).toBeDefined();
  });

  test('should process squared even numbers', () => {
    let arr = [4, 16, 64, 100];
    expect(checkSquareEvenNumbers(arr)).toBe(4);
  });

  test('should not process odd squared numbers', () => {
    let arr = [1, 9, 25, 121, 49];
    expect(checkSquareEvenNumbers(arr)).toBe(0);
  });

  test('should not count non-squared numbers', () => {
    let arr = [3, 5, 11, 7, 8];
    expect(checkSquareEvenNumbers(arr)).toBe(0);
  });

  test('should process array with different types of numbers', () => {
    let arr = [3, 5, 11, 7, 8, 1, 9, 25, 121, 49, 4, 16, 64, 100];
    expect(checkSquareEvenNumbers(arr)).toBe(4);
  });
});