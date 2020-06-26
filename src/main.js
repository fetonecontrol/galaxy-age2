import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { allLetter, arrayCycling5, arrayCycling7 } from './syllable.js';

// UI Logic
$(document).ready(function() {
  $("form#haiku").submit(function(event) {
    event.preventDefault();
    const line1 = $("input#line1").val();
    const line2 = $("input#line2").val();
    const line3 = $("input#line3").val();
    const arrayWordsLine1 = line1.split(" ");
    const arrayWordsLine2 = line2.split(" ");
    const arrayWordsLine3 = line3.split(" ");
    arrayWordsLine1.forEach(function(element){
      console.log(allLetter(element));
    });
    arrayWordsLine2.forEach(function(element){
      console.log(allLetter(element));
    });
    arrayWordsLine3.forEach(function(element){
      console.log(allLetter(element));
    });
    arrayCycling5(line1);
    arrayCycling7(line2);
    arrayCycling5(line3);

    let poem = new Haiku(line1, line2, line3);
    $(".output").text(poem.line1, poem.line2, poem3);
    
    
  });
});