declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function trackPhoneClick() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "phone_click", {
      event_category: "contact",
      event_label: "phone_number",
    });
  }
}
