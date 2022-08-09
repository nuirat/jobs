const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    city: String,
    jobType: String,
    experinceYears:Number,
    picture: String,
    jobDescription:String,
    expiredDate:Date,
    postDate:Date,
    experince:String,
    eductionLevel:String,
    jobTasks:String,
})

const Job = mongoose.model("Job", jobSchema)
module.exports = Job