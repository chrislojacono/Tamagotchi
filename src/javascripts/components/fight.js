import fight from '../data/data';

const runAway = () => {
  if (fight.strength.strength <= 100) {
    fight.strength.strength += 1;
  }
  if (fight.strength.strength >= 100) {
    fight.strength.strength = 100;
  }
  return fight.strength.strength;
};
const violence = () => {
  if (fight.strength.strength <= 100) {
    fight.strength.strength -= 10;
  }
  if (fight.strength.strength <= 0) {
    fight.strength.strength = 0;
  }
  return fight.strength.strength;
};

const fightButtons = () => {
  $('#runAway').on('click', () => {
    $('#strength').html('');
    $('#strength').html(`<h3>Your strength is at ${runAway()}%</h3>`);
  });
  $('#violence').on('click', () => {
    $('#strength').html('');
    $('#strength').html(`<h3>Your strength is at ${violence()}%</h3>`);
  });
};

const fightDOM = () => {
  const domstring = `<div>
  <div class="header">
  <h1>Fight</h1>
  </div>
  <div id="strength">
  <h3>Your strength is at ${fight.strength.strength}%</h3>
  </div>
  <div class="button-group">
  <button id="runAway">Run Away!!</button>
  <button id="violence">Attack!!</button>
  </div>
  </div>`;
  $('#fight').html(domstring);
  fightButtons();
};

export default { fightDOM };
