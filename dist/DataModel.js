class DataModel {
  constructor() {
    this.jobData = [];
    this.NavData = [];
    this.viewData = [];
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
  async sendViewData(id) {
    let result = await $.ajax({
      method: "GET",
      url: `/id/${id}`,
      success: () => {},
    });
    return result;
  }
  async getViewData() {
    let result = await $.ajax({
      method: "GET",
      url: `/viewId`,
      success: () => {},
    });
    return result;
  }
  async getCompanyData(user, pass) {
    let result = await $.ajax({
      method: "GET",
      url: `/signin/${user}/${pass}`,
    });
    return result;
  }
  async signinCompany() {
    let result = await $.ajax({
      method: "GET",
      url: "/signinCompany",
    });
    return result;
  }
  async addNewJob(username, password, dataObj) {
    let result = await $.ajax({
      method: "POST",
      url: "/addJob",
      data: {
        username: username,
        password: password,
        city: dataObj.city,
        jobType: dataObj.jobType,
        experinceYears: dataObj.experinceYears,
        picture: dataObj.picture,
        jobDescription: dataObj.jobDescription,
        expiredDate: dataObj.expiredDate,
        postDate: dataObj.postDate,
        experince: dataObj.experince,
        eductionLevel: dataObj.eductionLevel,
        jobTasks: dataObj.jobTasks,
      },
    });
    return result;
  }
  async addNewCompany(username, password, dataOBJ) {
    let result = await $.ajax({
      method: "POST",
      url: "/signup",
      data: {
        username: username,
        password: password,
        city: dataOBJ.city,
        jobType: dataOBJ.jobType,
        experinceYears: dataOBJ.experinceYears,
        picture: dataOBJ.picture,
        jobDescription: dataOBJ.jobDescription,
        expiredDate: dataOBJ.expiredDate,
        postDate: dataOBJ.postDate,
        experince: dataOBJ.experince,
        eductionLevel: dataOBJ.eductionLevel,
        jobTasks: dataOBJ.jobTasks,
      },
    });
    return result;
  }
  async findTheSelectedData(City, Job, Year) {
    let result = await $.ajax({
      method: "GET",
      url: `/filter/${City}/${Job}/${Year}`,
    });
    return result;
  }
}
