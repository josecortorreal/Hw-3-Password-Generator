// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Button has been clicked");
}

// Write password to the #password input
  var password = generatePassword(); {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
