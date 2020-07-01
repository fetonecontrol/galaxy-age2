import { UserInfo } from './../src/galaxy.js'
// Begin test for UserInfo
describe('UserInfo', () => {
  test('Should fail if ths.age !== 29', () => {
    let newUser = new UserInfo(29, 1, 75);
    expect(newUser.age).toEqual(29);
    expect(newUser.planetChoice).toEqual(1);
    expect(newUser.lifeExp).toEqual(75);
  });
});

//Begin test for ageCalc
describe('mercAge', () => {
  test('Should fail if mercAge is not 120.83', () => {
    let newUser = new UserInfo(29, 1, 10);
    newUser.ageCalc();
    expect(newUser.ages[0]).toEqual("120.83");
  });
});
describe('venusAge', () => {
  test('Should fail if mercAge is not 46.77', () => {
    let newUser = new UserInfo(29, 1, 10);
    newUser.ageCalc();
    expect(newUser.ages[1]).toEqual("46.77");
  });
});
describe('marsAge', () => {
  test('Should fail if mercAge is not 15.43', () => {
    let newUser = new UserInfo(29, 1, 10);
    newUser.ageCalc();
    expect(newUser.ages[2]).toEqual("15.43");
  });
});
describe('jupAge', () => {
  test('Should fail if mercAge is not 2.45', () => {
    let newUser = new UserInfo(29, 1, 10);
    newUser.ageCalc();
    expect(newUser.ages[3]).toEqual("2.45");
  });
});

// Begin test for planetChooser
// Begin test for Mercury
describe('planetChooser', () => {
  test('Should return years left to live if age is less than expectancy', () => {
    let newUser = new UserInfo(29, 1, 10);
    newUser.planetChooser();
    expect(newUser.expectancy[0]).toEqual("79.17");
  });
}); 
describe('planetChooser', () => {
  test('Should return years left to live if age is less than expectancy', () => {
    let newUser = new UserInfo(29, 1, 45);
    newUser.planetChooser();
    expect(newUser.expectancy[0]).toEqual("66.00");
  });
});
//Begin Test for Venus
describe('planetChooser', () => {
  test('Should return years left to live if age is less than expectancy', () => {
    let newUser = new UserInfo(29, 2, 10);
    newUser.planetChooser();
    expect(newUser.expectancy[0]).toEqual("30.65");
  });
}); 
describe('planetChooser', () => {
  test('Should return years left to live if age is less than expectancy', () => {
    let newUser = new UserInfo(29, 2, 45);
    newUser.planetChooser();
    expect(newUser.expectancy[0]).toEqual("25.00");
  });
});