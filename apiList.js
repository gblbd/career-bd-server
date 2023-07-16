
// app.post("/jobCategories", async (req, res) => {

//   // api to show Job Categories
//   app.get("/jobCategories", async (req, res) => {


//     app.post("/jobs", async (req, res) => {


//       app.get("/jobs", async (req, res) => {


//         app.delete("/deleteJob/:id", async (req, res) => {


//           // api to update  a posted job
//           app.put("/postedJobUpdate/:id", async (req, res) => {

//             const updatedJobData = {
//               $set: {
//                 category: jobUpdate.category,
//                 jobTitle: jobUpdate.jobTitle,
//                 location: jobUpdate.location,
//                 vacancies: jobUpdate.vacancies,
//                 education: jobUpdate.education,
//                 experience: jobUpdate.experience,
//                 companySize: jobUpdate.companySize,
//                 postDate: jobUpdate.postDate,
//                 deadLine: jobUpdate.deadLine,
//                 applyStatus: jobUpdate.applyStatus,
//                 ageLimitFrom: jobUpdate.ageLimitFrom,
//                 ageLimitTo: jobUpdate.ageLimitTo,
//                 applicableFor: jobUpdate.applicableFor,

//                 employmentStatus: jobUpdate.employmentStatus,
//                 businessDescription: jobUpdate.businessDescription,
//                 jobLevel: jobUpdate.jobLevel,
//                 workPlace: jobUpdate.workPlace,
//                 jobContext: jobUpdate.jobContext,
//                 jobResponst: jobUpdate.jobResponst,

//                 workdayFrom: jobUpdate.workdayFrom,
//                 workdayTo: jobUpdate.workdayTo,
//                 worktimeFrom: jobUpdate.worktimeFrom,
//                 worktimeTo: jobUpdate.worktimeTo,

//                 salaryFrom: jobUpdate.salaryFrom,
//                 salaryTo: jobUpdate.salaryTo,
//                 salary: jobUpdate.salary,

//                 benifitsOne: jobUpdate.benifitsOne,
//                 benifitsTwo: jobUpdate.benifitsTwo,
//                 benifitsThree: jobUpdate.benifitsThree,
//                 benifitsFour: jobUpdate.benifitsFour,
//                 benifitsFive: jobUpdate.benifitsFive,
//                 benifitsSix: jobUpdate.benifitsSix,

//                 yearlyBonus: jobUpdate.yearlyBonus,
//                 salaryReview: jobUpdate.salaryReview,
//                 others: jobUpdate.others,
//                 status: jobUpdate.status,
//               }


//     // api to search  Job by search field
//     app.get("/jobSearch", async (req, res) => {
//                 const search = req.query.search;
//                 // console.log("search data : ", search);
//                 const page = parseInt(req.query.page);
//                 const size = parseInt(req.query.size);
//                 let skipSize = page * size;


//                 // api to search  Job by search field
//                 app.get("/homeJobSearch/:search/:search2/:search3", async (req, res) => {
//                   let searchData = {};

//                   // show a job by id
//                   app.get("/jobs/:id", async (req, res) => {


//                     // show all applicant on a job
//                     app.get("/applicantList", async (req, res) => {

//                       // show all saved job by job category
//                       app.get("/jobbycategory", async (req, res) => {


//                         // search job by jobTitle saved job by job category
//                         app.get("/jobByTitle", async (req, res) => {


//                           app.get("/jobapplicant", async (req, res) => {


//                             app.get("/categoryJobs", async (req, res) => {


//                               // api to delete a saved Job
//                               app.delete("/savedjob/:id", async (req, res) => {


//                                 // save application on database
//                                 app.post("/applications", async (req, res) => {


//                                   const query = {
//                                     jobId: application.jobId,
//                                     jobSeekerEmail: application.jobSeekerEmail,
//                                   };


//                                   // api to show all application
//                                   app.get("/applications", async (req, res) => {


//                                     // show all application by job seeker email
//                                     app.get("/jobseekerapply", async (req, res) => {


//                                       // api to show already applied application
//                                       app.get("/appliedApplications", async (req, res) => {


