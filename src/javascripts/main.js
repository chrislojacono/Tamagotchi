import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import progress from './components/progress';

const init = () => {
  eat.eatDOM();
  play.playDOM();
  fight.fightDOM();
  sleep.sleepDOM();
  progress.renderProgress();
};

init();
