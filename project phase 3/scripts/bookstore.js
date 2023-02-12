/*
Seniz Ozdemir
11-11-2022
IT202-001
Semester Project Phase 2 
*/


/*javascript form events*/
function setBackground(e){
  if(e.type == "focus"){
    e.target.style.backgroundColor = "skyblue";
  }
  else if(e.type == "blur"){
    e.target.style.backgroundColor = "white";
  }
}

window.addEventListener("load", function(){
  var cssSelector = "input[type=text], input[type=email], input[type=number], textarea"
  var fields = document.querySelectorAll(cssSelector);

  for(i = 0; i < fields.length; i++){
    fields[i].addEventListener("focus", setBackground);
    fields[i].addEventListener("blur", setBackground);
  }
});


/*JavaScript Validation - Check empty fields*/

function init(){
  document.getElementById("forms").addEventListener("submit", checkForEmptyFields);
}

window.addEventListener("load", init);

function checkForEmptyFields(e){
  
  var cssSelector = "input[type=text], input[type=email], input[type=number], select";
  var fields = document.querySelectorAll(cssSelector);

  var fieldlist = [];
  for(i = 0; i < fields.length; i++){
      if(fields[i].value == null || fields[i].value == ""){
          e.preventDefault();
          fieldlist.push(fields[i]);

      }
  }

  var msg = "The following fields cannot be empty:\n";

  if(fieldlist.length > 0 ){
      for(i=0; i < fieldlist.length; i++){
          msg += fieldlist[i].id + "\n";
      }
      alert(msg)

  }

}


