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
  console.log($(ancerElement).data());
  for (key in $(ancerElement).data()) {
    localStorage[key] = $(ancerElement).data(`${key}`);
    console.log(key);
  }
}
