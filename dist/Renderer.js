class Renderer {
  constructor() {
    this.jobTemplate = $("#job-template");
    this.jobContainer = $(".job-container");
    this.NaveTemplate = $("#Nav-template");
    this.CityContainer = $(".dropdown-City");
  }

  renderData = (jobData) => {
    this.jobContainer.empty();
    let source = this.jobTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ jobData });
    this.jobContainer.append(html);
  };
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
    $("#image").attr("src")=localStorage["imageSrc"]
  }
}
