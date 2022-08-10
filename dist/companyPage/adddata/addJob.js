const dataModel = new DataModel();
function postData() {
  dataModel.signinCompany().then(function (result) {
    const username = result[0].username;
    const password = result[0].password;
    console.log();
    const dataOBJ = {
      city: $("#city").val(),
      jobType: $("#jobType").val(),
      experinceYears: $("#experinceYears").val(),
      picture: result[0].picture,
      jobDescription: $("#jobDescription").val(),
      expiredDate: $("#expiredDate").val(),
      postDate: $("#postDate").val(),
      experince: $("#experince").val(),
      eductionLevel: $("#eductionLevel").val(),
      jobTasks: $("#jobTasks").val(),
    };
    let keep = true;
    for (key in dataOBJ) {
      if (!dataOBJ[key]) {
        alert("there is still missing inputs");
        keep = false;
        break;
      }
    }
    if (keep) {
      dataModel.addNewJob(username, password, dataOBJ).then(function (result) {
        console.log(result);
      });
    }
  });
}
