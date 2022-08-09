class DataModel {
  constructor() {
    this.jobData = [];
    $.get("/allJobs", function (error, jobData) {
      this.jobData = jobData;
    });
  }
}
