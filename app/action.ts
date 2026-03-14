"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function requestQuote(formData: FormData) {
  const fullName = String(formData.get("fullName") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const details = String(formData.get("details") || "").trim();

  if (!fullName || !phone) {
    throw new Error("Name and phone are required.");
  }

  const { error } = await resend.emails.send({
    from: "Mack Land Works <quotes@yourdomain.com>",
    to: ["your@email.com"],
    subject: `New quote request from ${fullName}`,
    replyTo: email || undefined,
    text: `
New Quote Request

Name: ${fullName}
Phone: ${phone}
Email: ${email}
Location: ${location}
Service: ${service}

Project Details:
${details}
    `.trim(),
  });

  if (error) {
    throw new Error(error.message || "Failed to send email.");
  }
}