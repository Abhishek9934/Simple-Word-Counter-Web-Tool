
var input = document.querySelector('#text');
var  characterCount = document.querySelector('#characterCount');
var   wordCount = document.querySelector('#wordCount');


   console.log(input);
 disable();
 var inp;

input.addEventListener('keyup', function() {

  console.clear();


  characterCount.innerHTML = input.value.length;

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);

   // console.log(words);
  if (words ) {
    wordCount.innerHTML = words.length;
    wordLeft.innerHTML = inp - words.length;
    
    
  } else {
    wordCount.innerHTML = 0;
    wordLeft.innerHTML = inp;

  }


  if(words.length > inp)
    {
      disable();
      alert("Words Limit Exceeded! \n Set new word Limit");
    }
  
});


function getInputValue(){
            // Selecting the input element and get its value 
            enable();  
            document.getElementById("text").value= '';
          

            inp = document.getElementById("myInput").value;
            wordLeft.innerHTML = (inp=='')?0:inp;
            wordCount.innerHTML = 0;
            characterCount.innerHTML = 0;
        }


function disable() {
document.getElementById("text").disabled = true;
}
function enable() {
document.getElementById("text").disabled = false;

}
