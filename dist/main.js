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
});
function secondPage(element) {
  dataModel.sendViewData($(element).data("id"));
}
function filterData() {
  const city = $(".dropdown-City").find(":selected").text();
  const job = $(".dropdown-Job").find(":selected").text();
  const year = $(".dropdown-Years").find(":selected").text();
  dataModel.findTheSelectedData(city, job, year).then(function (result) {
    console.log(result);
    renderer.renderSearchFilter(result);
  });
}
