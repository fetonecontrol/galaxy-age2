import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './galaxy.js';
import { UserInfo, ageCalc } from './../src/galaxy.js'
// import $ from 'jquery';

let newUser = new UserInfo(29, 1, 10);
let userValues = Object.values(newUser);
let  output = ageCalc(userValues[0], userValues[1], userValues[2])
console.log(output[1]);
console.log(output[1]);