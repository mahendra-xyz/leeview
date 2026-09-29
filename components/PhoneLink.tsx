"use client";
import { trackPhoneClick } from "@/lib/gtag";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function PhoneLink({ className, children }: Props) {
  return (
    <a href="tel:+353851818163" onClick={trackPhoneClick} className={className}>
      {children}
    </a>
  );
}
