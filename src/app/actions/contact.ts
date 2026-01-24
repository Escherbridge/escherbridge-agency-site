"use server";

import { Resend } from "resend";

// Lazy initialization to avoid errors when API key is not set
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

interface ContactData {
  name: string;
  email: string;
  company?: string;
  inquiryType: string;
  budget?: string;
  message: string;
}

export async function submitContact(data: ContactData): Promise<{ success: boolean; error?: string }> {
  const { name, email, company, inquiryType, budget, message } = data;

  const inquiryLabels: Record<string, string> = {
    project: "New Project",
    consulting: "Consulting Engagement",
    fractional: "Fractional CTO",
    other: "General Inquiry",
  };

  const emailContent = `
New inquiry from Escherbridge website

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Inquiry Type: ${inquiryLabels[inquiryType] || inquiryType}
Budget: ${budget || "Not provided"}

Message:
${message}
  `.trim();

  try {
    const resend = getResendClient();

    // Check if Resend API key is configured
    if (!resend) {
      console.log("Contact form submission (no Resend API key configured):");
      console.log(emailContent);
      return { success: true };
    }

    await resend.emails.send({
      from: "Escherbridge <noreply@escherbridge.com>",
      to: process.env.CONTACT_EMAIL || "hello@escherbridge.com",
      replyTo: email,
      subject: `[Escherbridge] ${inquiryLabels[inquiryType]} from ${name}`,
      text: emailContent,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: "Failed to send message" };
  }
}
