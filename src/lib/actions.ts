"use server";

import { Resend } from "resend";

interface LeadInput {
  name: string;
  phone: string;
  message?: string;
  packageInterest?: string;
  source?: string;
}

export async function submitLead(input: LeadInput) {
  if (!input.name?.trim()) {
    return { success: false, error: "Please enter your name." };
  }

  if (!input.phone?.trim()) {
    return { success: false, error: "Please enter your phone number." };
  }

  // 1. Save to Google Sheet
  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (sheetUrl) {
    try {
      const params = new URLSearchParams({
        name: input.name.trim(),
        phone: input.phone.trim(),
        country: "",
        package_interest: input.packageInterest || "",
        message: input.message?.trim() || "",
        source: input.source || "website",
      });

      await fetch(`${sheetUrl}?${params.toString()}`, {
        method: "GET",
        redirect: "follow",
      });
    } catch (err) {
      console.error("Sheet error:", err);
    }
  }

  // 2. Send email notification via Resend
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const notifyEmail = process.env.NOTIFY_EMAIL || "siddhartha.sekhar@gmail.com";

      await resend.emails.send({
        from: "Jaga Leads <leads@jaga.care>",
        to: notifyEmail,
        subject: `New lead: ${input.name.trim()}`,
        html: `
          <h2>New Lead from jaga.care</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;">
            <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${input.name.trim()}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${input.phone.trim()}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Package</td><td style="padding:8px;">${input.packageInterest || "Not specified"}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${input.message?.trim() || "None"}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Source</td><td style="padding:8px;">${input.source || "website"}</td></tr>
          </table>
        `,
      });
    } catch (emailErr) {
      console.error("Email notification failed:", emailErr);
      // Don't fail the submission
    }
  }

  return { success: true };
}
