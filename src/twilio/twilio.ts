import { Twilio } from "twilio";

const accountSid = process.env.ACCOUNT_SID!;
const authToken = process.env.AUTH_TOKEN!;

const client = new Twilio(accountSid, authToken);

export const whatsapp = async (OTP: any) => {
  await client.messages.create({
    from: "whatsapp:+254712069869",
    to: "whatsapp:+254710518",
    body: "Buuda",
  });
};
