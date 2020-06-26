//Begin UserInfo Class
export class UserInfo {
  constructor(age){
    this.age = age;
    console.log(this.age);
  }
}

// Begin Behavior 1
export function  ageCalc(input) {
  let mercAge = input/ .24;
  let venusAge = input / .62;
  let marAge = input / 1.88;
  let jupAge = input / 11.86;
  console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
  console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
  console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
  console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
  return mercAge;
  }