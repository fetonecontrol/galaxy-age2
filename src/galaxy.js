//Begin UserInfo Class
export class UserInfo {
  constructor(age){
    this.age = age;
    console.log(this.age);
  }
}

// Begin Behavior 1
export function  ageCalc(input, planetChoice) {
  let mercAge = input/ .24;
  let venusAge = input / .62;
  let marAge = input / 1.88;
  let jupAge = input / 11.86;
  if (planetChoice === 1){
    console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
    return mercAge;
  }
    else if (planetChoice === 2){
    console.log(`You would be ${ venusAge.toFixed(2) } years old on Venus.`);
    return venusAge;
    }
    else if (planetChoice === 3){
    console.log(`You would be ${ marAge.toFixed(2) } years old on Mars.`);
    return marAge;
    }
    else if (planetChoice === 4){
    console.log(`You would be ${ jupAge.toFixed(2) } years old on Jupiter.`);
    return jupAge;
  }

  }