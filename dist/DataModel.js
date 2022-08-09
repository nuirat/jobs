class DataModel {
  constructor() {
    this.jobData = [];
  }
  async getJobs() {
    let result = await $.ajax({
      method: "GET",
      url: "/allJobs",
    });
    this.jobData = result;
    return this.jobData;
  }
}
