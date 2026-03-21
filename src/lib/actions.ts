"use server";

import { Resend } from "resend";
import { getSupabaseAdmin } from "./supabase";
import { validatePhone } from "./phone";

const resend = new Resend(process.env.RESEND_API_KEY);

interface LeadInput {
  name: string;
  phone: string;
  message?: string;
  packageInterest?: string;
  photos?: string[];
  source?: string;
}

export async function submitLead(input: LeadInput) {
  // Validate required fields
  if (!input.name?.trim()) {
    return { success: false, error: "Please enter your name." };
  }

  // Validate phone
  const phoneResult = validatePhone(input.phone);
  if (!phoneResult.valid) {
    return {
      success: false,
      error:
        "Please enter a valid Malaysian (+60) or Singaporean (+65) phone number.",
    };
  }

  const supabase = getSupabaseAdmin();

  const { error } = await supabase.from("leads").insert({
    name: input.name.trim(),
    phone: phoneResult.formatted,
    message: input.message?.trim() || null,
    package_interest: input.packageInterest || null,
    photos: input.photos || [],
    country: phoneResult.country,
    source: input.source || "website",
  });

  if (error) {
    console.error("Lead insert error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try WhatsApp instead.",
    };
  }

  // Send email notification (non-blocking — don't fail the lead submission)
  if (process.env.RESEND_API_KEY) {
    try {
      await resend.emails.send({
        from: "Jaga Leads <leads@jagacare.com>",
        to: "hello@jagacare.com",
        subject: `New lead: ${input.name.trim()} (${phoneResult.country})`,
        html: `
          <h2>New Lead from Jaga Website</h2>
          <p><strong>Name:</strong> ${input.name.trim()}</p>
          <p><strong>Phone:</strong> ${phoneResult.formatted}</p>
          <p><strong>Country:</strong> ${phoneResult.country}</p>
          <p><strong>Package Interest:</strong> ${input.packageInterest || "Not specified"}</p>
          <p><strong>Message:</strong> ${input.message || "None"}</p>
          <p><strong>Photos:</strong> ${input.photos?.length || 0} uploaded</p>
          <hr />
          <p><a href="https://wa.me/${phoneResult.formatted.replace("+", "")}">Reply on WhatsApp →</a></p>
        `,
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
      // Don't fail the lead submission
    }
  }

  return { success: true };
}
