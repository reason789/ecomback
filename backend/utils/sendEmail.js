const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  /*
  const transporter = await nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    // secure: true,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

*/

  let testAccount = await nodeMailer.createTestAccount();

  let transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  let mailOptions = await transporter.sendMail({
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  });

  console.log("Message sent: %s", mailOptions.messageId);
  console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(mailOptions));
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
