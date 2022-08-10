const dataModel = new DataModel();
const render = new Renderer();
$(window).on("load", function () {
  dataModel.getViewData().then(function (result) {
    render.rendermainView(result);
  });
});
