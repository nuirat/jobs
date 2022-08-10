const renderer = new Renderer();
const dataModel = new DataModel();

function getData() {
  dataModel.getJobs().then((result) => {
    renderer.renderData(result);
  });
}

function getCities() {
  dataModel.initNavs().then((result) => {
    renderer.renderCities(result);
  });
}

function getjobs() {
  dataModel.initNavs().then((result) => {
    renderer.renderjobs(result);
  });
}

function getYears() {
  dataModel.initNavs().then((result) => {
    renderer.renderYears(result);
  });
}

$(window).on("load", function () {
  getData();
  getCities();
  getjobs();
  getYears();
  renderer.renderStroage();
});

function secondPage(ancerElement) {
  console.log($(ancerElement).data());
  for (key in $(ancerElement).data()) {
    localStorage[key] = $(ancerElement).data(`${key}`);
    console.log(key);
  }
}
