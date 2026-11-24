export const ADS_ID = "AW-18526517907";
export const ADS_CONVERSION_SEND_TO = "AW-18526517907/SrEqCJShx74dEJP1kIJF";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAdsConversion() {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: ADS_CONVERSION_SEND_TO,
      value: 1.0,
      currency: "EUR",
    });
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "conversion",
      send_to: ADS_CONVERSION_SEND_TO,
      value: 1.0,
      currency: "EUR",
    });
  }
}
