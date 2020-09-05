import data from '../data/data';
import progress from './progress';
import random from './random';

const runAway = () => {
  if (data.dataStore.strength <= 100) {
    data.dataStore.strength += random.randomizer();
  }
  if (data.dataStore.strength >= 100) {
    data.dataStore.strength = 100;
  }
  return data.dataStore.strength;
};
const violence = () => {
  if (data.dataStore.strength <= 100) {
    data.dataStore.strength -= random.randomizer();
  }
  if (data.dataStore.strength <= 0) {
    data.dataStore.strength = 0;
  }
  return data.dataStore.strength;
};

const fightButtons = () => {
  $('#runAway').on('click', () => {
    $('#strength').html('');
    $('#strength').html(`<h5>Your strength is at ${runAway()}%</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
  $('#violence').on('click', () => {
    $('#strength').html('');
    $('#strength').html(`<h5>Your strength is at ${violence()}%</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
};

const fightDOM = () => {
  const domstring = `<div>
  <div class="header">
  <h1>Fight</h1>
  </div>
  <div id="strength">
  <h5>Your strength is at ${data.dataStore.strength}%</h5>
  </div>
  <div class="button-group">
  <button id="runAway" class="buttonClick bouncy">Run Away!!</button>
  <button id="violence" class="buttonClick bouncy">Attack!!</button>
  </div>
  </div>`;
  $('#fight').html(domstring);
  fightButtons();
};

export default { fightDOM };
