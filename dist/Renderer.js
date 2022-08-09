class Renderer {
  constructor(jobTemplate, jobContainer) {
    this.jobTemplate = jobTemplate;
    this.jobContainer = jobContainer;
  }

  renderData = (jobData) => {
    this.jobContainer.empty();
    let source = this.jobTemplate.html();
    let template = Handlebars.compile(source);
    let html = template({ jobData });
    this.jobContainer.append(html);
  };
}
