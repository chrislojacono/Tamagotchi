import data from '../data/data';

const progress = () => {
  let progressBar = 0;
  progressBar += Number(data.energy.energy);
  progressBar += Number(data.play.fun);
  progressBar += Number(data.eat.full);
  progressBar += Number(data.strength.strength);
  const newValue = Number(progressBar) / 4;
  return newValue;
};

const renderProgress = () => {
  const domstring = `<div class="progressDiv">
    <div class="header">
    <h1>Overall Score</h1>
    </div>
    <div id="progress-bar">
    <h3>Your overall health is at ${progress()}%</h3>
    </div>
    </div>`;
  $('#progress').html(domstring);
};

export default { renderProgress, progress };
