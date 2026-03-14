"use server";

console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY);

import { Resend } from "resend";

export async function requestQuote(formData: FormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const resend = new Resend(apiKey);

  const fullName = String(formData.get("fullName") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const details = String(formData.get("details") || "").trim();

  if (!fullName || !phone) {
    throw new Error("Name and phone are required.");
  }

  const result = await resend.emails.send({
    from: "Mack Land Works <quote.macklandmgmt.com>",
    to: ["joe.mack@macklandmgmt.com"],
    replyTo: email || undefined,
    subject: `New quote request from ${fullName}`,
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

  if (result.error) {
    throw new Error(result.error.message || "Failed to send email.");
  }
}