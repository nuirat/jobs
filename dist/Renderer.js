class Renderer {
  constructor() {
    this.jobTemplate = $("#job-template");
    this.jobContainer = $(".job-container");
<<<<<<< HEAD
    this.navTemplate = $("#nav-template");
    this.navbarContainer = $(".navbar");
    
=======
    this.NaveTemplate = $("#Nav-template");
    this.CityContainer = $(".dropdown-City");
>>>>>>> fd96d90346c2415eb29e73a5e8b19e8e4ce3fa8a
  }

  renderData = (jobData) => {
    this.jobContainer.empty();
    let source = this.jobTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ jobData });
    this.jobContainer.append(html);
  };
<<<<<<< HEAD

  renderNav= (jobData) => {
    this.jobContainer.empty();
    let source = this.navTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ jobData });
    this.navbarContainer.append(html);
  };
=======
  renderNavs = (NavData) => {
    let City = [];
    let Year = [];
    let Job = [];
    NavData.forEach((a) => {
      if (a.city && City.indexOf(a.city) == -1) City.push(a.city);
      if (a.jobType && Job.indexOf(a.jobType) == -1) Job.push(a.jobType);
      if (a.experinceYears || 0) Year.push(a.experinceYears);
    });
    let source = this.NaveTemplate.html();
    let template = Handlebars.compile(source);
    console.log({ city: City, year: Year, job: Job });
    let html = template({ city: City, year: Year, job: Job });
    this.CityContainer.append(html);
  };
  renderStroage() {
    $("#city").text(localStorage["city"]);
    $("#jobType").text(localStorage["jobtype"]);
    $("#experinceYears").text(localStorage["experinceyears"]);
    $("#picture").attr("src", localStorage["picture"]);
    $("#jobDescription").text(localStorage["jobdescription"]);
    $("#expiredDate").text(localStorage["expireddate"]);
    $("#postDate").text(localStorage["postdate"]);
    $("#experince").text(localStorage["experince"]);
    $("#eductionLevel").text(localStorage["educationlevel"]);
    $("#jobTasks").text(localStorage["jobtasks"]);
  }
>>>>>>> fd96d90346c2415eb29e73a5e8b19e8e4ce3fa8a
}