//                                         // api to save a jab as favorite
//                                         app.post("/savedjobs", async (req, res) => {
//                                           const query = {
//                                             jobId: savedjob.jobId,
//                                             email: savedjob.email,
//                                           };

//                                           app.get("/savedjobs", async (req, res) => {


//                                             // show all saved job by job seeker email
//                                             app.get("/jobseekersavedjobs", async (req, res) => {

//                                               // api to save a new user
//                                               app.post("/users", async (req, res) => {
//                                                 const user = req.body;


//                                                 // api to show all users
//                                                 app.get("/users", async (req, res) => {


//                                                   // api to show all employer
//                                                   app.get("/employers", async (req, res) => {

//                                                     // api to show all jobseeker
//                                                     app.get("/jobseekers", async (req, res) => {

//                                                       // api to show a user by id
//                                                       app.get("/users/:id", async (req, res) => {


//                                                         // api to add a user as admin
//                                                         app.put("/makeAdminUser/:email", async (req, res) => {


//                                                           // api to find admin user by email
//                                                           app.get("/adminUser/:email", async (req, res) => {


//                                                             // api to find a employer user by email
//                                                             app.get("/employerUser/:email", async (req, res) => {

//                                                               // api to find jobseeker user by email
//                                                               app.get("/jobseekerUser/:email", async (req, res) => {


//                                                                 // api to update a user
//                                                                 app.put("/users/:id", async (req, res) => {

//                                                                   $set: {
//                                                                     name: user.name,
//                                                                       address: user.address,
//           // email: user.email,
//         },


//                                                                   // api to delete a user
//                                                                   app.delete("/users/:id", async (req, res) => {



//                                                                     app.post("/employerProfile", async (req, res) => {

//                                                                       const imageUrl = response.data.data.url;
//                                                                       const newData = {
//                                                                         email,
//                                                                         name,

//                                                                         companyNameEn,
//                                                                         organizationType,
//                                                                         companyNameBn,

//                                                                         companyLogo,
//                                                                         estdYear,
//                                                                         addressEng,
//                                                                         addressBng,
//                                                                         busiDescription,

//                                                                         tradeLicense,
//                                                                         websiteURL,
//                                                                         contactPersonName,
//                                                                         contactPersonDesignation,
//                                                                         contactPersonEmail,
//                                                                         contactPersonPhone,
//                                                                       };


//                                                                       // api to show a employer by emailid
//                                                                       app.get("/employer/:email", async (req, res) => {

//                                                                         // api to update employer profile
//                                                                         app.put("/employerupdate/:id", async (req, res) => {

//                                                                           $set: {
//                                                                             companyNameEn,
//                                                                               organizationType,
//                                                                               companyNameBn,

//                                                                               companyLogo,
//                                                                               estdYear,
//                                                                               companySize,
//                                                                               addressEng,
//                                                                               addressBng,
//                                                                               busiDescription,

//                                                                               tradeLicense,
//                                                                               websiteURL,
//                                                                               contactPersonName,
//                                                                               contactPersonDesignation,
//                                                                               contactPersonEmail,
//                                                                               contactPersonPhone,


//                                                                               // show all application by job seeker email
//                                                                               app.get("/postedjob", async (req, res) => {


//                                                                                 // api to save a jobseekers Profile
//                                                                                 app.post("/jobseekerProfile", async (req, res) => {


//                                                                                   // api to show a jobseeker by email
//                                                                                   app.get("/jobseeker/:email", async (req, res) => {



//                                                                                     // api to save a jobseekers's Personal Details

//                                                                                     app.post("/jobSeekersPersonal", async (req, res) => {

//                                                                                       const imageUrl = response.data.data.url;
//                                                                                       const newData = {
//                                                                                         name,
//                                                                                         email,
//                                                                                         fathersName,
//                                                                                         mothersName,
//                                                                                         nationality,
//                                                                                         nationalId,
//                                                                                         passportNo,
//                                                                                         phone,
//                                                                                         birthDate,
//                                                                                         gender,
//                                                                                         religion,
//                                                                                         maritalStatus,
//                                                                                         presentDistrict,
//                                                                                         presentThana,
//                                                                                         presentPostOffice,
//                                                                                         presentAddressLine2,
//                                                                                         permanentDistrict,
//                                                                                         permanentThana,
//                                                                                         permanentPostOffice,
//                                                                                         permanentAddressLine2,
//                                                                                         careerObjective,
//                                                                                         image,

