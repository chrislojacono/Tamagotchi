import sleep from '../data/data';

const napTime = () => {
  if (sleep.energy.energy <= 100) {
    sleep.energy.energy += 50;
  }
  if (sleep.energy.energy >= 100) {
    sleep.energy.energy = 100;
  }
  return sleep.energy.energy;
};
const deepSlumber = () => {
  if (sleep.energy.energy <= 100) {
    sleep.energy.energy += 60;
  }
  if (sleep.energy.energy >= 100) {
    sleep.energy.energy = 100;
  }
  return sleep.energy.energy;
};

const fightButtons = () => {
  $('#napTime').on('click', () => {
    $('#energy').html('');
    $('#energy').html(`<h3>Your energy is at ${napTime()}%</h3>`);
  });
  $('#deepSlumber').on('click', () => {
    $('#energy').html('');
    $('#energy').html(`<h3>Your energy is at ${deepSlumber()}%</h3>`);
  });
};

const sleepDOM = () => {
  const domstring = `<div>
  <div class="header">
  <h1>Sleep</h1>
  </div>
  <div id="energy">
  <h3>Your energy is at ${sleep.energy.energy}%</h3>
  </div>
  <div class="button-group">
  <button id="napTime">Nap Time</button>
  <button id="deepSlumber">Deep Slumber</button>
  </div>
  </div>`;
  $('#sleep').html(domstring);
  fightButtons();
};

export default { sleepDOM };
