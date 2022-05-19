
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*()"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var finalPwd = ""

  // Prompt user to choose length of the password; at least 8 characters and no more than 128
  var size = prompt("Number of characters? (minimum 8, maximum 128)")
  console.log(size)

  if (size >= 8 && size <= 128) {

    // Prompt user to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var isLowercase = confirm("Include lowercase?")
    console.log(isLowercase)
    var isUppercase = confirm("Include uppercase?")
    console.log(isUppercase)
    var isNumber = confirm("Include number?")
    console.log(isNumber)
    var isSpecial = confirm("Include special character?")
    console.log(isSpecial)

    for (var i = 0; i < size; i++) {



      if (isLowercase === true && finalPwd.length<size) {
        var positionString = Math.floor(Math.random() * lowercase.length)
        console.log(positionString)
        finalPwd = finalPwd + lowercase[positionString]
      }
      if (isUppercase === true && finalPwd.length<size) {
        var positionString = Math.floor(Math.random() * uppercase.length)
        console.log(positionString)
        finalPwd = finalPwd + uppercase[positionString]
      }
      if (isNumber === true && finalPwd.length<size) {
        var positionString = Math.floor(Math.random() * number.length)
        console.log(positionString)
        finalPwd = finalPwd + number[positionString]
      }
      if (isSpecial === true && finalPwd.length<size) {
        var positionString = Math.floor(Math.random() * special.length)
        console.log(positionString)
        finalPwd = finalPwd + special[positionString]
      }

    }
  }




  else {
    alert("Invalid entry")
  }

  return finalPwd
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
