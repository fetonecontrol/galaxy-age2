import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './galaxy.js';
import { UserInfo } from './../src/galaxy.js'
// import $ from 'jquery';

let newUser = new UserInfo(29, 1, 75);
console.log(newUser);