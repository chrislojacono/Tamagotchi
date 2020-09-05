import data from '../data/data';
import progress from './progress';
import random from './random';

const superFun = () => {
  if (data.dataStore.fun <= 100) {
    data.dataStore.fun += random.randomizer();
  }
  if (data.dataStore.fun >= 100) {
    data.dataStore.fun = 100;
  }
  return data.dataStore.fun;
};
const slightlyFun = () => {
  if (data.dataStore.fun <= 100) {
    data.dataStore.fun += random.randomizer();
  }
  if (data.dataStore.fun >= 100) {
    data.dataStore.fun = 100;
  }
  if (data.dataStore.fun <= 0) {
    data.dataStore.fun = 0;
  }
  return data.dataStore.fun;
};

const playButtons = () => {
  $('#superFun').on('click', () => {
    $('#playScore').html('');
    $('#playScore').html(`<h5>Your fun level is at ${superFun()}%</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
  $('#slightlyFun').on('click', () => {
    $('#playScore').html('');
    $('#playScore').html(`<h5>Your fun level is at ${slightlyFun()}%</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
};

const playDOM = () => {
  const domstring = `<div>
  <div class="header">
  <h1>Play</h1>
  </div>
  <div id="playScore">
  <h5>Your fun level is at ${data.dataStore.fun}%</h5>
  </div>
  <div class="button-group">
  <button id="superFun" class="buttonClick bouncy">Super Fun</button>
  <button id="slightlyFun" class="buttonClick bouncy">Slightly Fun</button>
  </div>
  </div>`;
  $('#play').html(domstring);
  playButtons();
};

export default { playDOM };
