var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*()"
var finalPwd = ""


function generatePassword() {
    var userChoice = "";

// Prompt user to choose length of the password; at least 8 characters and no more than 128
    var size = parseInt(prompt("Number of characters? (minimum 8, maximum 128)"))
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

        if (isLowercase === true) {
            userChoice += lowercase; 
        }
        if (isUppercase === true) {
            userChoice += uppercase; 
        }
        if (isNumber === true) {
            userChoice += number; 
        }
        if (isSpecial === true) {
            userChoice += special;
        }

        console.log("Userchoice", userChoice)

        for (var i = 0; i < size; i++) {

            var randomizer = Math.floor(Math.random() * userChoice.length)
            console.log("randomizer", randomizer)

            finalPwd += userChoice.charAt(randomizer)
            console.log(finalPwd)
        }

        var password = finalPwd;
        var passwordText = document.querySelector("#password");

        passwordText.value = password;



// Add error alert if number of characters isn't 8-128
    } else {
        alert("Please choose number of characters between 8 and 128!")
        return;
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
