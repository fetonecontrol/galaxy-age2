//Begin UserInfo Class
export class UserInfo {
  constructor(age, planetChoice, lifeExp){
    this.age = age;
    this.planetChoice =  planetChoice;
    this.lifeExp = lifeExp;
    console.log(this.age);
  }
}

// Begin Behavior 1
export function  ageCalc(input, planetChoice, lifeExp) {
  let mercAge = input / .24;
  let venusAge = input / .62;
  let marAge = input / 1.88;
  let jupAge = input / 11.86;
//Begin if statement to choose planet

//Begin Mercury
  if (planetChoice === 1){
    let lifeRemainder = (lifeExp - input) / .24;
    if(input > lifeExp){
      let exceedBy = (input - lifeExp) / .24;
      console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`)
      console.log(`Congrats! You've lived ${ exceedBy.toFixed(2) } Mercurial Years longer than expected!`)
      return mercAge;
    } else if ( input < lifExp) {
      console.log(`You would be ${ mercAge.toFixed(2) } years old on Mercury.
      You would have ${ lifeRemainder.toFixed(2) } Mercurial years left to live`);
      return mercAge;
    }
  }
//Begin Venus
    else if (planetChoice === 2){
    let lifeRemainder = (lifeExp - input) / .62;
    console.log(`You would be ${ venusAge.toFixed(2) } years old on Venus.
    You would have ${ lifeRemainder.toFixed(2) } Venetian years left to live`);
    return venusAge;
    }
//Begin Mars
    else if (planetChoice === 3){
    let lifeRemainder = (lifeExp - input) / 1.88;
    console.log(`You would be ${ marAge.toFixed(2) } years old on Mars.
    You would have ${ lifeRemainder.toFixed(2) } Martian years left to live`);
    return marAge;
    }
//Begin Jupiter
    else if (planetChoice === 4){
    let lifeRemainder = (lifeExp - input) / 11.86;
    console.log(`You would be ${ jupAge.toFixed(2) } years old on Jupiter.
    You would have ${ lifeRemainder.toFixed(2) } Jupital years left to live`);
    return jupAge;
    }
  }