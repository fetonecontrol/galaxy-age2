import { UserInfo, ageCalc } from './../src/galaxy.js'

//Begin test for ageCalc
describe('ageCalc', () => {
  test('Should fail if user age !== 120.83', () => {
    let newUser = new UserInfo(29, 1, 10);
    let return1 = newUser.ageCalc();
    expect(return1).toEqual(true);
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

// Begin test for Output
// describe('outPut', () => {
//   test('Should fail if it doesn not output an array', () => {
//     let newUser = new UserInfo(29, 1, 75);
//     let userValues = Object.values(newUser);
//     let message = ageCalc(userValues[0], userValues[1], userValues[2])
//     console.log(message[0], message[1]);
//   });
// });