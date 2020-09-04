import food from '../data/data';
import progress from './progress';
import random from './random';

const eatHealthy = () => {
  if (food.eat.full < 100) {
    food.eat.full += random.randomizer();
  }
  if (food.eat.full >= 100) {
    food.eat.full = 100;
  }
  return food.eat.full;
};

const eatUnhealthy = () => {
  if (food.eat.full <= 100) {
    food.eat.full -= random.randomizer();
  }
  if (food.eat.full <= 0) {
    food.eat.full = 0;
  }
  return food.eat.full;
};

const eatButtons = () => {
  $('#healthy').on('click', () => {
    $('#eatScore').html('');
    $('#eatScore').html(`<h5>Your stomach is ${eatHealthy()}% full</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
  $('#unhealthy').on('click', () => {
    $('#eatScore').html('');
    $('#eatScore').html(`<h5>Your stomach is ${eatUnhealthy()}% full</h5>`);
    $('#progress-bar').html('');
    $('#progress-bar').html(`<h3>Your overall health is at ${progress.progress()}%</h3>`);
  });
};

const eatDOM = () => {
  const domstring = `<div>
  <div class="header">
  <h1>Eat</h1>
  </div>
  <div id="eatScore">
  <h5>Your stomach is ${food.eat.full}% full</h5>
  </div>
  <div class="button-group">
  <button id="healthy" class="buttonClick">Healthy</button>
  <button id="unhealthy" class="buttonClick">Unhealthy</button>
  </div>
  </div>`;
  $('#eat').html(domstring);
  eatButtons();
};

export default { eatDOM, eatButtons };
