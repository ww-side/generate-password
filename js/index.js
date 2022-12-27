const outputBlock = document.querySelector('.output');
const button = document.querySelector('.button');

const numberChars = '0123456789';
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialSymbols = '!@#$%^&-_';
const fullChars = numberChars + lowerCaseChars + upperCaseChars + specialSymbols;

button.onclick = function() {
  const passwordLength = document.querySelector('#passwordLength').value;
  printPassword(passwordLength);
};

function createPassword(length, characters) {
  let result = '';
  
  for (let i = 0; i < length; ++i) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generatePassword (length, characters) {
  let lengthList = 3;
  const passwords = [...Array(lengthList)];
  
  for (let i = 0; i < passwords.length; i += 1) {
    passwords[i] = createPassword(length, characters);
  }
  
  let passwordList = '';
  
  for (let i = 0; i< passwords.length; i++ ) {
    passwordList += '• ' + passwords[i] + '<br><br>';
  }
  
  outputBlock.innerHTML = passwordList;
}

let checkNumbers = () => {
  return document.querySelector('#numbers').checked;
};

let checkLowerCase = () => {
  return document.querySelector('#lowercase').checked;
};

let checkUpperCase = () => {
  return document.querySelector('#uppercase').checked;
};

let checkSpecialSymbols = () => {
  return document.querySelector('#specialSymbols').checked;
};

function printPassword(length) {
  if (length <= 0 || length > 30) {
    alert('Not correct number. Min - 1 character, Max - 30 characters.');
  } else if (checkNumbers() && checkLowerCase() && checkUpperCase() && checkSpecialSymbols()) {
    generatePassword(length, fullChars);
  } else if (checkNumbers() && checkLowerCase() && checkUpperCase()) {
    generatePassword(length, numberChars + lowerCaseChars + upperCaseChars);
  } else if (checkNumbers() && checkLowerCase() && checkSpecialSymbols()) {
    generatePassword(length, numberChars + lowerCaseChars + upperCaseChars);
  } else if (checkNumbers() && checkUpperCase() && checkSpecialSymbols()) {
    generatePassword(length, numberChars + upperCaseChars + specialSymbols);
  } else if (checkLowerCase() && checkUpperCase() && checkSpecialSymbols()) {
    generatePassword(length, lowerCaseChars + upperCaseChars + specialSymbols);
  } else if (checkNumbers() && checkLowerCase()) {
    generatePassword(length, numberChars + lowerCaseChars);
  } else if (checkNumbers() && checkUpperCase()) {
    generatePassword(length, numberChars + upperCaseChars);
  } else if (checkNumbers() && checkSpecialSymbols()) {
    generatePassword(length, numberChars + specialSymbols);
  } else if (checkLowerCase() && checkUpperCase()) {
    generatePassword(length, lowerCaseChars + upperCaseChars);
  } else if (checkLowerCase() && checkSpecialSymbols()) {
    generatePassword(length, lowerCaseChars + specialSymbols);
  } else if (checkUpperCase() && checkSpecialSymbols()) {
    generatePassword(length, upperCaseChars + specialSymbols);
  } else if (checkNumbers()) {
    generatePassword(length, numberChars);
  } else if (checkLowerCase()) {
    generatePassword(length, lowerCaseChars);
  } else if (checkUpperCase()) {
    generatePassword(length, upperCaseChars);
  } else if (checkSpecialSymbols()) {
    generatePassword(length, specialSymbols);
  } else {
    generatePassword(length, fullChars);
  }
}