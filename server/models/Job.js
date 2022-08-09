const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  city: String,
  jobType: String,
  experinceYears: Number,
  picture: String,
  jobDescription: String,
  expiredDate: Date,
  postDate: Date,
  experince: String,
  eductionLevel: String,
  jobTasks: String,
});
const Job = mongoose.model("Job", jobSchema);

let newItem = new Job({
  city: "Nablus",
  jobType: "Software Engineer",
  experinceYears: 0,
  jobDescription: "we are loking for a jonior software engineer",
  expiredDate: new Date("2023-05-12T23:50:21.817Z"),
  postDate: new Date(),
  experince: "Jonior",
  eductionLevel: "Bachelor",
});

let newItem1 = new Job({
  city: "jenin",
  jobType: "Software Engineer",
  experinceYears: 5,
  jobDescription: "we are loking for a senior software engineer",
  expiredDate: new Date(),
  postDate: new Date(),
  experince: "Senior",
  eductionLevel: "Bachelor",
});
// newItem.save();
// newItem1.save();

module.exports = Job;
