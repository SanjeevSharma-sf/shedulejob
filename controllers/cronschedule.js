const cron = require("node-cron");
const { sendEmailCont } = require("./sendEmailController");

// Sending emails every Wednesday.
cron.schedule("* * * * * *", function () {
  console.log("---------------------");
  console.log("Running Cron Job");
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
