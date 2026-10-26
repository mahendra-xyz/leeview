declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function trackPhoneClick(url?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const callback = () => {
      if (url) window.location.href = url;
    };
    window.gtag("event", "conversion", {
      send_to: "AW-18457833957/U8lTCP3Ng6odEOXjsOFE",
      value: 1.0,
      currency: "EUR",
      event_callback: callback,
    });
  }
}
