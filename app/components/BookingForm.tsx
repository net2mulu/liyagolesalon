"use client";

import { useMemo, useState } from "react";
import { User, Mail, Phone, Sparkles, MessageCircle, Calendar, Clock, Scissors } from "lucide-react";
import { motion } from "motion/react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  time: string;
};

const BOOKING_EMAIL = "booking@liyagolesalon.com";
const WHATSAPP_NUMBER = "251911223344"; // Adjust to the salon's actual number

const SERVICES = [
  "Haircut & Design",
  "Signature Styling",
  "Restorative Treatment",
  "Professional Coloring",
  "Pedicure & Manicure",
  "Special Occasion Prep"
];

export function BookingForm() {
  const [state, setState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    time: "",
  });

  const messageBody = useMemo(() => {
    return [
      "✨ *New Appointment Request from Liya Gole Salon*",
      "",
      `Guest: ${state.firstName} ${state.lastName}`,
      `Service: ${state.serviceType || "Not specified"}`,
      `Preferred Date: ${state.date || "Not specified"}`,
      `Preferred Time: ${state.time || "Not specified"}`,
      "",
      "--- Contact Details ---",
      `Email: ${state.email || "-"}`,
      `Phone: ${state.phone || "-"}`,
      "",
      "Sent with love from the website.",
    ].join("\n");
  }, [state]);

  const mailto = useMemo(() => {
    const subject = `✨ Appointment Request — ${state.firstName} ${state.lastName}`;
    return `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(messageBody)}`;
  }, [state.firstName, state.lastName, messageBody]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageBody)}`;
  }, [messageBody]);

  return (
    <div className="relative mx-auto mt-12 max-w-4xl">
      {/* Decorative Background blur */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

      {/* Trust Note */}
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex items-center justify-center gap-3"
      >
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-[#819671]/20 shadow-sm" />
          ))}
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#819671]/80">
          ✨ Trusted by 500+ happy clients
        </p>
      </motion.div> */}

      <div className="overflow-hidden rounded-[40px] border border-white/40 bg-white/40 shadow-2xl backdrop-blur-xl transition-all">
        <div className="grid lg:grid-cols-5">
          {/* Header Section */}
          <div className="bg-[#819671] p-10 text-white lg:col-span-2 flex flex-col">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 shadow-inner">
              <Sparkles className="text-white/80" size={24} />
            </div>
            <h3 className="font-(--font-display) text-3xl tracking-tight leading-tight">
              Reserve Your <br />
              <span className="text-white/70">Glow Session</span>
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-white/70">
              Step into luxury hair care. Experience the transformation where artistry meets precision.
            </p>

            <div className="mt-12 space-y-6">
              <Benefit icon={<Sparkles size={18} />} text="Personalized Styling" />
              <Benefit icon={<Scissors size={18} />} text="Expert Colorists" />
              {/* <Benefit icon={<Clock size={18} />} text="Priority Booking" /> */}
            </div>

            <div className="mt-auto pt-16 flex items-center gap-2">
              <div className="h-px flex-1 bg-white/20" />
              <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/30 whitespace-nowrap">Liya Gole Salon</p>
              <div className="h-px flex-1 bg-white/20" />
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 sm:p-12 lg:col-span-3 bg-white/50">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              <Field label="First Name" icon={<User size={14} />}>
                <input
                  type="text"
                  value={state.firstName}
                  onChange={(e) => setState((p) => ({ ...p, firstName: e.target.value }))}
                  placeholder="Lily"
                  className="peer w-full border-b border-[#819671]/20 bg-transparent py-2 text-sm outline-none transition-all placeholder:text-[#819671]/20 focus:border-[#819671]"
                />
              </Field>

              <Field label="Last Name" icon={<User size={14} />}>
                <input
                  type="text"
                  value={state.lastName}
                  onChange={(e) => setState((p) => ({ ...p, lastName: e.target.value }))}
                  placeholder="Tilahun"
                  className="peer w-full border-b border-[#819671]/20 bg-transparent py-2 text-sm outline-none transition-all placeholder:text-[#819671]/20 focus:border-[#819671]"
                />
              </Field>

              <Field label="Email Address" icon={<Mail size={14} />}>
                <input
                  type="email"
                  value={state.email}
                  onChange={(e) => setState((p) => ({ ...p, email: e.target.value }))}
                  placeholder="lily@example.com"
                  className="peer w-full border-b border-[#819671]/20 bg-transparent py-2 text-sm outline-none transition-all placeholder:text-[#819671]/20 focus:border-[#819671]"
                />
              </Field>

              <Field label="Phone Number" icon={<Phone size={14} />}>
                <input
                  type="tel"
                  value={state.phone}
                  onChange={(e) => setState((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="+251 ..."
                  className="peer w-full border-b border-[#819671]/20 bg-transparent py-2 text-sm outline-none transition-all placeholder:text-[#819671]/20 focus:border-[#819671]"
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Select Service" icon={<Scissors size={14} />}>
                  <select
                    value={state.serviceType}
                    onChange={(e) => setState((p) => ({ ...p, serviceType: e.target.value }))}
                    className="w-full border-b border-[#819671]/20 bg-transparent py-2 text-sm outline-none transition-all focus:border-[#819671] appearance-none"
                  >
                    <option value="" disabled className="text-[#819671]/40">Choose an experience...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Preferred Date" icon={<Calendar size={14} />}>
                <input
                  type="date"
                  value={state.date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setState((p) => ({ ...p, date: e.target.value }))}
                  className="w-full border-b border-[#819671]/20 bg-transparent py-2 text-sm outline-none transition-all focus:border-[#819671]"
                />
              </Field>

              <Field label="Preferred Time" icon={<Clock size={14} />}>
                <input
                  type="time"
                  value={state.time}
                  onChange={(e) => setState((p) => ({ ...p, time: e.target.value }))}
                  className="w-full border-b border-[#819671]/20 bg-transparent py-2 text-sm outline-none transition-all focus:border-[#819671]"
                />
              </Field>
            </div>

            {/* Submission Section */}
            <div className="mt-16 space-y-6">

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.a
                  whileHover={{ scale: 1.02, backgroundColor: "#6b7d5d" }}
                  whileTap={{ scale: 0.98 }}
                  href={mailto}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#819671] py-4 text-[13px] font-semibold text-white shadow-xl shadow-[#819671]/20 transition-all"
                >
                  <Sparkles size={16} />
                  Appointment Your Request
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border-2 border-green-600/10 bg-white py-4 text-[13px] font-semibold text-green-700 transition-all hover:border-green-600/30"
                >
                  <MessageCircle size={16} className="text-green-600" />
                  Chat & Book on WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[#819671]/40 group-focus-within:text-[#819671] transition-colors">
          {icon}
        </span>
        <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#819671]/60 group-focus-within:text-[#819671] transition-colors">
          {label}
        </label>
      </div>
      <div className="relative">
        {children}
        <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#819671] transition-all duration-500 peer-focus:w-full" />
      </div>
    </div>
  );
}

function Benefit({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 shadow-inner group-hover:bg-white/20 transition-all">
        {icon}
      </div>
      <span className="text-sm font-light tracking-wide text-white/80 group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}
