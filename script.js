// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passWordReturn = "Password: ";

  var arrayOfCharOptions = [];

  var passwordLength = prompt("Please enter desired character length of password.")

  //If password is within correct length

  if (passwordLength >= 8 && passwordLength <= 128) {

    //Will password contain lowercase?

    var containsLowerCase = confirm("Should the password contain LOWERCASE characters?")

    //Add lowercase to options

    if (containsLowerCase) {
      arrayOfCharOptions.push(lowerCaseChar);
    }

    //Will password contain uppercase?

    var containsUpperCase = confirm("Should the password contain UPPERCASE characters?")

    //Add uppercase to options

    if (containsUpperCase) {
      arrayOfCharOptions.push(upperCaseChar);
    }

    //Will password contain numerals?

    var containsNumerals = confirm("Should the password contain NUMERIC characters?")

    //Add numerals to options

    if (containsNumerals) {
      arrayOfCharOptions.push(numericChar);
    }

    //Will password contain special characters?

    var containsSpecials = confirm("Should the password contain SPECIAL characters?")

    //Add special characters to options

    if (containsSpecials) {
      arrayOfCharOptions.push(specialChar);
    }

    if (arrayOfCharOptions.length >= 1) {

      //for loop to add 1 character to password each time run through

      for (i = 0; i < passwordLength; i++) {

        //variable num1 chooses if char will be lowercase, uppercase, numeral, or special character.

        var randomNum1 = Math.floor(Math.random() * arrayOfCharOptions.length);

        //variable num2 chooses which char within selected array. Array was selected above with num1.

        var randomNum2 = Math.floor(Math.random() * arrayOfCharOptions[randomNum1].length);

        //variable currentChar will equal the new character we have selected.

        var currentChar = arrayOfCharOptions[randomNum1][randomNum2];

        //converting currentChar to a string so we can concatenate it to the password.

        currentChar = currentChar.toString();

        //password will now equal the password with the new character on the end.

        passWordReturn = passWordReturn + currentChar;
      }

      return passWordReturn;
    }

    else if (arrayOfCharOptions.length < 1){
      alert("No character types were selected for the password.");
    }
  }

  //If password is not within length

  else {
    alert("Password length must be between 8 and 128 characters long.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
