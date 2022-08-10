const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const Jobs = require("../models/Job");

router.get("/searchV2", function (request, response) {
  const City = request.body.city;
  const JobType = request.body.jobType;
  const ExperinceYears = request.body.experinceYears;

  if (City && JobType && ExperinceYears) {
    Jobs.find({
      city: City,
      jobType: JobType,
      experinceYears: ExperinceYears,
    }).exec(function (error, filterdJobs) {
      response.send(filterdJobs);
    });
  } else if (City && JobType) {
    Jobs.find({
      city: City,
      jobType: JobType,
    }).exec(function (error, filterdJobs) {
      response.send(filterdJobs);
    });
  } else if (City && ExperinceYears) {
    Jobs.find({
      city: City,
      experinceYears: ExperinceYears,
    }).exec(function (error, filterdJobs) {
      response.send(filterdJobs);
    });
  } else if (JobType && ExperinceYears) {
    Jobs.find({
      jobType: JobType,
      experinceYears: ExperinceYears,
    }).exec(function (error, filterdJobs) {
      response.send(filterdJobs);
    });
  } else if (City) {
    Jobs.find({
      city: City,
    }).exec(function (error, filterdJobs) {
      response.send(filterdJobs);
    });
  } else if (JobType) {
    Jobs.find({
      jobType: JobType,
    }).exec(function (error, filterdJobs) {
      response.send(filterdJobs);
    });
  } else if (ExperinceYears) {
    Jobs.find({
      experinceYears: ExperinceYears,
    }).exec(function (error, filterdJobs) {
      response.send(filterdJobs);
    });
  }
});

/////
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
router.get("/signin", function (request, response) {
  Jobs.find({
    username: request.body.username,
    password: request.body.password,
  }).exec(function (error, company) {
    response.send(company);
  });
});
module.exports = router;
