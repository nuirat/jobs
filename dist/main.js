const renderer = new Renderer($(".job-container"), $("#job-template"));
const dataModel = new DataModel();
function getData() {
  renderer.renderData(dataModel.jobData);
}
