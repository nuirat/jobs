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
  localStorage["city"] = `${$(ancerElement).data("city")}`;
  localStorage["jobType"] = `${$(ancerElement).data("jobType")}`;
  localStorage["experinceYears"] = `${$(ancerElement).data("experinceYears")}`;
  localStorage["picture"] = `${$(ancerElement).data("picture")}`;
  localStorage["jobDescription"] = `${$(ancerElement).data("jobDescription")}`;
  localStorage["expiredDate"] = `${$(ancerElement).data("expiredDate")}`;
  localStorage["postDate"] = `${$(ancerElement).data("postDate")}`;
  localStorage["experince"] = `${$(ancerElement).data("experince")}`;
  localStorage["eductionLevel"] = `${$(ancerElement).data("eductionLevel")}`;
  localStorage["jobTasks"] = `${$(ancerElement).data("jobTasks")}`;
}
