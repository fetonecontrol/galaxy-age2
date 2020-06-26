import { UserInfo, ageCalc } from './../src/galaxy.js'

// Begin test for ageCalc
describe('ageCalc', () => {
  test('Should fail if user age !== 41.666', () => {
    let userAge = 29;
    expect(ageCalc(userAge).toFixed(2)).toEqual("120.83");
  });
});

// Begin test for UserInfo
describe('UserInfo', () => {
  test('Should fail if ths.age !== 29', () => {
    let newUser = new UserInfo(29);
    expect(newUser.age).toEqual(29);
  });
});