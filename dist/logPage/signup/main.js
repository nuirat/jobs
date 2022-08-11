const dataModel = new DataModel();
const form1 = $("#form1");
const form2 = $("#form2");
const form3 = $("#form3");
const form4 = $("#form4");
const next1 = $("#next1");
const next2 = $("#next2");
const next3 = $("#next3");
const back1 = $("#back1");
const back2 = $("#back2");
const back3 = $("#back3");
const progress = $("#progress");

next1.on("click", function () {
  progress.css("width", "200px");
  form1.css("left", "-450px");
  form2.css("left", "40px");
});
back1.on("click", function () {
  progress.css("width", "120px");
  form1.css("left", "40px");
  form2.css("left", "450px");
});
next2.on("click", function () {
  progress.css("width", "250px");
  form2.css("left", "-450px");
  form3.css("left", "40px");
});
back2.on("click", function () {
  progress.css("width", "120px");
  form2.css("left", "40px");
  form3.css("left", "450px");
});
next3.on("click", function () {
  progress.css("width", "400px");
  form3.css("left", "-450px");
  form4.css("left", "40px");
});
back3.on("click", function () {
  progress.css("width", "120px");
  form3.css("left", "40px");
  form4.css("left", "450px");
});
function addNewCompany() {
  const username = $("#username").val();
  const password = $("#password").val();
  let dataOBJ = {
    city: $("#password").val(),
    jobType: $("#jobType").val(),
    experinceYears: $("#experinceYears").val(),
    picture: `https://logo.clearbit.com/${username}.com`,
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
      alert("please make sure to full all of the inputs");
      keep = false;
      break;
    }
  }
  if (keep) {
    dataModel
      .addNewCompany(username, password, dataOBJ)
      .then(function (result) {
        window.open("../log.html", "_blank");
      });
  }
}
