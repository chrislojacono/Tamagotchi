import sleep from '../data/data';
import progress from './progress';
import random from './random';

const napTime = () => {
  if (sleep.energy.energy <= 100) {
    sleep.energy.energy += random.randomizer();
  }
  if (sleep.energy.energy >= 100) {
    sleep.energy.energy = 100;
  }
  return sleep.energy.energy;
};
const deepSlumber = () => {
  if (sleep.energy.energy <= 100) {
    sleep.energy.energy += random.randomizer();
  }
  if (sleep.energy.energy >= 100) {
    sleep.energy.energy = 100;
  }
  return sleep.energy.energy;
};

const fightButtons = () => {
  $('#napTime').on('click', () => {
    $('#energy').html('');
    $('#energy').html(`<h5>Your energy is at ${napTime()}%</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
  $('#deepSlumber').on('click', () => {
    $('#energy').html('');
    $('#energy').html(`<h5>Your energy is at ${deepSlumber()}%</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
};

const sleepDOM = () => {
  const domstring = `<div>
  <div class="header">
  <h1>Sleep</h1>
  </div>
  <div id="energy">
  <h5>Your energy is at ${sleep.energy.energy}%</h5>
  </div>
  <div class="button-group">
  <button id="napTime" class="buttonClick bouncy">Nap Time</button>
  <button id="deepSlumber" class="buttonClick bouncy">Deep Slumber</button>
  </div>
  </div>`;
  $('#sleep').html(domstring);
  fightButtons();
};

export default { sleepDOM };
