class Renderer {
  constructor() {
    this.jobTemplate = $("#job-template");
    this.jobContainer = $(".job-container");
    this.navTemplate = $("#nav-template");
    this.navbarContainer = $(".navbar");
    
  }

  renderData = (jobData) => {
    this.jobContainer.empty();
    let source = this.jobTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ jobData });
    this.jobContainer.append(html);
  };

  renderNav= (jobData) => {
    this.jobContainer.empty();
    let source = this.navTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ jobData });
    this.navbarContainer.append(html);
  };
}
