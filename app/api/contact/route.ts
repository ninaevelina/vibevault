import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

type ResponseData = {
  message?: string;
  status?: string;
};

export async function POST(req: NextRequest) {
  let response: ResponseData = {};
  const body = await req.json();

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;

  const data = {
    to: "vibevault.develop@gmail.com",
    from: "vibevault.develop@gmail.com",
    subject: "Request an Album",
    text: "message",
    html: message.replace(/\r\n/g, "<br>"),
  };

  await sgMail
    .send(data)
    .then(() => {
      response = {
        status: "success",
        message: "Your request was successfully sent.",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Failed to send message with error: ${error}`,
      };
    });
  return NextResponse.json(response);
}
