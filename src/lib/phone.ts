export function validatePhone(phone: string): { valid: boolean; country: "MY" | "SG" | null; formatted: string } {
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");

  // Malaysia: +60 followed by 9-10 digits
  if (/^\+?60\d{9,10}$/.test(cleaned)) {
    const formatted = cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
    return { valid: true, country: "MY", formatted };
  }

  // Singapore: +65 followed by 8 digits
  if (/^\+?65\d{8}$/.test(cleaned)) {
    const formatted = cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
    return { valid: true, country: "SG", formatted };
  }

  // Try without country code — assume MY for 10-11 digit starting with 0, SG for 8 digit
  if (/^0\d{9,10}$/.test(cleaned)) {
    return { valid: true, country: "MY", formatted: `+6${cleaned}` };
  }
  if (/^\d{8}$/.test(cleaned)) {
    return { valid: true, country: "SG", formatted: `+65${cleaned}` };
  }

  return { valid: false, country: null, formatted: cleaned };
}
