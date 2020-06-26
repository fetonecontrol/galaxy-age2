//Begin UserInfo Class
export class UserInfo {
  constructor(age){
    this.age = age;
    console.log(this.age);
  }
}

// Begin Behavior 1
export function  ageCalc(input, planetChoice) {
  if (planetChoice === 1){
    let mercAge = input/ .24;
    console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
    return mercAge;
  }
  if (planetChoice === 1){
    let venusAge = input / .62;
    console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
    return venusAge;
  }
  if (planetChoice === 1){
    let marAge = input / 1.88;
    console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
    return marAge;
  }
  if (planetChoice === 1){
    let jupAge = input / 11.86;
    console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
    return jupAge;
  }

  }