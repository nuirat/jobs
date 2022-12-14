class Renderer {
  constructor() {
    this.jobTemplate = $("#job-template");
    this.jobContainer = $(".job-container");
    this.cityTemplate = $("#city-template");
    this.CityContainer = $(".dropdown-City");
    this.jobTypeTemplate = $("#jobType-template");
    this.jobTypeContainer = $(".dropdown-Job");
    this.yearContainer = $(".dropdown-Years");
    this.yearTemplate = $("#year-template");
  }

  renderData = (jobData) => {
    this.jobContainer.empty();
    let source = this.jobTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ jobData });
    this.jobContainer.append(html);
  };
  renderCities = (NavData) => {
    let City = [];
    NavData.forEach((a) => {
      if (a.city && City.indexOf(a.city) == -1) City.push(a.city);
    });

    let source = this.cityTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ city: City });
    this.CityContainer.append(html);
  };

  renderjobs = (NavData) => {
    let Job = [];
    NavData.forEach((a) => {
      if (a.jobType && Job.indexOf(a.jobType) == -1) Job.push(a.jobType);
    });
    let source = this.jobTypeTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ job: Job });
    this.jobTypeContainer.append(html);
  };

  renderYears = (NavData) => {
    let Year = [];
    NavData.forEach((a) => {
      if ((a.experinceYears || 0) && Year.indexOf(a.experinceYears) == -1)
        Year.push(a.experinceYears);
    });
    Year.sort();
    let source = this.yearTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ year: Year });
    this.yearContainer.append(html);
  };

  rendermainView(result) {
    let source = $("#view-template").html();
    let template = Handlebars.compile(source);
    let html = template(result);
    $("#view-handle").append(html);
  }
  renderCompany(companyData) {
    console.log(companyData);
    let source = $("#company-template").html();
    let template = Handlebars.compile(source);
    let html = template({ companyData });
    $("#companytamp").append(html);
  }
}
