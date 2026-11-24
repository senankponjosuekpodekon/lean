export const ADS_ID = "AW-18526517907";
export const ADS_CONVERSION_OUTBOUND = "AW-18526517907/SrEqCJShx74dEJP1kIJF";
export const ADS_CONVERSION_LEAD_FORM = "AW-18526517907/rlltCMrIx74dEJP1kIJF";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function trackConversion(sendTo: string) {
  if (typeof window === "undefined") return;
  const payload = { send_to: sendTo, value: 1.0, currency: "EUR" };
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", payload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "conversion", ...payload });
  }
}

export function trackOutboundClick() {
  trackConversion(ADS_CONVERSION_OUTBOUND);
}

export function trackLeadFormSubmit() {
  trackConversion(ADS_CONVERSION_LEAD_FORM);
}
