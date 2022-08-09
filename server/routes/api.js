const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const Jobs = require("../models/Job");

router.get("/allJobs", (request, response) => {
  Jobs.find({}).exec(function (error, dataBase) {
    response.send(dataBase);
  });
});
router.get("/avaliavbleJobs", (request, response) => {
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

module.exports = router;
