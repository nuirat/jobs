const renderer = new Renderer();
const dataModel = new DataModel();

function getData() {
  dataModel.getJobs().then((result) => {
    renderer.renderData(result);
  });
}
function getNavs() {
  dataModel.initNavs().then((result) => {
    renderer.renderNavs(result);
  });
}
$(window).on("load", function () {
  getData();
  getNavs();
  renderer.renderStroage();
});
function secondPage(ancerElement) {
  localStorage["city"] = `${$(ancerElement).data("city")}`;
}
