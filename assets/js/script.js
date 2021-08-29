// Assignment code here
var lowerCase = ["a","b","c"];
var upperCase = ["A","B","C"];
var numeric = ["0","1","2","3"];
var specialCharacters = ["!", "@", "#"];



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
