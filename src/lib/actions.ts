"use server";

import { getSupabaseAdmin } from "./supabase";
import { validatePhone } from "./phone";

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

  return { success: true };
}
