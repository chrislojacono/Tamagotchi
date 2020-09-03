let fun = 50;

const eatHealthy = () => {
  if (fun < 100) {
    fun += 5;
  }
  if (fun >= 100) {
    fun = 100;
  }
  return fun;
};
const eatUnhealthy = () => {
  if (fun < 100) {
    fun -= 3;
  }
  if (fun >= 100) {
    fun = 100;
  }
  if (fun <= 0) {
    fun = 0;
  }
  return fun;
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