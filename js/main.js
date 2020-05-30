
const calcBtnsEl = document.getElementById('calc-buttons');
let activeNum  = document.getElementById('num1');
let activeSign  = document.getElementById('sign');

calcBtnsEl.addEventListener('click', (ev) => {
  if(ev.target.nodeName === 'BUTTON' && !ev.target.dataset.sign) {
    const attrVal = ev.target.getAttribute('data-num');
    activeNum.innerText += attrVal;
  }

  if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '+') {
    const attrSign = ev.target.getAttribute('data-sign');
    activeSign.innerText = attrSign;
    activeNum = document.getElementById('num2');
  }

  if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=') {
    let num1Val = +document.getElementById('num1').innerText;
    let num2Val = +document.getElementById('num2').innerText;

    const result = num1Val + num2Val; 
    document.querySelector('#result span').innerText = result;
  }

  if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '-') {
    const attrSign = ev.target.getAttribute('data-sign');
    activeSign.innerText = attrSign;
    activeNum = document.getElementById('num2');
  }

  if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=' && activeSign.innerText === '-') {
    let num1Val = document.getElementById('num1').innerText;
    let num2Val = document.getElementById('num2').innerText;

    const result = num1Val - num2Val; 
    document.querySelector('#result span').innerText = result;
  }

  if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '/') {
    const attrSign = ev.target.getAttribute('data-sign');
    activeSign.innerText = attrSign;
    activeNum = document.getElementById('num2');
  }

  if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=' && activeSign.innerText === '/') {
    let num1Val = document.getElementById('num1').innerText;
    let num2Val = document.getElementById('num2').innerText;

    const result = num1Val / num2Val; 
    document.querySelector('#result span').innerText = result;
  }

  if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '*') {
    const attrSign = ev.target.getAttribute('data-sign');
    activeSign.innerText = attrSign;
    activeNum = document.getElementById('num2');
  }

  if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=' && activeSign.innerText === '*') {
    let num1Val = document.getElementById('num1').innerText;
    let num2Val = document.getElementById('num2').innerText;

    const result = num1Val * num2Val; 
    document.querySelector('#result span').innerText = result;
  }
})






