const renderer = new Renderer();
const dataModel = new DataModel();
function getData() {
  dataModel.getJobs().then((result) => {
    renderer.renderData(result);
  });
}
$(window).on("load", function () {
  getData();
  dataModel.getCitys()
});
