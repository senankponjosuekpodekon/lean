export function toWhatsAppNumber(phone: string, defaultCountryCode = "49"): string {
  const trimmed = phone.trim();
  let digits = trimmed.replace(/\D/g, "");
  if (trimmed.startsWith("+")) return digits;
  if (digits.startsWith("00")) return digits.slice(2);
  if (digits.startsWith("0")) digits = defaultCountryCode + digits.slice(1);
  return digits;
}

export function whatsAppLink(phone: string, text?: string): string | null {
  const number = toWhatsAppNumber(phone);
  if (number.length < 8) return null;
  const query = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${number}${query}`;
}
