import {
  allClearButtonEvent,
  inputEvent,
  outputEvent,
  backspaceEvent,
} from './function';
import { calculatorElements } from './userInterface';

const main = (): void => {
  const elements = getElements();
  startCalculator(elements);
};

const getElements = (): calculatorElements => {
  return {
    inputScreen: <HTMLInputElement>document.querySelector('#inputScreen'),
    outputScreen: <HTMLInputElement>document.querySelector('#outputScreen'),
    AC: <Element>document.querySelector('#AC'),
    numberButtons: document.querySelectorAll('.number'),
    operationButtons: document.querySelectorAll('.operation'),
    backButton: <Element>document.querySelector('#delete'),
  };
};

const startCalculator = (elements: calculatorElements): void => {
  //Destructuring elements
  const {
    inputScreen,
    outputScreen,
    AC,
    numberButtons,
    operationButtons,
    backButton,
  } = elements;

  //Events
  allClearButtonEvent(AC, inputScreen, outputScreen);
  inputEvent(numberButtons, inputScreen, operationButtons, outputScreen);
  outputEvent(inputScreen, operationButtons, outputScreen);
  backspaceEvent(backButton, inputScreen);
};

main();
