import { UserInfo, ageCalc } from './../src/galaxy.js'

// Begin test for ageCalc
describe('ageCalc', () => {
  test('Should fail if user age !== 41.66', () => {
    let userAge = 29;
    let planetChoice = 3;
    expect(ageCalc(userAge, planetChoice).toFixed(2)).toEqual("15.43");
  });
});

// Begin test for UserInfo
describe('UserInfo', () => {
  test('Should fail if ths.age !== 29', () => {
    let newUser = new UserInfo(29);
    expect(newUser.age).toEqual(29);
  });
});