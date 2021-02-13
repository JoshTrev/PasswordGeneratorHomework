// Variables
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Checkboxes
var lowercaseCheckBox = document.getElementById("lowercaseCheckBox");
var uppercaseCheckBox = document.getElementById("uppercaseCheckBox");
var numericCheckBox = document.getElementById("numericCheckBox");
var specialCheckBox = document.getElementById("specialCheckBox");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordText = document.querySelector("#password");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;
}

// Generate the password
function generatePassword() {

  var passWordReturn = "Password: ";

  var arrayOfCharOptions = [];

  var passwordLength = document.getElementById("custom-slider").value

  // Add lowercase to options

  if (lowercaseCheckBox.checked) {
    arrayOfCharOptions.push(lowerCaseChar);
  }

  // Add uppercase to options

  if (uppercaseCheckBox.checked) {
    arrayOfCharOptions.push(upperCaseChar);
  }

  // Add numerals to options

  if (numericCheckBox.checked) {
    arrayOfCharOptions.push(numericChar);
  }

  // Add special characters to options

  if (specialCheckBox.checked) {
    arrayOfCharOptions.push(specialChar);
  }

  if (arrayOfCharOptions.length >= 1) {

    // for loop to add 1 character to password each time run through

    for (i = 0; i < passwordLength; i++) {

      // variable num1 chooses if char will be lowercase, uppercase, numeral, or special character.

      var randomNum1 = Math.floor(Math.random() * arrayOfCharOptions.length);

      // variable num2 chooses which char within selected array. Array was selected above with num1.

      var randomNum2 = Math.floor(Math.random() * arrayOfCharOptions[randomNum1].length);

      // variable currentChar will equal the new character we have selected.

      var currentChar = arrayOfCharOptions[randomNum1][randomNum2];

      // converting currentChar to a string so we can concatenate it to the password.

      currentChar = currentChar.toString();

      // password will now equal the password with the new character on the end.

      passWordReturn = passWordReturn + currentChar;
    }

    return passWordReturn;
  }

  else if (arrayOfCharOptions.length < 1) {
    
    return passWordReturn = "No character types were selected for the password.";
  }
}

// Slider

document.getElementById("custom-slider").addEventListener("input", function (event) {
  let value = event.target.value;
  document.getElementById("current-value").innerText = value;
  document.getElementById("current-value").classList.add("active");
  document.getElementById("current-value").style.left = `${(value / 1.23) - 5}%`;
});

document.getElementById("custom-slider").addEventListener("blur", function (event) {
  document.getElementById("current-value").classList.remove("active");
});
