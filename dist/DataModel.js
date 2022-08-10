class DataModel {
  constructor() {
    this.jobData = [];
    this.NavData = [];
  }
  async getJobs() {
    let result = await $.ajax({
      method: "GET",
      url: "/allJobs",
    });
    this.jobData = result;
    console.log(this.jobData);
    return this.jobData;
  }
  async initNavs() {
    let result = await $.ajax({
      method: "GET",
      url: "/init",
    });
    this.NavData = result;
    return this.NavData;
  }
}
