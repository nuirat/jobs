class DataModel {
  constructor() {
    this.jobData = [];

    $.get("/allJobs", function (jobData) {
      console.log(jobData);
      this.jobData = jobData;
    });
  }
}
