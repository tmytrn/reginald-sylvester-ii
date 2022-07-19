import nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com",
//   port: 587,
//   auth: {
//     user: "hello@eqoffice.com",
//     pass: "BostonRocks2019!",
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

export default async (req, res) => {
  let { name, email, subject, message } = req.body;
  // setup email data with unicode symbols

  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASSWORD,
    },
    secure: true,
  });

  // console.log(req.body);

  const mailer = () => {
    let mailBody = {
      from: email, // sender address
      to: "tommy@tmytrn.com", // list of receivers
      subject: subject, // Subject line
      html: message, // html body
    };
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailBody, (error, info) =>
        error ? reject(error) : resolve(info)
      );
    });
  };

  const mailerRes = await mailer();
  res.send(mailerRes);
};
