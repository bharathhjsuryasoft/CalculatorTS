//  querySelector
//  screen
const screentop = <HTMLInputElement>document.querySelector('#screen');
const screenUnder = document.querySelector('#screenunder');
// number {0-9}
const nmr1 = document.querySelector('#nmr1');
const nmr2 = document.querySelector('#nmr2');
const nmr3 = document.querySelector('#nmr3');
const nmr4 = document.querySelector('#nmr4');
const nmr5 = document.querySelector('#nmr5');
const nmr6 = document.querySelector('#nmr6');
const nmr7 = document.querySelector('#nmr7');
const nmr8 = document.querySelector('#nmr8');
const nmr9 = document.querySelector('#nmr9');
const nmr0 = document.querySelector('#nmr0');
//  operator {+, -, *, /, .}
const sum = document.querySelector('#sum');
const subt = document.querySelector('#subt');
const mult = document.querySelector('#mult');
const division = document.querySelector('#division');
const mod = document.querySelector('#mod');
const point = document.querySelector('#point');
//  Applications {=, Del, C}
const equal = document.querySelector('#equal');
const buttonC = document.querySelector('#C');
const buttonDel = document.querySelector('#del');
//  END querySelector

//  variables 
let number:number;
let valueOld:string;
let valueCurrent:number;

//  fuction
//  uiScreen
function uiScreen(operatortype:string) {
    screentop.value = ``;
    screenUnder.textContent = `${number}${operatortype}`;
}

//  uiScreen for result
function uiScreenResult() {
    screentop.value = ``;
    screenUnder.textContent = `${number}`;
}

// what is the typeoperator?
function operatortype ():string {
    return screenUnder.textContent[screenUnder.textContent.length - 1];
}

// 
function equaloperator() {
    if (operatortype() == '+') {
        number += Number(screentop.value);
        uiScreenResult();
    }

    if (operatortype() == '-') {
        number -= Number(screentop.value);
        uiScreenResult();
    }

    if (operatortype() == 'x') {
        number *= Number(screentop.value);
        uiScreenResult();
    }

    if (operatortype() == '/') {
        number /= Number(screentop.value);
        uiScreenResult();
    }

    if (operatortype() == '%') {
        number %= Number(screentop.value);
        uiScreenResult();
    }
}


// number fuction {0-9}
const nmr1f = function ():void {
    screentop.value = `${screentop.value}1`;
}

const nmr2f = function ():void {
    screentop.value = `${screentop.value}2`;
}

const nmr3f = function ():void {
    screentop.value = `${screentop.value}3`;
}

const nmr4f = function ():void {
    screentop.value = `${screentop.value}4`
}

const nmr5f = function ():void {
    screentop.value = `${screentop.value}5`
}

const nmr6f = function ():void {
    screentop.value = `${screentop.value}6`
}

const nmr7f = function ():void {
    screentop.value = `${screentop.value}7`
}

const nmr8f = function ():void {
    screentop.value = `${screentop.value}8`
}

const nmr9f = function ():void {
    screentop.value = `${screentop.value}9`
}

const nmr0f = function ():void {
    screentop.value = `${screentop.value}0`
}


//  operator fuction {+, -, *, /, .}
const sumf = function ():void {
    if (!number) {
        console.log(screentop.value);
        number = Number(screentop.value);
        uiScreen('+');
    }else if (screentop.value == '') {
        screenUnder.textContent = `${number}+`;
    }else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/"  || operatortype() == "%" ) {
        equaloperator();
        screenUnder.textContent = `${number}+`;
    }else{
        number += Number(screentop.value);
        uiScreen('+');
    }

    
}

const subtf = function ():void {
    if (!number) {
        console.log(screentop.value);
        number = Number(screentop.value);
        uiScreen('-');
    }else if (screentop.value == '') {
        screenUnder.textContent = `${number}-`;
    }else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/"  || operatortype() == "%" ) {
        equaloperator();
        screenUnder.textContent = `${number}-`;
    }else{
        number -= Number(screentop.value);
        uiScreen('-');
    }
}

const multf = function ():void {
    if (!number) {
        console.log(screentop.value);
        number = Number(screentop.value);
        uiScreen('x');
    }else if (screentop.value == '') {
        screenUnder.textContent = `${number}x`;
    }else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/" || operatortype() == "%" ) {
        equaloperator();
        screenUnder.textContent = `${number}x`;
    }else{
        number *= Number(screentop.value);
        uiScreen('x');
    }
}

const divisionf = function ():void {
    if (!number) {
        console.log(screentop.value);
        number = Number(screentop.value);
        uiScreen('/');
    }else if (screentop.value == '') {
        screenUnder.textContent = `${number}/`;
    }else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/" || operatortype() == "%" ) {
        equaloperator();
        screenUnder.textContent = `${number}/`;
    }else{
        number /= Number(screentop.value);
        uiScreen('/');
    }
}

const modf = function ():void {
    if (!number) {
        console.log(screentop.value);
        number = Number(screentop.value);
        uiScreen('%');
    }else if (screentop.value == '') {
        screenUnder.textContent = `${number}%`;
    }else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/" || operatortype() == "%") {
        equaloperator();
        screenUnder.textContent = `${number}%`;
    }else{
        number %= Number(screentop.value);
        uiScreen('%');
    }
}

const pointf = function ():void {
    if (screentop.value == '') {
        screentop.value = `0.`;
    }else{
        screentop.value = `${screentop.value}.`;
    }
}

let result:number;
const equalf = function () {
    equaloperator();
}

const zap = function () {
    screentop.value = '';
    screenUnder.textContent = '';
    number = 0;
}

const del = function () {
    valueOld = String(screentop.value);
    valueOld = valueOld.substring(0, valueOld.length - 1);
    valueCurrent = Number(valueOld);
    if (valueOld.length === 0) {
        screentop.value = ``;
    }else{
        screentop.value = `${valueCurrent}`;
    }
}
//  END fuction


//  addEventlistener
// number {0-9}
nmr1.addEventListener('click', nmr1f);
nmr2.addEventListener('click', nmr2f);
nmr3.addEventListener('click', nmr3f);
nmr4.addEventListener('click', nmr4f);
nmr5.addEventListener('click', nmr5f);
nmr6.addEventListener('click', nmr6f);
nmr7.addEventListener('click', nmr7f);
nmr8.addEventListener('click', nmr8f);
nmr9.addEventListener('click', nmr9f);
nmr0.addEventListener('click', nmr0f);
//  operator {+, -, *, /, .}
sum.addEventListener('click', sumf);
subt.addEventListener('click', subtf);
mult.addEventListener('click', multf);
division.addEventListener('click', divisionf);
mod.addEventListener('click', modf);
point.addEventListener('click', pointf);


equal.addEventListener('click', equalf);
buttonC.addEventListener('click', zap);
buttonDel.addEventListener('click', del);