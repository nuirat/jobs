class DataModel {
  constructor() {
    this.jobData = [];
    this.city=[] ;
    this.years=[];
    this.type=[] ;
  }
  async getJobs() {
    let result = await $.ajax({
      method: "GET",
      url: "/allJobs",
    });
    this.jobData = result;
    return this.jobData;
  }

  async getCitys() {
    let result = await $.ajax({
      method: "GET",
      url: "/init",
    });
  this.city=result.map(job =>job.city)
  this.type=result.map(job=>job.jobType)
  this.years=result.map(job=>job.experinceYears)
  }

 
}
