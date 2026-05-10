"use client";

import { useMemo, useState } from "react";
import { User, Mail, Phone, Sparkles, Calendar, Clock, Scissors, Send } from "lucide-react";
import { motion } from "motion/react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  serviceType: string;
  date: string;
  time: string;
  platform: "WhatsApp" | "Telegram";
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "251955454647";
const TELEGRAM_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME || "+251955454647";

const SERVICES = [
  "Hairstyling & Luxury Blowouts",
  "Hair Extensions Installation",
  "Braids & Protective Styling",
  "Professional Hair Coloring",
  "Classic & Spa Pedicure",
  "Luxury Manicure Services",
  "Face & Body Waxing",
  "Eyelash Extensions",
  "Japanese Head Spa",
  "Relaxing Foot Massage",
  "Professional Makeup Services"
];

export function BookingForm() {
  const [state, setState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    serviceType: "",
    date: "",
    time: "",
    platform: "WhatsApp",
  });

  const messageBody = useMemo(() => {
    return [
      "New Booking Request",
      `First Name: ${state.firstName}`,
      `Last Name: ${state.lastName}`,
      `Email: ${state.email}`,
      `Service: ${state.serviceType}`,
      `**Preferred Date:[${state.date}]**`,
      `**Preferred Time:[${state.time}]**`,
    ].join("\n");
  }, [state]);

  const handleBooking = () => {
    const encodedMessage = encodeURIComponent(messageBody);
    let url = "";

    if (state.platform === "WhatsApp") {
      url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    } else {
      url = `https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`;
    }

    window.open(url, "_blank");
  };

  return (
    <div className="relative mx-auto mt-12 max-w-4xl">
      {/* Decorative Background blur */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-brand/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

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

              <div className="sm:col-span-1">
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

              <div className="sm:col-span-2">
                <Field label="Booking Platform" icon={<Send size={14} />}>
                  <div className="flex gap-4 mt-2">
                    {["WhatsApp", "Telegram"].map((platform) => (
                      <label key={platform} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="platform"
                          value={platform}
                          checked={state.platform === platform}
                          onChange={() => setState((p) => ({ ...p, platform: platform as any }))}
                          className="w-4 h-4 accent-[#819671]"
                        />
                        <span className={`text-sm transition-colors ${state.platform === platform ? "text-[#819671] font-semibold" : "text-[#819671]/60"}`}>
                          {platform}
                        </span>
                      </label>
                    ))}
                  </div>
                </Field>
              </div>
            </div>

            {/* Submission Section */}
            <div className="mt-16">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#6b7d5d" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBooking}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#819671] py-4 text-[13px] font-semibold text-white shadow-xl shadow-[#819671]/20 transition-all"
              >
                <Sparkles size={16} />
                Confirm Booking on {state.platform}
              </motion.button>
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
