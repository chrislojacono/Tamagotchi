import food from '../data/data';

const eatHealthy = () => {
  if (food.eat.full < 100) {
    food.eat.full += 5;
  }
  if (food.eat.full >= 100) {
    food.eat.full = 100;
  }
  return food.eat.full;
};

const eatUnhealthy = () => {
  if (food.eat.full <= 100) {
    food.eat.full -= 3;
  }
  if (food.eat.full <= 0) {
    food.eat.full = 0;
  }
  return food.eat.full;
};

const eatButtons = () => {
  $('#healthy').on('click', () => {
    $('#eatScore').html('');
    $('#eatScore').html(`<h3>You are ${eatHealthy()}% full</h3>`);
  });
  $('#unhealthy').on('click', () => {
    $('#eatScore').html('');
    $('#eatScore').html(`<h3>You are ${eatUnhealthy()}% full</h3>`);
  });
};

const eatDOM = () => {
  const domstring = `<div>
  <div class="header">
  <h1>Eat</h1>
  </div>
  <div id="eatScore">
  <h3>You are ${food.eat.full}% full</h3>
  </div>
  <div class="button-group">
  <button id="healthy">Healthy</button>
  <button id="unhealthy">Unhealthy</button>
  </div>
  </div>`;
  $('#eat').html(domstring);
  eatButtons();
};

export default { eatDOM, eatButtons };
