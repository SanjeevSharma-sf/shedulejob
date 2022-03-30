const cron = require("node-cron");
const moment = require("moment");
const { sendEmailCont } = require("./sendEmailController");
const reportData = {
  type: "Company",
  email: "sanjeevnyc03@gmail.com",
  mode: "pdf",
  period: "monthly",
  startDate: moment("08-02-2021", "MM-DD-YYYY").format("MM-DD-YYYY"),
  endDate: moment("08-03-2021", "MM-DD-YYYY").format("MM-DD-YYYY"),
  isScheduling: true,
  scheduleDateTime: moment("30-03-2022 11:00:00", "DD-MM-YYYY hh:mm:ss").format(
    "DD-MM-YYYY hh:mm:ss"
  ),
};
console.log(reportData);

// Sending emails every Wednesday.
cron.schedule("* * * * *", function () {
  console.log("---------------------");
  console.log("Running Cron Job");
  const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");
  console.log(currentDate);
  const storedDate = reportDate;


  console.log();
  // try {
  //     await sendEmailCont();
  // } catch (error) {
  //    console.log(error)
  // }
});

// cron.schedule("* * * * * *", () => {
//   console.log("running a task every second");
// });
exports.cronservice = async (req, res, next) => {
  cron.schedule("* * * * * *", () => {
    console.log("running a task every second");
  });
  next();
};
