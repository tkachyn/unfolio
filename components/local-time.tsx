"use client";

import { useEffect, useState } from "react";
import { site } from "@/site";

type Clock = {
  hour: string;
  minute: string;
  period: string;
};

function readPart(
  parts: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes,
) {
  return parts.find((part) => part.type === type)?.value ?? "";
}

function readClock(date: Date): Clock {
  // format in the configured zone instead of the visitor's local zone
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.location.timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);

  return {
    hour: readPart(parts, "hour").padStart(2, "0"),
    minute: readPart(parts, "minute"),
    period: readPart(parts, "dayPeriod").toLowerCase(),
  };
}

export function LocalTime() {
  const [clock, setClock] = useState<Clock | null>(null);

  useEffect(() => {
    const tick = () => setClock(readClock(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const hour = clock?.hour ?? "00";
  const minute = clock?.minute ?? "00";
  const period = clock?.period ?? "am";

  return (
    <div
      className={`local-time${clock ? "" : " local-time--pending"}`}
      aria-live="polite"
      aria-label={
        clock
          ? `current time in ${site.location.city}, ${Number(hour)}:${minute} ${period}`
          : `current time in ${site.location.city}`
      }
    >
      <p className="local-time__place">
        {site.location.city}, {site.location.region}
      </p>
      <p className="local-time__clock">
        <span className="local-time__value">
          {hour}:{minute}
        </span>
        <span className="local-time__period">{period}</span>
      </p>
    </div>
  );
}
