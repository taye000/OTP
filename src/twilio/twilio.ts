import * as dotenv from "dotenv";
dotenv.config();

const accountSid = process.env.ACCOUNT_SID!;
const authToken = process.env.AUTH_TOKEN!;

const client = require("twilio")(accountSid, authToken, {
  lazyLoading: false,
});

export const whatsapp = () => {
  client.messages
    .create({
      body: "Go F yourself",
      to: "whatsapp:+254712069869",
      from: "whatsapp:+14155238886",
    })
    .then((message: { sid: any }) =>
      console.log(
        `Message succesfully sent, Here is the message SID ${message.sid}`
      )
    )
    .done();
};
