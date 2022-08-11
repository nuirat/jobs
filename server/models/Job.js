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
  username: String,
  password: String,
});
const Job = mongoose.model("Job", jobSchema);

let newItem = new Job({
  city: "Nablus",
  jobType: "Software Engineer",
  experinceYears: 0,
  jobDescription:
    "Participate in building information systems that ensure the provision of solutions and information necessary for the various systems at the university. Participate in building and writing programs for the front-end and back-end Testing, experimenting and applying information systems and ensuring their efficiency. Troubleshoot and adjust software errors. Writing the necessary technical documentation for the systems being built. Any other tasks within the field of work requested by the direct supervisor.",
  expiredDate: new Date("2015/03/25"),
  postDate: new Date("2015/03/25"),
  experince: "Jonior",
  eductionLevel: "Bachelor",
  picture: "https://logo.clearbit.com/spotify.com",
  username: "spotify",
  password: "8",
  jobTask: "work",
  jobTasks: "work",
});

let newItem1 = new Job({
  city: "Jenin",
  jobType: "Nurse",
  experinceYears: 3,
  jobDescription:
    "His duties in the care of patients arriving at the facility include tasks such as: creating and maintaining accurate patient records, administering medications and noticing side effects, recording vital signs and announcing symptoms and changes in patient conditions. A bachelor's degree in nursing and state licensure are prerequisites for consideration",
  expiredDate: new Date("2015/03/25"),
  postDate: new Date("2015/03/25"),
  experince: "Junior",
  eductionLevel: "Bachelor",
  picture: "https://logo.clearbit.com/nurse.com",
  username: "nurse",
  password: "7",
  jobTask: "work",
});

let newItem2 = new Job({
  city: "Rawabi",
  jobType: "Software Engineer",
  experinceYears: 0,
  jobDescription:
    "The trainee obtains an approved experience certificate from Microsoft. Develop the trainee’s skills and experiences in the field of communications, Internet services and customer relations through a set of comprehensive and diverse training programs. The trainee receives a monthly salary/amount of money for the training hours. The program qualifies the trainee to enter the labor market. The program qualifies the trainee to join the various departments of the company The company gives the trainee an opportunity to learn about new technology The program qualifies the trainee to join the new services provided by the company",
  expiredDate: new Date("2015/03/25"),
  postDate: new Date("2015/03/25"),
  experince: "Junior",
  eductionLevel: "Bachelor",
  picture: "https://logo.clearbit.com/microsoft.com",
  username: "microsoft",
  password: "6",
  jobTask: "work",
});

let newItem3 = new Job({
  city: "Ramallah",
  jobType: "journalist",
  experinceYears: 5,
  jobDescription:
    "wPreparing and presenting radio programs and conveying content in an interactive manner that suits the listening and viewer audience. Editng and submitting briefs and newsletters. Coordination with officials and experts in various fields. Meeting with program managers and directors to discuss them. Be in the broadcasting room at least half an hour before the start of the programme. The ability to conduct interviews with guests, the interview may be either in person or over the phone. Conducting extensive research and gathering sufficient information on the topic covered by the presenter/broadcaster. Dealing with errors automatically and quickly without public notice. Introducing celebrities or other personalities and conducting interviews with them, in addition to interacting with the public. Adhere to the instructions and directives of the production and directing team in order to maintain coordination and successful broadcasting.e are loking for a senior software engineer",
  expiredDate: new Date("2015/03/25"),
  postDate: new Date("2015/03/25"),
  experince: "Junior",
  eductionLevel: "Bachelor",
  picture: "https://logo.clearbit.com/Audacy.com",
  username: "Audacy",
  password: "5",
  jobTask: "work",
});

let newItem4 = new Job({
  city: "Hebron",
  jobType: "Communication Officer",
  experinceYears: 1,
  jobDescription:
    "Design and implement a strategic, high-quality, and very engaging Communication Plan for SERATAC and its respective Components. This plan needs to be informed (and continuously refined) through the Communication’s Officer proactive participation and engagement with MOE Component Task Teams, the World Bank and other relevant stakeholders. Develop and maintain contact information, materials and relationships with journalists and media outlets (print, TV, radio, web etc.) to increase coverage of SERATAC in the media (print, broadcast and digital)",
  expiredDate: new Date("2015/03/25"),
  postDate: new Date("2015/03/25"),
  experince: "Junior",
  eductionLevel: "Bachelor",
  picture: "https://logo.clearbit.com/phone.com",
  username: "phone",
  password: "4",
  jobTask: "work",
});

let newItem5 = new Job({
  city: "Jafa",
  jobType: "Software Engineer",
  experinceYears: 2,
  jobDescription:
    "Maintain and administer computer networks and related computing environments, including computer hardware, systems software, applications software, and all configurations. Maintain and administer Active Directory, Domain Controller, DNS, DHCP and Exchange Server. Planning and undertaking scheduled maintenance upgrades for different hardware or software. Knowledge in IT network designing for LAN, WAN and WLAN networks. Co-supervise the implementation of the Hospital Information System (HIS). Maintain the HIS servers and technical support for employees. Linux administration and maintenance including squid, apache, and security options.",
  expiredDate: new Date("2015/03/25"),
  postDate: new Date("2015/03/25"),
  experince: "Junior",
  eductionLevel: "Bachelor",
  picture: "https://logo.clearbit.com/intel.com",
  username: "intel",
  password: "3",
  jobTask: "work",
});

let newItem6 = new Job({
  city: "Tubas",
  jobType: "Civil Engineer",
  experinceYears: 2,
  jobDescription:
    "Works to implement the designs set by the architect, but after a number of architectural controls, determining the weights and conditions of the internal foundations, the style of the structural system, and setting a structural design based on the design and architectural and construction controls.",
  expiredDate: new Date("2015/03/25"),
  postDate: new Date("2015/03/25"),
  experince: "Junior",
  eductionLevel: "Bachelor",
  picture: "https://logo.clearbit.com/home.com",
  username: "home",
  password: "2",
  jobTask: "work",
});

let newItem7 = new Job({
  city: "Jerusalem",
  jobType: "Software Engineer",
  experinceYears: 0,
  jobDescription:
    "The main goal of this assignment is to develop a mobile application which will be utilized to communicate with women business owners in Palestine. Tasdeer will also provide the needed support to transform several training materials that are currently available in BWF into visual materials (videos) that will be available for women through the application.",
  expiredDate: new Date("2015/03/25"),
  postDate: new Date("2015/03/25"),
  experince: "Jonior",
  eductionLevel: "Bachelor",
  picture: "https://logo.clearbit.com/mobile.com",
  username: "mobile",
  password: "1",
  jobTask: "work",
});
let newItem8 = new Job({
  city: "Jerusalem",
  jobType: "Manager",
  experinceYears: 0,
  jobDescription:
    "The main goal of this assignment is to develop a mobile application which will be utilized to communicate with women business owners in Palestine. Tasdeer will also provide the needed support to transform several training materials that are currently available in BWF into visual materials (videos) that will be available for women through the application.",
  expiredDate: new Date("2015/03/25"),
  postDate: new Date("2015/03/25"),
  experince: "Sineor",
  eductionLevel: "Master",
  picture: "https://logo.clearbit.com/mobile.com",
  username: "mobile",
  password: "1",
  jobTask: "work",
});
//jobTasks:
const allJobs = [
  newItem,
  newItem1,
  newItem2,
  newItem3,
  newItem4,
  newItem5,
  newItem6,
  newItem7,
  newItem8,
];

allJobs.forEach((e) => e.save());
//newItem.save();
// newItem1.save();

module.exports = Job;
