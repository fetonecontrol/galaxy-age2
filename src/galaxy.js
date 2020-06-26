//Begin UserInfo Class
export class UserInfo {
  constructor(age, planetChoice, lifeExp){
    this.age = age;
    this.planetChoice =  planetChoice;
    this.lifeExp = lifeExp;
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
    let message = [];
    let lifeRemainder = (lifeExp - input) / .24;
    if(input > lifeExp){
      let exceedBy = (input - lifeExp) / .24;
      message.push(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
      message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Mercurial Years longer than expected!`);
      return message;
    } else if ( input < lifeExp) {
      message.push(`You would be ${ mercAge.toFixed(2) } years old on Mercury.
      You would have ${ lifeRemainder.toFixed(2) } Mercurial years left to live`);
      return message;
    }
  }
  //Begin Venus
  else if (planetChoice === 2){
    let message = [];
    let lifeRemainder = (lifeExp - input) / .62;
    if(input > lifeExp){
      let exceedBy = (input - lifeExp) / .62;
      message.push(`You would be ${ venusAge.toFixed(2) } years old on Venus.`);
      message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Venetian Years longer than expected!`);
      return venusAge;
    } else if ( input < lifeExp) {
      message.push(`You would be ${ venusAge.toFixed(2) } years old on venus.`);
      message.push(`You would have ${ lifeRemainder.toFixed(2) } Venetian years left to live`);
      return venusAge;
    }
  }
  //Begin Mars
  else if (planetChoice === 3){
    let message = [];
    let lifeRemainder = (lifeExp - input) / 1.88;
    if(input > lifeExp){
      let exceedBy = (input - lifeExp) / 1.88;
      message.push(`You would be ${ marAge.toFixed(2) } years old on Mars.`);
      message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Martian Years longer than expected!`);
      return marAge;
    } else if ( input < lifeExp) {
      message.push(`You would be ${ marAge.toFixed(2) } years old on Mars.`);
      message.push(`You would have ${ lifeRemainder.toFixed(2) } Martian years left to live`);
      return marAge;
    }
  }
  //Begin Jupiter
  else if (planetChoice === 4){
    let message = [];
    let lifeRemainder = (lifeExp - input) / 11.86;
    if(input > lifeExp){
      let exceedBy = (input - lifeExp) / 11.86;
      message.push(`You would be ${ jupAge.toFixed(2) } years old on Jupiter.`);
      message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Jupiter Years longer than expected!`);
      return jupAge;
    } else if ( input < lifeExp) {
      message.push(`You would be ${ jupAge.toFixed(2) } years old on Jupiter.`);
      message.push(`You would have ${ lifeRemainder.toFixed(2) } Jupital years left to live`);
      return jupAge;
    }
  }
}