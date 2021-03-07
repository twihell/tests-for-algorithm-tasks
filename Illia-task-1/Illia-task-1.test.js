const { checkMultiplicity } = require('./Illia-task-1.js');

describe('checkMultiplicity: ', () => {

  test('should be defined', () => {
    expect(checkMultiplicity).toBeDefined();
  });

  test('should return correct numberCounter', () => {
    let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 36];
    expect(checkMultiplicity(newArr)).toBe(7);
  });

  test('should process array with divisibles by three only', () => {
    let newArr = [3, 27, 9, 12];
    expect(checkMultiplicity(newArr)).toBe(4);
  });

  test('should process array with divisibles other than 3 or 5', () => {
    let newArr = [2, 4, 8, 11];
    expect(checkMultiplicity(newArr)).toBe(0);
  });

  test('should NOT count divisibles by 5', () => {
    let newArr = [15, 30, 45];
    expect(checkMultiplicity(newArr)).toBe(0);
  });
})

