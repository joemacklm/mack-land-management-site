"use server";

import { Resend } from "resend";

export async function requestQuote(formData: FormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  console.log("API KEY EXISTS:", !!apiKey);

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

  console.log("FORM DATA:", {
    fullName,
    phone,
    email,
    location,
    service,
    details,
  });

  if (!fullName || !phone) {
    throw new Error("Name and phone are required.");
  }

  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
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

  console.log("RESEND RESULT:", result);

  if (result.error) {
    throw new Error(result.error.message || "Failed to send email.");
  }
}