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
}