//                                                                                         // api to show jobseekers's Personal Details Data
//                                                                                         app.get("/jobSeekersPersonal", async (req, res) => {


//                                                                                           // api to show jobseekers's Personal Details Data by id
//                                                                                           app.get("/jobSeekersPersonal/:email", async (req, res) => {


//                                                                                             // api to update jobseekers personal data
//                                                                                             app.put("/jobSeekersPersonal/:id", async (req, res) => {

//                                                                                               $set: {
//                                                                                                 name: jobSeeker.name,
//                                                                                                   fathersName,
//                                                                                                   mothersName,

//                                                                                                   phone,
//                                                                                                   image,
//                                                                                                   birthDate,

//                                                                                                   nationality,
//                                                                                                   nationalId,
//                                                                                                   passportNo,

//                                                                                                   gender,
//                                                                                                   religion,
//                                                                                                   maritalStatus,

//                                                                                                   presentDistrict,
//                                                                                                   presentThana,
//                                                                                                   presentPostOffice,
//                                                                                                   presentAddressLine2,

//                                                                                                   permanentDistrict,
//                                                                                                   permanentThana,
//                                                                                                   permanentPostOffice,
//                                                                                                   permanentAddressLine2,

//                                                                                                   careerObjective,
//         },
//                                                                                             };


//                                                                                             // api to show jobseekers's Expriences Data by id
//                                                                                             app.get("/jobSeekersExpriences/:email", async (req, res) => {

//                                                                                               // api to update jobseekers's Expriences Data by id

//                                                                                               app.put("/jobSeekersExperiences/:id", async (req, res) => {

//                                                                                                 const updatedData = {
//                                                                                                   $set: {
//                                                                                                     expOneCompanayName,
//                                                                                                     expOneCompanayBusiness,
//                                                                                                     expOneDepartment,
//                                                                                                     expOneDesignation,
//                                                                                                     exprOneResp,
//                                                                                                     exprOneExpertise,
//                                                                                                     expOneFrom,
//                                                                                                     expOneTo,
//                                                                                                     exprCompOneAddress,

//                                                                                                     expTwoCompanayBusiness,
//                                                                                                     expTwoCompanayName,
//                                                                                                     expTwoDepartment,
//                                                                                                     expTwoDesignation,
//                                                                                                     expTwoFrom,
//                                                                                                     expTwoTo,
//                                                                                                     exprTwoExpertise,
//                                                                                                     exprTwoResp,
//                                                                                                     exprCompTwoAddress,


//                                                                                                     // api to show  jobseeker academic and training Data by id
//                                                                                                     app.get("/jobseekersAcademics/:email", async (req, res) => {


//                                                                                                       // api to update  jobseekers academic and training data update
//                                                                                                       app.put("/jobseekersAcademics/:id", async (req, res) => {

//                                                                                                         const updatedData = {
//                                                                                                           $set: {
//                                                                                                             examTitleOne,
//                                                                                                             majorOne,
//                                                                                                             instituteOne,
//                                                                                                             resultOne,
//                                                                                                             passYearOne,

//                                                                                                             examTitleTwo,
//                                                                                                             majorTwo,
//                                                                                                             instituteTwo,
//                                                                                                             resultTwo,
//                                                                                                             passYearTwo,

//                                                                                                             examTitleThree,
//                                                                                                             majorThree,
//                                                                                                             instituteThree,
//                                                                                                             resultThree,
//                                                                                                             passYearThree,

//                                                                                                             examTitleFour,
//                                                                                                             majorFour,
//                                                                                                             instituteFour,
//                                                                                                             resultFour,
//                                                                                                             passYearFour,

//                                                                                                             trainingTitleOne,
//                                                                                                             topicOne,
//                                                                                                             insAndLocationOne,
//                                                                                                             durationOne,
//                                                                                                             traningYearOne,

//                                                                                                             trainingTitleTwo,
//                                                                                                             topicTwo,
//                                                                                                             insAndLocationTwo,
//                                                                                                             durationTwo,
//                                                                                                             traningYearTwo,

