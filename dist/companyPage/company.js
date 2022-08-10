const dataModel = new DataModel();
const render = new Renderer();
$(window).on("load", function () {
  dataModel.signinCompany().then(function (result) {
    console.log(result);
    render.renderCompany(result);
  });
});
