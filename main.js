import "./style.css";
const passText = document.querySelector("#pass");
const lengthSlider = document.querySelector("#length");
const generateButton = document.querySelector("#generate");
const lowerInput = document.querySelector("#lower");
const upperInput = document.querySelector("#upper");
const symbolInput = document.querySelector("#symbol");
const numberInput = document.querySelector("#number");
const copyButton = document.querySelector("#copy");

copyButton.addEventListener("click", () => {
  passText.select();
  navigator.clipboard.writeText(passText.value);
});

function pickFromArray(choice) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "?!@#$%&*";
  if (choice == 0) {
    return lowerAlphabet.charAt(
      Math.floor(Math.random() * lowerAlphabet.length)
    );
  } else if (choice == 1) {
    return upperAlphabet.charAt(
      Math.floor(Math.random() * upperAlphabet.length)
    );
  } else if (choice == 2) {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
  } else if (choice == 3) {
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
}

function generatePasswordV2() {
  let length = lengthSlider.value;
  let optionArray = [];
  let counter = 0;
  let isLower = lowerInput.checked;
  let isUpper = upperInput.checked;
  let isNumber = numberInput.checked;
  let isSymbol = symbolInput.checked;
  counter += isLower + isUpper + isNumber + isSymbol;
  let iter = Math.floor(length / counter);
  let result = [];

  if (isLower) {
    optionArray.push(...Array(iter).fill(0));
  }
  if (isUpper) {
    optionArray.push(...Array(iter).fill(1));
  }
  if (isNumber) {
    optionArray.push(...Array(iter).fill(2));
  }
  if (isSymbol) {
    optionArray.push(...Array(iter).fill(3));
  }
  while (optionArray.length < length) {
    if (isLower) {
      optionArray.push(...Array(1).fill(0));
      if (optionArray.length == length) {
        break;
      }
    }
    if (isUpper) {
      optionArray.push(...Array(1).fill(1));
      if (optionArray.length == length) {
        break;
      }
    }
    if (isNumber) {
      optionArray.push(...Array(1).fill(2));
      if (optionArray.length == length) {
        break;
      }
    }
    if (isSymbol) {
      optionArray.push(...Array(1).fill(3));
      if (optionArray.length == length) {
        break;
      }
    }
  }
  optionArray.sort(() => Math.random() - 0.5);

  for (let y = 0; y < optionArray.length; y++) {
    result.push(pickFromArray(optionArray[y]));
  }
  console.log(result);
  passText.value = result.join("");
}

generateButton.addEventListener("click", generatePasswordV2);
