
const { pythagoreanTriplet } = require('./Illia-task-3');



//25

// 3*3 + 4*4 = 5*5


describe('pythagoreanTriplet: ', () => {
  let num;
  let mockCalls;
  beforeEach(() => {
    num = 25;
    global.console = { log: jest.fn() };
    mockCalls = console.log.mock.calls;
    pythagoreanTriplet(num);
  });

  test('should return results that are less or equal to N', () => {
    for (let i = 0; i < mockCalls.length; i++) {
      for (let j = 0; j <= 2; j++) {
        expect(mockCalls[i][j]).toBeLessThanOrEqual(num); // (c <= n is ignored)
      }
    }
  });

  test('should return pythagorian triplets', () => {
    for (let i = 0; i < mockCalls.length; i++) {
      let sumOfTwoFirstSquares = mockCalls[i][0] ** 2 + mockCalls[i][1] ** 2;
      expect(sumOfTwoFirstSquares).toBe(mockCalls[i][2] ** 2);
    }
  });


  test(`pythagorian triplets should be equal to the expression 'a<=b<=c'`, () => {
    for (let i = 0; i < mockCalls.length; i++) {
      expect(mockCalls[i][0] <= mockCalls[i][1] <= mockCalls[i][2]).toBeTruthy();
    }
  });

  test('console.log should only output three numbers', () => {
    for (let i = 0; i < mockCalls.length; i++) {
      expect(mockCalls[i].length).toBe(3);
    }
  });

  test('should not return anything if N is not intended to be used for generating triplets', () => {
    let specialNum = 0;
    console.log.mockClear();
    pythagoreanTriplet(specialNum);
    expect(console.log).not.toBeCalled();
  });

})
