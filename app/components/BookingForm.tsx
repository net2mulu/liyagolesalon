"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const BOOKING_EMAIL = "booking@liyagolesalon.com";

export function BookingForm() {
  const [state, setState] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const mailto = useMemo(() => {
    const subject = `Appointment request — ${state.name || "New client"}`;
    const body = [
      "Hi Liya Gole Salon,",
      "",
      "I’d like to book an appointment.",
      "",
      `Name: ${state.name || "-"}`,
      `Phone: ${state.phone || "-"}`,
      `Service: ${state.service || "-"}`,
      "",
      "Message:",
      state.message || "-",
      "",
      "Thank you!",
    ].join("\n");

    return `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [state.message, state.name, state.phone, state.service]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
      className="rounded-3xl border bg-surface/70 p-5 shadow-(--shadow) backdrop-blur sm:p-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-muted">Book an Appointment</p>
          <h2 className="mt-2 font-(--font-display) text-2xl leading-tight tracking-tight sm:text-3xl">
            Ready to transform your look?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
            Send your request in one click—your email app will open with all
            details pre-filled.
          </p>
        </div>
        <button
          type="submit"
          className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white shadow hover:bg-brand-2 sm:mt-0"
        >
          Request booking
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name">
          <input
            value={state.name}
            onChange={(e) => setState((p) => ({ ...p, name: e.target.value }))}
            placeholder="Your name"
            className="w-full rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none focus:border-brand"
          />
        </Field>
        <Field label="Phone number">
          <input
            value={state.phone}
            onChange={(e) =>
              setState((p) => ({ ...p, phone: e.target.value }))
            }
            placeholder="(###) ###-####"
            className="w-full rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none focus:border-brand"
          />
        </Field>
        <Field label="Service you're interested in">
          <input
            value={state.service}
            onChange={(e) =>
              setState((p) => ({ ...p, service: e.target.value }))
            }
            placeholder="e.g. Hair color retouch, Special pedicure…"
            className="w-full rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none focus:border-brand"
          />
        </Field>
        <Field label="Additional notes">
          <textarea
            value={state.message}
            onChange={(e) =>
              setState((p) => ({ ...p, message: e.target.value }))
            }
            placeholder="Preferred date/time, reference notes, anything helpful…"
            rows={3}
            className="w-full resize-none rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none focus:border-brand"
          />
        </Field>
      </div>

      <p className="mt-4 text-xs text-muted">
        Tip: replace <span className="font-medium">{BOOKING_EMAIL}</span> with
        your real booking email when ready.
      </p>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

