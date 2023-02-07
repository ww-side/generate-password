const outputBlock = document.querySelector('.output');
const button = document.querySelector('.button');

const numberChars = '0123456789';
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialSymbols = '!@#$%^&-_';
const fullChars = numberChars + lowerCaseChars + upperCaseChars + specialSymbols;

button.onclick = () => {
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

function generatePasswordList (length, characters) {
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
  } else {
    if (checkNumbers() && checkLowerCase() && checkUpperCase() && checkSpecialSymbols())
      return generatePasswordList(length, fullChars);
  
    if (checkNumbers() && checkLowerCase() && checkUpperCase())
      return generatePasswordList(length, numberChars + lowerCaseChars + upperCaseChars);
  
    if (checkNumbers() && checkLowerCase() && checkSpecialSymbols())
      return generatePasswordList(length, numberChars + lowerCaseChars + upperCaseChars);
  
    if (checkNumbers() && checkUpperCase() && checkSpecialSymbols())
      return generatePasswordList(length, numberChars + upperCaseChars + specialSymbols);
  
    if (checkLowerCase() && checkUpperCase() && checkSpecialSymbols())
      return generatePasswordList(length, lowerCaseChars + upperCaseChars + specialSymbols);
  
    if (checkNumbers() && checkLowerCase())
      return generatePasswordList(length, numberChars + lowerCaseChars);
  
    if (checkNumbers() && checkUpperCase())
      return generatePasswordList(length, numberChars + upperCaseChars);
  
    if (checkNumbers() && checkSpecialSymbols())
      return generatePasswordList(length, numberChars + specialSymbols);
  
    if (checkLowerCase() && checkUpperCase())
      return generatePasswordList(length, lowerCaseChars + upperCaseChars);
  
    if (checkLowerCase() && checkSpecialSymbols())
      return generatePasswordList(length, lowerCaseChars + specialSymbols);
  
    if (checkUpperCase() && checkSpecialSymbols())
      return generatePasswordList(length, upperCaseChars + specialSymbols);
  
    if (checkNumbers())
      return generatePasswordList(length, numberChars);
  
    if (checkLowerCase())
      return generatePasswordList(length, lowerCaseChars);
  
    if (checkUpperCase())
      return generatePasswordList(length, upperCaseChars);
  
    if (checkSpecialSymbols())
      return generatePasswordList(length, specialSymbols);
  }
}