let full = 50;

const eatHealthy = () => {
  if (full < 100) {
    full += 5;
  }
  if (full >= 100) {
    full = 100;
  }
  return full;
};
const eatUnhealthy = () => {
  if (full < 100) {
    full -= 3;
  }
  if (full >= 100) {
    full = 100;
  }
  return full;
};

const eatButtons = () => {
  $('#healthy').on('click', () => {
    $('#eatScore').html('');
    $('#eatScore').html(`<h2>${eatHealthy()}</h2>`);
  });
  $('#unhealthy').on('click', () => {
    $('#eatScore').html('');
    $('#eatScore').html(`<h2>${eatUnhealthy()}</h2>`);
  });
};

const eatDOM = () => {
  const domstring = `<div>
  <div class="header">
  <h1>Eat</h1>
  </div>
  <div id="eatScore">
  <h2>${full}</h2>
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
