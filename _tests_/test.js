import { UserInfo } from './../src/galaxy.js'

// Begin test for ageCalc
describe('ageCalc', () => {
  test('Should fail if user age !== 41.66', () => {
    let newUser = new UserInfo(29, 1, 75);
    let userAge = newUser.ageCalc()
    expect(userAge.toFixed(2)).toEqual("46.77");
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
