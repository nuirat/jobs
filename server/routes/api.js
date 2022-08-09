const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const Jobs = require("../models/Job");
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
module.exports = router;
