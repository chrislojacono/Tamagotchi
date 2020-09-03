import playing from '../data/data';

const superFun = () => {
  if (playing.play.fun <= 100) {
    playing.play.fun += 50;
  }
  if (playing.play.fun >= 100) {
    playing.play.fun = 100;
  }
  return playing.play.fun;
};
const slightlyFun = () => {
  if (playing.play.fun <= 100) {
    playing.play.fun += 2;
  }
  if (playing.play.fun >= 100) {
    playing.play.fun = 100;
  }
  if (playing.play.fun <= 0) {
    playing.play.fun = 0;
  }
  return playing.play.fun;
};

const playButtons = () => {
  $('#superFun').on('click', () => {
    $('#playScore').html('');
    $('#playScore').html(`<h3>Your fun level is at ${superFun()}%</h3>`);
  });
  $('#slightlyFun').on('click', () => {
    $('#playScore').html('');
    $('#playScore').html(`<h3>Your fun level is at ${slightlyFun()}%</h3>`);
  });
};

const playDOM = () => {
  const domstring = `<div>
  <div class="header">
  <h1>Play</h1>
  </div>
  <div id="playScore">
  <h3>Your fun level is at ${playing.play.fun}%</h3>
  </div>
  <div class="button-group">
  <button id="superFun">Super Fun</button>
  <button id="slightlyFun">Slightly Fun</button>
  </div>
  </div>`;
  $('#play').html(domstring);
  playButtons();
};

export default { playDOM };
