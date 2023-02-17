// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowercase = "qwertyuioplkjhgfdsazxcvbnm".split('');
let uppercase = "qwertyuioplkjhgfdsazxcvbnm".toUpperCase().split('');
let numbers = "1234567890".split();
let specialChars = "!@#$%^&*()_+=-".split();
let password = "";

// Write password to the #password input
  // let password = generatePassword(); {
  let passwordText = document.querySelector("#password");

  // passwordText.value = password;


function generatePassword() {
  let length = prompt("What length do you want your password(8-128 characters): ");
  
  let lowercasePrompt = prompt("Do you want to include lowercase characters(Yes or No): ");
  //doing this so that I could have at least one lower case letter in password
  if(lowercasePrompt.toLowerCase() === "yes")  {
    password.concat(generate(lowercase));
  }

}

function generate(arr) {
  let randomChar = arr[Math.floor(Math.random() * arr.length)]
  console.log(randomChar);
}

function completePassword(arr, length) {

}

// // Add event listener to generate button
generateBtn.addEventListener("click", function() {
  generatePassword();
});
