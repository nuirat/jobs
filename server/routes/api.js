const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const Jobs = require("../models/Job");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
let tempResponse = {};
let openedCompany = {};
router.get("/filter/:city/:job/:year", function (request, response) {
  const City = request.params.city;
  const JobType = request.params.job;
  const ExperinceYears = parseInt(request.params.year);
  Jobs.find({
    city: City,
    jobType: JobType,
  }).exec(function (error, result) {
    response.send(result);
  });
});
router.get("/allJobs", (request, response) => {
  Jobs.find({}).exec(function (error, dataBase) {
    response.send(dataBase);
  });
});
router.get("/search", (request, response) => {
  const requestObject = {
    city: request.body.city,
    jobType: request.body.jobType,
    experinceYears: request.body.experinceYears,
  };

  Jobs.find({
    city: requestObject.city,
    jobType: requestObject.jobType,
    experinceYears: requestObject.experinceYears,
  }).exec(function (error, filterdJobs) {
    response.send(filterdJobs);
  });
});
router.get("/init", function (request, response) {
  Jobs.find({}, { city: 1, experinceYears: 1, jobType: 1, _id: 0 }).exec(
    function (error, data) {
      response.send(data);
    }
  );
});
////////////
router.get("/id/:id", function (request, response) {
  Jobs.findById(request.params.id, function (error, docs) {
    tempResponse = docs;
  });
  response.end();
});
router.get("/viewId", function (request, response) {
  response.send(tempResponse);
});
//////////////////
router.get("/signin/:username/:password", function (request, response) {
  Jobs.find({
    username: request.params.username,
    password: request.params.password,
  }).exec(function (error, company) {
    openedCompany = company;
    response.send(company);
  });
});
router.get("/signinCompany", function (request, response) {
  response.send(openedCompany);
});
router.post("/addJob", function (request, response) {
  let jobOffer = new Jobs({
    city: request.body.city,
    jobType: request.body.jobType,
    experinceYears: request.body.experinceYears,
    picture: request.body.picture,
    jobDescription: request.body.jobDescription,
    expiredDate: request.body.expiredDate,
    postDate: request.body.postDate,
    experince: request.body.experince,
    eductionLevel: request.body.eductionLevel,
    jobTasks: request.body.jobTasks,
    username: request.body.username,
    password: request.body.password,
  });
  jobOffer.save();
  response.send(jobOffer);
});

router.post("/signup", function (request, response) {
  newCompany = new Jobs({
    city: request.body.city,
    jobType: request.body.jobType,
    experinceYears: request.body.experinceYears,
    jobDescription: request.body.jobDescription,
    expiredDate: request.body.expiredDate,
    postDate: request.body.postDate,
    experince: request.body.experince,
    eductionLevel: request.body.eductionLevel,
    picture: request.body.picture,
    username: request.body.username,
    password: request.body.password,
  });
  newCompany.save();
  response.send(newCompany);
});

module.exports = router;
