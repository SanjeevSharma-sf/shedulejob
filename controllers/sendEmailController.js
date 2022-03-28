const { sendEmail } = require("../utils/sendEmailService");

exports.sendEmailCont = async (req, res, next) => {
  console.log(req.body);
  const { name, company, email, phone, message, startDate, endDate } = req.body;

  //   const user = await User.findOne({ email: req.body.email });
  //   if (!user) {
  //     return res.status(404).json({
  //       message: "user not found",
  //     });
  //   }

  const emailmessage = `<p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>  
    <li>Name: ${name}</li>
    <li>Company: ${company}</li>
    <li>Email: ${email}</li>
    <li>Phone: ${phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${message}</p>
  <p>${startDate}</p> 
  <p>${endDate}</p>
  `;

  try {
    await sendEmail({
      email: email,
      subject: `Monthly Report`,
      message: emailmessage,
    });
    res.status(200).json({
      message: `Email sent to ${email} successfully`,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
