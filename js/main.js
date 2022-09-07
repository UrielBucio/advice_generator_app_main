'use strict';
const id_advice = document.querySelector('.id-advice');
const advice = document.querySelector('.advice');
const button = document.querySelector('.button-container');
const url = 'https://api.adviceslip.com/advice';

const getAdvice = () => {
  fetch(url)
    .then(response => response.json())
    .then(response => {
      let data = response.slip;
      id_advice.innerHTML = `Advice #${data.id}`;
      advice.innerHTML = data.advice;
    })
    .catch(error => console.error(error))
}

button.addEventListener('click', () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};