//Begin UserInfo Class
export class UserInfo {
  constructor(age, planetChoice, lifeExp){
    this.age = age;
    this.planetChoice =  planetChoice;
    this.lifeExp = lifeExp;
  }
  // Begin Behavior 1
  ageCalc() {
  let mercAge = this.age / .24;
  let venusAge = this.age / .62;
  let marAge = this.age / 1.88;
  let jupAge = this.age / 11.86;
  //Begin if statement to choose planet

  //Begin Mercury
  if (this.planetChoice === 1){
    let message = [];
    let lifeRemainder = (this.lifeExp - this.age) / .24;
    if(this.age > this.lifeExp){
      let exceedBy = (this.age - this.lifeExp) / .24;
      message.push(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
      message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Mercurial Years longer than expected!`);
      return message;
    } else if ( this.age < this.lifefeExp) {
      message.push(`You would be ${ mercAge.toFixed(2) } years old on Mercury.
      You would have ${ lifeRemainder.toFixed(2) } Mercurial years left to live`);
      return message;
    }
  }
  //Begin Venus
  else if (this.planetChoice === 2){
    let message = [];
    let lifeRemainder = (this.lifeExp - this.age) / .62;
    if(this.age > this.lifeExp){
      let exceedBy = (this.age - this.lifeExp) / .62;
      message.push(`You would be ${ venusAge.toFixed(2) } years old on Venus.`);
      message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Venetian Years longer than expected!`);
      return venusAge;
    } else if ( this.age < this.lifeExp) {
      message.push(`You would be ${ venusAge.toFixed(2) } years old on venus.`);
      message.push(`You would have ${ lifeRemainder.toFixed(2) } Venetian years left to live`);
      return venusAge;
    }
  }
  //Begin Mars
  else if (this.planetChoice === 3){
    let message = [];
    let lifeRemainder = (this.lifeExp - this.age) / 1.88;
    if(this.age > this.lifeExp){
      let exceedBy = (this.age - this.lifeExp) / 1.88;
      message.push(`You would be ${ marAge.toFixed(2) } years old on Mars.`);
      message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Martian Years longer than expected!`);
      return marAge;
    } else if ( this.age < this.lifeExp) {
      message.push(`You would be ${ marAge.toFixed(2) } years old on Mars.`);
      message.push(`You would have ${ lifeRemainder.toFixed(2) } Martian years left to live`);
      return marAge;
    }
  }
  //Begin Jupiter
  else if (this.planetChoice === 4){
    let message = [];
    let lifeRemainder = (this.lifeExp - this.age) / 11.86;
    if(this.age > this.lifeExp){
      let exceedBy = (this.age - this.lifeExp) / 11.86;
      message.push(`You would be ${ jupAge.toFixed(2) } years old on Jupiter.`);
      message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Jupiter Years longer than expected!`);
      return jupAge;
    } else if ( this.age < this.lifeExp) {
      message.push(`You would be ${ jupAge.toFixed(2) } years old on Jupiter.`);
      message.push(`You would have ${ lifeRemainder.toFixed(2) } Jupital years left to live`);
      return jupAge;
    }
  }
}
}