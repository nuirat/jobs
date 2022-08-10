const dataModel = new DataModel();
function checkDataBase() {
  if ($("#password").val() && $("#userName").val()) {
    dataModel
      .getCompanyData($("#userName").val(), $("#password").val())
      .then(function (result) {
        if (result.length == 0) {
          alert("no company found please regester");
        } else {
          window.open("../companyPage/copany.html", "_blank");
        }
      });
  } else {
    alert("please full all the inputs first");
  }
}
