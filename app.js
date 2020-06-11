
var input = document.querySelector('#text');
var  characterCount = document.querySelector('#characterCount');
var   wordCount = document.querySelector('#wordCount');


   console.log(input);
 var maxwords = 500;

input.addEventListener('keyup', function() {

  console.clear();


  characterCount.innerHTML = input.value.length;

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  wordLeft.innerHTML = maxwords - words.length;

   // console.log(words);
  if (words) {
    wordCount.innerHTML = words.length;

  } else {
    wordCount.innerHTML = 0;
    
  }
  
});