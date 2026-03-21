"use server";

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

  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!sheetUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL not configured");
    return {
      success: false,
      error: "Something went wrong. Please email hello@jaga.care instead.",
    };
  }

  try {
    const params = new URLSearchParams({
      name: input.name.trim(),
      phone: input.phone.trim(),
      country: "",
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
