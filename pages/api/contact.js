import nodemailer from "nodemailer";

export default async (req, res) => {
  let { name, email, subject, message } = req.body;
  // setup email data with unicode symbols

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

  let msg = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`;
  const mailer = () => {
    let mailBody = {
      from: email, // sender address
      to: "rgnldslvstr@gmail.com", // list of receivers
      subject: subject, // Subject line
      html: msg, // html body
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
