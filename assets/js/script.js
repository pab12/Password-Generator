//Criteria var here
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "@", "#","#","$","%","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?", "@","[","]","^","_","`","{","}","|","~"];

//generate the password function
function generatePassword(){
  var lowerCaseAnswer = confirm("Do you want your password to contain lowercase?");
var upperCaseAnswer = confirm("Do you want your password to contain uppercase?");
var numericAnswer = confirm("Do you want your password to contain numeric?");
var specialCharactersAnswer = confirm("Do you want your pasword to contain special characters?");
var lengthOfPassword = parseInt(prompt("How many character slots do you want it to take. choose from 8-128."));
  var password = "";
  var characterTypes = [];
  if(lowerCaseAnswer){
    characterTypes = characterTypes.concat(lowerCase);
  }
  if(upperCaseAnswer) {
    characterTypes = characterTypes.concat(upperCase);
  }
  if(numericAnswer) {
    characterTypes = characterTypes.concat(numeric);
  }
  if(specialCharactersAnswer) {
    characterTypes = characterTypes.concat(specialCharacters);
  }
  if(!lowerCaseAnswer && !upperCaseAnswer && !numericAnswer && !specialCharactersAnswer){
    alert("Has to have at least one criteria");
    return null;
  }
  if(typeof lengthOfPassword === 'number'){
    if((lengthOfPassword<8) || (lengthOfPassword>128)){
      alert("The number has to be between 8 and 128.");
      return null;
    }
  } else {
    alert("This has to be a number");
    return null;
  }
  for( var i =0; i < lengthOfPassword; i++){
    var randomCharacter = getRandomCharacter(characterTypes);
    password+= randomCharacter;
  }
 

  return password;
}
// how we get randomCharacter with a function for random
function getRandomCharacter(array){
  var index = Math.floor(Math.random()*array.length);
  return array[index];
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);