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
let clearScreenFlag: boolean = false;
let count: number = 0;

export const allClearButtonEvent = (
  AC: Element,
  inputScreen: HTMLInputElement,
  outputScreen: HTMLInputElement
): void => {
  ACeventHandler(AC, inputScreen, outputScreen);
};

const clearScreen = (
  inputScreen: HTMLInputElement,
  outputScreen: HTMLInputElement
) => {
  if (clearScreenFlag) {
    inputScreen.value = '';
    outputScreen.value = '';
  }
  clearScreenFlag = false;
};

export const inputEvent = (
  numberButtons: NodeListOf<Element>,
  inputScreen: HTMLInputElement,
  operationButtons: NodeListOf<Element>,
  outputScreen: HTMLInputElement
): void => {
  numberEventHander(numberButtons, inputScreen, outputScreen);
  operationEventHander(operationButtons, inputScreen, outputScreen);
};

export const outputEvent = (
  inputScreen: HTMLInputElement,
  operationButtons: NodeListOf<Element>,
  outputScreen: HTMLInputElement
): void => {
  outputEventHandler(operationButtons, inputScreen, outputScreen);
};

export const backspaceEvent = (
  backButton: Element,
  inputScreen: HTMLInputElement
): void => {
  backspaceEventHandler(backButton, inputScreen);
};

const replaceOperatorCheck = (temporary: string): string => {
  let lengthOfTemporary: number = temporary.length;
  if (lengthOfTemporary > 1) {
    if (
      operationSymbols.indexOf(`${temporary[lengthOfTemporary - 2]}`) !== -1 &&
      operationSymbols.indexOf(`${temporary[lengthOfTemporary - 1]}`) !== -1
    ) {
      let replacedOperator: string;
      if (lengthOfTemporary == 2) {
        replacedOperator = temporary[`${lengthOfTemporary - 1}`];
      } else {
        replacedOperator =
          temporary[`${lengthOfTemporary - 1}`] === '.'
            ? temporary.slice(0, lengthOfTemporary - 2) + ''
            : temporary.slice(0, lengthOfTemporary - 2) +
              temporary[`${lengthOfTemporary - 1}`];
      }
      return replacedOperator;
    }
  }
  return temporary;
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

const decreaseFontSize = (
  stringlengthOfTemporarygth: number,
  fontSize: number
): number => {
  const residuallengthOfTemporarygth =
    stringlengthOfTemporarygth - maxDigitBeforeSizeChange;
  for (
    let character = 0;
    character < residuallengthOfTemporarygth;
    ++character
  ) {
    fontSize -= fontSize * percentageDecrease;
  }
  return fontSize;
};

function backspaceEventHandler(
  backButton: Element,
  inputScreen: HTMLInputElement
) {
  backButton.addEventListener('click', () => {
    inputScreen.value = inputScreen.value.slice(
      0,
      inputScreen.value.length - 1
    );
  });
}

function ACeventHandler(
  AC: Element,
  inputScreen: HTMLInputElement,
  outputScreen: HTMLInputElement
) {
  AC.addEventListener('click', () => {
    inputScreen.value = '';
    outputScreen.value = '';
    count = 0;
  });
}

function outputEventHandler(
  operationButtons: NodeListOf<Element>,
  inputScreen: HTMLInputElement,
  outputScreen: HTMLInputElement
) {
  for (let operationButton of operationButtons) {
    operationButton.addEventListener('click', () => {
      if (operationButton.id === 'equals') {
        let expression: string = inputScreen.value;
        if (
          operationSymbols.indexOf(`${expression[expression.length - 1]}`) !==
          -1
        ) {
          return;
        }
        let equation: string = inputScreen.value;
        outputScreen.value = eval(equation);
        clearScreenFlag = true;
        ansFontSizeChange = checkDecreaseFontSize(
          outputScreen.value,
          ansOriginalFontSize
        );
        outputScreen.style.fontSize = `${ansFontSizeChange}px`;
      }
    });
  }
}

function operationEventHander(
  operationButtons: NodeListOf<Element>,
  inputScreen: HTMLInputElement,
  outputScreen: HTMLInputElement
) {
  for (let operationButton of operationButtons) {
    operationButton.addEventListener('click', () => {
      clearScreen(inputScreen, outputScreen);
      if (operationButton.id === 'point') {
        count++;
        if (count === 1) {
          inputScreen.value += operationDictionary[`${operationButton.id}`];
          inputScreen.value = replaceOperatorCheck(inputScreen.value);
          return;
        } else if (count === 2) {
          inputScreen.value += '';
          inputScreen.value = replaceOperatorCheck(inputScreen.value);
        }
      } else if (operationButton.id !== 'equals') {
        inputScreen.value += operationDictionary[`${operationButton.id}`];
        inputScreen.value = replaceOperatorCheck(inputScreen.value);
        count = 0;
      }
    });
  }
}

function numberEventHander(
  numberButtons: NodeListOf<Element>,
  inputScreen: HTMLInputElement,
  outputScreen: HTMLInputElement
) {
  for (let numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
      clearScreen(inputScreen, outputScreen);
      inputScreen.value += numberButton.id;
      equationFontSizeChange = checkDecreaseFontSize(
        inputScreen.value,
        equationOriginalFontSize
      );
      inputScreen.style.fontSize = `${equationFontSizeChange}px`;
    });
  }
}
