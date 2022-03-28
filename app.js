const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const hbs = require("hbs");
const path = require("path");
const cron = require("node-cron");
const dotenv = require("dotenv");
const { sendEmailCont } = require("./controllers/sendEmailController");
const { schedule } = require("./controllers/cronschedule");

const app = express();

//config
dotenv.config({ path: "config/config.env" });

// View engine setup
//app.engine("handlebars", exphbs);
app.set("view engine", "hbs");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("contact");
});

app.post("/send", sendEmailCont);

// cron.schedule("* * * * * *", () => {
//   console.log("running a task every second");
// });
app.use(cron.schedule);

app.listen(process.env.PORT, () =>
  console.log(`Server started on port no ${process.env.PORT}`)
);
