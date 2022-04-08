//Global Values
const operationDictionary: Object = {
  addition: '+',
  subtraction: '-',
  modulus: '%',
  multiplication: '*',
  division: '/',
  point: '.',
};

let operationSymbols = Object.values(operationDictionary);

const equationOriginalFontSize = 60;
const ansOriginalFontSize = 45;
const maxDigitBeforeSizeChange = 8;
const percentageDecrease = 0.1;

let equationFontSizeChange = equationOriginalFontSize;
let ansFontSizeChange = ansOriginalFontSize;

// All Clear Function
export const allClearButtonEvent = (
  AC: Element,
  inputScreen: HTMLInputElement,
  outputScreen: HTMLInputElement
): void => {
  AC.addEventListener('click', () => {
    inputScreen.value = '';
    outputScreen.value = '';
  });
};

// Input Screen Function
export const inputEvent = (
  numberButtons: NodeListOf<Element>,
  inputScreen: HTMLInputElement,
  operationButtons: NodeListOf<Element>,
  outputScreen: HTMLInputElement
): void => {
  for (let numberButton of numberButtons) {
    // Number Input
    numberButton.addEventListener('click', () => {
      inputScreen.value += numberButton.id;
      // Font Size Change
      equationFontSizeChange = checkDecreaseFontSize(
        inputScreen.value,
        equationOriginalFontSize
      );
      inputScreen.style.fontSize = `${equationFontSizeChange}px`;
    });
  }
  // Operator Input
  for (let operationButton of operationButtons) {
    operationButton.addEventListener('click', () => {
      if (operationButton.id !== 'equals') {
        let temp: string = inputScreen.value;
        inputScreen.value += operationDictionary[`${operationButton.id}`];
        inputScreen.value = replaceOperatorCheck(inputScreen.value);
      }
    });
  }
};

// Output Screen Function
export const outputEvent = (
  inputScreen: HTMLInputElement,
  operationButtons: NodeListOf<Element>,
  outputScreen: HTMLInputElement
): void => {
  for (let operationButton of operationButtons) {
    operationButton.addEventListener('click', () => {
      if (operationButton.id === 'equals') {
        let expression: string = inputScreen.value;
        // Check if any operator is last Character
        if (
          operationSymbols.indexOf(`${expression[expression.length - 1]}`) !==
          -1
        ) {
          return;
        }
        // Calculation of the equation
        let equation: string = inputScreen.value;
        outputScreen.value = eval(equation);
        // Font Size Change
        ansFontSizeChange = checkDecreaseFontSize(
          outputScreen.value,
          ansOriginalFontSize
        );
        outputScreen.style.fontSize = `${ansFontSizeChange}px`;
      }
    });
  }
};

// Delete a Character
export const backspaceEvent = (
  backButton: Element,
  inputScreen: HTMLInputElement
): void => {
  backButton.addEventListener('click', () => {
    inputScreen.value = inputScreen.value.slice(
      0,
      inputScreen.value.length - 1
    );
  });
};

// Replace the old Operator with new Operator
const replaceOperatorCheck = (temp: string): string => {
  let len: number = temp.length;
  if (len > 1) {
    if (
      operationSymbols.indexOf(`${temp[len - 2]}`) !== -1 &&
      operationSymbols.indexOf(`${temp[len - 1]}`) !== -1
    ) {
      let replacedOperator: string;
      if (len == 2) {
        replacedOperator = temp[`${len - 1}`];
      } else {
        replacedOperator = temp.slice(0, len - 2) + temp[`${len - 1}`];
      }
      return replacedOperator;
    }
  }
  return temp;
};

// Font Size Check Function
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
