import { UserInfo, ageCalc } from './../src/galaxy.js'

// Begin test for ageCalc
describe('ageCalc', () => {
  test('Should fail if user age !== 41.66', () => {
    let userAge = 29;
    let planetChoice = 1;
    let lifeExp = 10;
    expect(ageCalc(userAge, planetChoice, lifeExp).toFixed(2)).toEqual("120.83");
  });
});

// Begin test for UserInfo
describe('UserInfo', () => {
  test('Should fail if ths.age !== 29', () => {
    let newUser = new UserInfo(29, 1, 75);
    expect(newUser.age).toEqual(29);
    expect(newUser.planetChoice).toEqual(1);
    expect(newUser.lifeExp).toEqual(75);
  });
});