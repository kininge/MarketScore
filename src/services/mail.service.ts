import nodemailer, { SentMessageInfo } from "nodemailer";
import dotenv, { DotenvParseOutput } from "dotenv";
import logger from "./log.service";

const env: DotenvParseOutput | undefined = dotenv.config().parsed;

const transporter = nodemailer.createTransport({
    service: env?.smtpServer,
    auth: {
      user: env?.userMail,
      pass: env?.EmailPass
    }
  });

  function mailService(subject:String,body:String){
    const mailOption ={
      from: env?.userMail,
      to: env?.MailTo,
      subject:String(subject),
      text: String(body)
    }
    transporter.sendMail(mailOption, function(error: Error | null, info: SentMessageInfo){
      if (error) {
        logger("info",String(error));
      } else {
        logger("info", `${info.response}`);
      }
    });
  }

export default mailService;