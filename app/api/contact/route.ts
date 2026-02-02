import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Mapping to user-specified environment variable names
    const user = process.env.user;
    const pass = process.env.pass;

    if (!user || !pass) {
      console.error("SMTP credentials (user/pass) are missing in environment variables");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Initialize Transporter (Defaulting to Gmail as indicated by the user's email)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass,
      },
    });

    // Send Mail
    await transporter.sendMail({
      from: `"${name}" <${user}>`,
      to: "sharafathabi@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: message,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; color: #000;">New Portfolio Inquiry</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <div style="background: #f4f4f4; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #ddd;">
            <p style="margin: 0; font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; margin-bottom: 10px;">Message Detail</p>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent via the Contact form on your engineering portfolio.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
