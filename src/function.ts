export const acButtonEvent = (
  acButton: Element,
  equationField: HTMLInputElement,
  answerField: HTMLInputElement
): void => {
  acButton.addEventListener('click', () => {
      equationField.value = '';
      answerField.value = '';
      input = ['', ''];
      answer = '';
      numEquation = 0;
      operation = '';
      resetFontSize(equationField, answerField);
  });
};

export const numPadEvents = (
  numButtons: NodeListOf<Element>,
  equationField: HTMLInputElement
): void => {
  for (let numButton of numButtons) {
      numButton.addEventListener('click', () => {
          if (numButton.id === 'decimal') {
              //making sure that a number does not have more than 1 decimal
              if (input[numEquation].indexOf('.') === -1) {
                  input[numEquation] += '.';
              }
          } else {
              input[numEquation] += numButton.id[3];
          }

          equationField.value = input[numEquation];

          //Decrease the font size depending on the number of digits
          equationFontSizeChange = checkDecreaseFontSize(
              input[numEquation],
              equationOriginalFontSize
          );

          equationField.style.fontSize = `${equationFontSizeChange}px`;
      });
  }
};

export const operationEvents = (
  operationButtons: NodeListOf<Element>,
  equationField: HTMLInputElement,
  answerField: HTMLInputElement
): void => {
  for (let operationButton of operationButtons) {
      operationButton.addEventListener('click', () => {
          if (numEquation && operationButton.id !== 'equals') {
              input[0] = evaluate(input[0], input[1], operation);
              equationField.value = input[0];
              input[1] = '';
          }

          if (operationButton.id !== 'equals') {
              numEquation = 1;
              operation = operationButton.id;
              equationField.value = '';
              answerField.value = input[0];
              resetFontSize(equationField, answerField);
          } else {
              displayResults(equationField, answerField);
          }
      });
  }
};

export const backspaceEvent = (
  backButton: Element,
  equationField: HTMLInputElement
): void => {
  backButton.addEventListener('click', () => {
      //This logic here is to slice the string from starting index
      //to the length of string - 1
      //to remove the very last character from the string
      input[numEquation] = input[numEquation].slice(
          0,
          input[numEquation].length - 1
      );

      //If the string is already empty then change it's value to '0'
      //instead of slicing it further
      if (input[numEquation] === '') {
          input[numEquation] = '0';
      }

      equationField.value = input[numEquation];
  });
};

const resetFontSize = (
  equationField: HTMLInputElement,
  answerField: HTMLInputElement
): void => {
  equationFontSizeChange = equationOriginalFontSize;
  equationField.style.fontSize = `${equationFontSizeChange}px`;
  ansFontSizeChange = ansOriginalFontSize;
  answerField.style.fontSize = `${ansOriginalFontSize}px`;
};

const checkDecreaseFontSize = (
  displayString: string,
  fontSize: number
): number => {
  if (displayString.length > maxDigitBeforeSizeChange) {
      return decreaseFontSize(displayString.length, fontSize);
  } else {
      return fontSize;
  }
};

const decreaseFontSize = (stringLength: number, fontSize: number): number => {
  const residualLength = stringLength - maxDigitBeforeSizeChange;

  for (let character = 0; character < residualLength; ++character) {
      fontSize -= fontSize * percentageDecrease;
  }

  return fontSize;
};

const evaluate = (num1: string, num2: string, operator: string): string => {
  let evalAnswer: string = num1;

  if (operator) {
      switch (operator) {
          case 'add':
              
              evalAnswer = String(parseFloat(num1) + parseFloat(num2));
              break;

          case 'subtract':
              evalAnswer = String(parseFloat(num1) - parseFloat(num2));
              break;

          case 'multiply':
              evalAnswer = String(parseFloat(num1) * parseFloat(num2));
              break;

          case 'divide':
              evalAnswer = String(parseFloat(num1) / parseFloat(num2));
              break;

          case 'modulo':
              evalAnswer = String(parseInt(num1) % parseInt(num2));
              break;
      }
  }

  return evalAnswer;
};

const displayResults = (
  equationField: HTMLInputElement,
  answerField: HTMLInputElement
): void => {
  //Decrease the font size depending on the number of digits
  if (input[1] === '') {
      input[1] = '0';
  }
  console.log(input[0], input[1]);
  answer = evaluate(input[0], input[1], operation);
  const equationFieldString = `${input[0]}${
      operationDict[<keyof typeof operationDict>operation]
  }${input[1]}`;

  equationFontSizeChange = checkDecreaseFontSize(
      equationFieldString,
      equationOriginalFontSize
  );

  equationField.style.fontSize = `${equationFontSizeChange}px`;
  equationField.value = equationFieldString;

  ansFontSizeChange = checkDecreaseFontSize(answer, ansOriginalFontSize);

  answerField.style.fontSize = `${ansFontSizeChange}px`;
  answerField.value = answer;
};

//Global Values
const equationOriginalFontSize = 60;
const ansOriginalFontSize = 45;
const maxDigitBeforeSizeChange = 8;
const percentageDecrease = 0.1;

let input = ['', ''];
let answer = '';
let numEquation = 0;
let operation = '';
let equationFontSizeChange = equationOriginalFontSize;
let ansFontSizeChange = ansOriginalFontSize;

const operationDict: Object = {
  add: '+',
  subtract: '-',
  modulo: '%',
  multiply: 'X',
  divide: '/',
};
