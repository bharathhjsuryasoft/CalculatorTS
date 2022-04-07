import {
  acButtonEvent,
  numPadEvents,
  operationEvents,
  backspaceEvent,
} from './function';
import { webpageElements } from './userInterface';

const main = (): void => {
  const elements = getElements();
  startCalculator(elements);
};

const getElements = (): webpageElements => {
  return {
      equationField: <HTMLInputElement>(
          document.querySelector('#equationField')
      ),
      answerField: <HTMLInputElement>document.querySelector('#answerField'),
      acButton: <Element>document.querySelector('#AC'),
      numButtons: document.querySelectorAll('.number'),
      operationButtons: document.querySelectorAll('.operation'),
      backButton: <Element>document.querySelector('#delete'),
  };
};

const startCalculator = (elements: webpageElements): void => {
  //Destructuring elements
  const {
      equationField,
      answerField,
      acButton,
      numButtons,
      operationButtons,
      backButton,
  } = elements;

  //Adding Event Listeners for our calculator
  acButtonEvent(acButton, equationField, answerField);
  numPadEvents(numButtons, equationField);
  operationEvents(operationButtons, equationField, answerField);
  backspaceEvent(backButton, equationField);
};

main();
