"use client";

import { useConsent } from "app/context/ConsentContext";
import Google from "./Google";
import Clarity from "./Clarity";

export function AnalyticsLoader() {
  const { consent } = useConsent();

  if (consent !== "granted") {
    return null;
  }

  return (
    <>
      <Google />
      <Clarity />
    </>
  );
}
