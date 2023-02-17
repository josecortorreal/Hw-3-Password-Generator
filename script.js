// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowercase = "qwertyuioplkjhgfdsazxcvbnm".split('');
let uppercase = "qwertyuioplkjhgfdsazxcvbnm".toUpperCase().split('');
let numbers = "1234567890".split('');
let specialChars = "!@#$%^&*()_+=-".split('');
let allChars = '!@#$%^&*()_+=-1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
let password = "";


// Write password to the #password input
  // let password = generatePassword(); {
  let passwordText = document.querySelector("#password");

  // passwordText.value = password;


function generatePassword() {
  console.log(allChars)
  let length = prompt("What length do you want your password(8-128 characters): ");
  
  let lowercasePrompt = prompt("Do you want to include lowercase characters(Yes or No): ");
  //doing this so that I could have at least one lower case letter in password
  if(lowercasePrompt.toLowerCase() === "yes")  {
    password.concat(generate(lowercase));
  }

  let uppercasePrompt = prompt("Do you want to include uppercase characters(Yes or No): ");
  //doing this so that I could have at least one lower case letter in password
  if(uppercasePrompt.toLowerCase() === "yes")  {
    password.concat(generate(uppercase));
  }

  let numbersPrompt = prompt("Do you want to include numbers(Yes or No): ");
  //doing this so that I could have at least one lower case letter in password
  if(numbersPrompt.toLowerCase() === "yes")  {
    password.concat(generate(numbers));
  }

  let specialcharsPrompt = prompt("Do you want to include special characters(Yes or No): ");
  //doing this so that I could have at least one lower case letter in password
  if(specialcharsPrompt.toLowerCase() === "yes")  {
    password.concat(generate(specialChars));
  }

  let finalPassword = completePassword(allChars, length);
  alert(finalPassword);

}

function generate(arr) {
  let randomChar = arr[Math.floor(Math.random() * arr.length)]
  console.log(randomChar);
}

function completePassword(arr, length) {
  let remaining = length - password.length;

  for(let i = 0; i < remaining; i++) {
    let randomChar = arr[Math.floor(Math.random() * arr.length)];
    password = password + randomChar;
  }

  return password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", function() {
  generatePassword();
});
