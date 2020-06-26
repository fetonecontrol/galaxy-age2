import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './galaxy.js';
import { UserInfo, } from './../src/galaxy.js'
// import $ from 'jquery';

const newUser = new UserInfo(29, 3, 10);
const userValues = Object.values(newUser);
let output = newUser.ageCalc;
console.log(output[0]);
console.log(output[1]);
