"use server";

import { validatePhone } from "./phone";

interface LeadInput {
  name: string;
  phone: string;
  message?: string;
  packageInterest?: string;
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

  // Append to Google Sheet
  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!sheetUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL not configured");
    return {
      success: false,
      error: "Something went wrong. Please email hello@jaga.care instead.",
    };
  }

  try {
    const res = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: input.name.trim(),
        phone: phoneResult.formatted,
        country: phoneResult.country,
        package_interest: input.packageInterest || "",
        message: input.message?.trim() || "",
        source: input.source || "website",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      throw new Error(`Sheet API returned ${res.status}`);
    }
  } catch (err) {
    console.error("Lead submission error:", err);
    return {
      success: false,
      error: "Something went wrong. Please email hello@jaga.care instead.",
    };
  }

  return { success: true };
}
