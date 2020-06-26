import { ageCalc } from './../src/galaxy.js'

describe('ageCalc', () => {
  test('Should fail if user age !== 41.666', () => {
    let userAge = 29;
    expect(ageCalc(userAge).toFixed(2)).toEqual("120.83");
  });
});