//                                                                                                             trainingTitleThree,
//                                                                                                             topicThree,
//                                                                                                             insAndLocationThree,
//                                                                                                             durationThree,
//                                                                                                             traningYearThree,

//                                                                                                             gitHubLink,
//                                                                                                             linkTwo,
//                                                                                                             linkThree,
//                                                                                                             portfolio,


//                                                                                                             // api to show jobseekrs  Careers and Skill Data by id
//                                                                                                             app.get("/jobSeekersCareers/:email", async (req, res) => {


//                                                                                                               // api to update jobseekrs  Careers and  Skill Data by id
//                                                                                                               app.put("/jobseekersCareersSkill/:id", async (req, res) => {

//                                                                                                                 const updatedData = {
//                                                                                                                   $set: {
//                                                                                                                     lookingFor,
//                                                                                                                     availbaleFor,
//                                                                                                                     presentSalary,
//                                                                                                                     expectedSalary,
//                                                                                                                     category,
//                                                                                                                     preferredLocations,
//                                                                                                                     preferredOrg,

//                                                                                                                     skillOne,
//                                                                                                                     skillTwo,
//                                                                                                                     skillThree,
//                                                                                                                     skillFour,
//                                                                                                                     skillFive,
//                                                                                                                     skillSix,
//                                                                                                                     skillSeven,
//                                                                                                                     skillEight,
//                                                                                                                     skillNine,
//                                                                                                                     skillTen,
//                                                                                                                     skillLearnedBy,
//                                                                                                                     skillDesciption,
//                                                                                                                     specialQualification,

//                                                                                                                     // api to show  Languages and References Data by id
//                                                                                                                     app.get("/jobSeekersReferences/:email", async (req, res) => {


//                                                                                                                       // api to update  Languages ans References Data by id
//                                                                                                                       app.put("/jobseekersLanguagesReferences/:id", async (req, res) => {

//                                                                                                                         const updatedData = {
//                                                                                                                           $set: {
//                                                                                                                             languOne,
//                                                                                                                             writingOne,
//                                                                                                                             readingOne,
//                                                                                                                             speakingOne,

//                                                                                                                             languTwo,
//                                                                                                                             writingTwo,
//                                                                                                                             readingTwo,
//                                                                                                                             speakingTwo,

//                                                                                                                             languThree,
//                                                                                                                             readingThree,
//                                                                                                                             writingThree,
//                                                                                                                             speakingThree,

//                                                                                                                             refOneName,
//                                                                                                                             refOneDetails,
//                                                                                                                             refTwoName,
//                                                                                                                             refTwoDetails,

//                                                                                                                             other: jobSeeker.other,

//                                                                                                                             // api to save a jobseeker's Experience Data
//                                                                                                                             app.post("/jobSeekersExperiences", async (req, res) => {


//                                                                                                                               // api to show jobseeker's Experience Data
//                                                                                                                               app.get("/jobSeekersExperiences", async (req, res) => {

//                                                                                                                                 // api to save a jobseeker's Academic and Training Data
//                                                                                                                                 app.post("/jobSeekersAcademics", async (req, res) => {


//                                                                                                                                   // api to show jobseeker's Academic and Training Data
//                                                                                                                                   app.get("/jobSeekersAcademics", async (req, res) => {


//                                                                                                                                     // api to save a jobseeker's Career and Skill Data
//                                                                                                                                     app.post("/jobSeekersCareers", async (req, res) => {


//                                                                                                                                       // api to show jobseeker's Career and Skill Data
//                                                                                                                                       app.get("/jobSeekersCareers", async (req, res) => {


//                                                                                                                                         // api to save a jobseeker's Languages and References
//                                                                                                                                         app.post("/jobSeekersReferences", async (req, res) => {



//                                                                                                                                           // jobSeekers all primary data collections

//                                                                                                                                           app.get("/jobSeekersAllData/:email", async (req, res) => {

//                                                                                                                                             // api to save a suscriber
//                                                                                                                                             app.post("/subscribers", async (req, res) => {


//                                                                                                                                               // api to show all suscriber
//                                                                                                                                               app.get("/subscribers", async (req, res) => {

