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
  if (!input.name?.trim()) {
    return { success: false, error: "Please enter your name." };
  }

  const phoneResult = validatePhone(input.phone);
  if (!phoneResult.valid) {
    return {
      success: false,
      error:
        "Please enter a valid Malaysian (+60) or Singaporean (+65) phone number.",
    };
  }

  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!sheetUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL not configured");
    return {
      success: false,
      error: "Something went wrong. Please email hello@jaga.care instead.",
    };
  }

  try {
    // Use GET with URL params — most reliable with Google Apps Script
    const params = new URLSearchParams({
      name: input.name.trim(),
      phone: phoneResult.formatted,
      country: phoneResult.country || "",
      package_interest: input.packageInterest || "",
      message: input.message?.trim() || "",
      source: input.source || "website",
    });

    const res = await fetch(`${sheetUrl}?${params.toString()}`, {
      method: "GET",
      redirect: "follow",
    });

    const text = await res.text();
    if (!text.includes("success") && !text.includes("ok")) {
      throw new Error("Sheet API did not confirm success");
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
