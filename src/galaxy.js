//Begin UserInfo Class
export class UserInfo {
  constructor(age, planetChoice, lifeExp){
    this.age = age;
    this.planetChoice =  planetChoice;
    this.lifeExp = lifeExp;
    this.ages = [];
    this.expectancy = [];
  }

  // Begin Behavior 1
  ageCalc() {
  let mercAge = this.age / .24;
  let venusAge = this.age / .62;
  let marAge = this.age / 1.88;
  let jupAge = this.age / 11.86;
  this.ages.push(mercAge.toFixed(2), venusAge.toFixed(2), marAge.toFixed(2), jupAge.toFixed(2));
  //Begin if statement to choose planet
  }

  planetChooser(){
  //Begin Mercury
  if (this.planetChoice === 1){
    if(this.age > this.lifeExp){
      let exceedBy = (this.age - this.lifeExp) / .24;
      this.expectancy.push(exceedBy.toFixed(2));
    } else if (this.age < this.lifeExp) {
      let lifeRemainder = (this.lifeExp - this.age) / .24;
      let parsLife = parseInt(lifeRemainder);
      this.expectancy.push(parsLife.toFixed(2));
    }
  }
  //Begin Venus
  else if (this.planetChoice === 2){
    if(this.age > this.lifeExp){
      let exceedBy = (this.age - this.lifeExp) / .62;
      this.expectancy.push(exceedBy.toFixed(2));
    } else if (this.age < this.lifeExp) {
      let lifeRemainder = (this.lifeExp - this.age) / .62;
      let parsLife = parseInt(lifeRemainder);
      this.expectancy.push(parsLife.toFixed(2));
    }
  }
  //Begin Mars
  else if (this.planetChoice === 3){
    if(this.age > this.lifeExp){
      let exceedBy = (this.age - this.lifeExp) / 1.88;
      this.expectancy.push(exceedBy.toFixed(2));
    } else if (this.age < this.lifeExp) {
      let lifeRemainder = (this.lifeExp - this.age) / 1.88;
      let parsLife = parseInt(lifeRemainder);
      this.expectancy.push(parsLife.toFixed(2));
    }
  }
  //Begin Jupiter
  else if (this.planetChoice === 4){
    if(this.age > this.lifeExp){
      let exceedBy = (this.age - this.lifeExp) / 11.86;
      this.expectancy.push(exceedBy.toFixed(2));
    } else if ( this.age < this.lifeExp) {
      let lifeRemainder = (this.lifeExp - this.age) / 11.86;
      let parsLife = parseInt(lifeRemainder);
      this.expectancy.push(parsLife.toFixed(2));
    }
  }
}
}
//
// message.push(`You would be ${ mercAge.toFixed(2) } years old on Mercury.`);
// message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Mercurial Years longer than expected!`);
// message.push(`You would be ${ mercAge.toFixed(2) } years old on Mercury.
// You would have ${ lifeRemainder.toFixed(2) } Mercurial years left to live`);
// message.push(`You would be ${ venusAge.toFixed(2) } years old on Venus.`);
// message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Venetian Years longer than expected!`);
// message.push(`You would be ${ venusAge.toFixed(2) } years old on venus.`);
// message.push(`You would have ${ lifeRemainder.toFixed(2) } Venetian years left to live`);
// message.push(`You would be ${ marAge.toFixed(2) } years old on Mars.`);
// message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Martian Years longer than expected!`);
// message.push(`You would be ${ marAge.toFixed(2) } years old on Mars.`);
// message.push(`You would have ${ lifeRemainder.toFixed(2) } Martian years left to live`);
// message.push(`You would be ${ jupAge.toFixed(2) } years old on Jupiter.`);
// message.push(`Congrats! You've lived ${ exceedBy.toFixed(2) } Jupiter Years longer than expected!`);
// message.push(`You would be ${ jupAge.toFixed(2) } years old on Jupiter.`);
// message.push(`You would have ${ lifeRemainder.toFixed(2) } Jupital years left to live`);