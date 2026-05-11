"use client";

import Image from "next/image";
import { BookingForm } from "@/app/components/BookingForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BookingContent() {
   const searchParams = useSearchParams();
   const service = searchParams.get("service") || "";

   return (
      <div className="site-container relative z-10">
         <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-white/20 text-[#1E3A2F]/80 backdrop-blur-md">
               <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Your Next Look Starts Here</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-(--font-display) text-[#819671] mb-8 tracking-tighter italic">Effortless Excellence.</h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#4A5D45]/70 font-light">
               Select your preferred service and platform below. We&apos;ll handle the rest.
            </p>
         </div>
         <BookingForm initialService={service} />
      </div>
   );
}

export default function ContactPage() {
   return (
      <div className="min-h-screen bg-[#FDFDF5] text-[#1E3A2F]">
         <main>
            {/* Booking Form Section */}
            <section className="bg-[#e6e8d8] py-24 relative overflow-hidden">
               {/* Background pattern */}
               <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
                  <span className="text-[20vw] font-bold text-black whitespace-nowrap">BOOK NOW BOOK NOW</span>
               </div>

               <Suspense fallback={<div className="site-container py-20 text-center">Loading...</div>}>
                  <BookingContent />
               </Suspense>
            </section>

            {/* Contact Hero: Editorial Split */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#FDFDF5]">
               <div className="site-container relative z-10">
                  <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                     {/* Left: Typography */}
                     <div className="relative z-20">
                        <div className="inline-flex items-center gap-4 mb-8">
                           <div className="h-px w-10 bg-[#819671]/40" />
                           <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#819671]">Studio Concierge</span>
                        </div>

                        <h1 className="font-(--font-display) text-6xl md:text-[9vw] leading-[0.8] text-[#1E3A2F] tracking-tighter mb-10">
                           Beauty <br />
                           <span className="italic text-[#819671]">Coordinate.</span>
                        </h1>

                        <div className="max-w-md border-l-2 border-[#819671]/10 pl-10 py-2">
                           <p className="text-lg md:text-xl text-[#4A5D45]/60 leading-relaxed font-light mb-8">
                              Our consultants are ready to tailor your luxury journey. Reach out to secure your moment of transformation.
                           </p>
                           <div className="flex items-center gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#819671] animate-pulse" />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1E3A2F]/40">Response within 24 hours</span>
                           </div>
                        </div>
                     </div>

                     {/* Right: The Portrait */}
                     <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[80px] lg:rounded-[120px] overflow-hidden shadow-2xl group">
                        <Image
                           src="/compressed/liyagole.JPG"
                           alt="Liya Gole Salon Ambience"
                           fill
                           className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2F]/20 via-transparent to-transparent" />

                        {/* Interactive floating label */}
                        <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-[40px] border border-white/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                           <p className="text-white text-xs font-bold uppercase tracking-widest text-center">Visit our Sanctuary</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Background Technical Watermark */}
               <div className="absolute bottom-10 left-10 pointer-events-none opacity-[0.03] select-none hidden lg:block">
                  <span className="text-[8vw] font-bold text-[#1E3A2F]">CONCIERGE_002</span>
               </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-[#F9F9F0]">
               <div className="site-container">
                  <div className="grid lg:grid-cols-12 gap-16">
                     <div className="lg:col-span-4">
                        <div className="sticky top-40">
                           <h2 className="text-4xl md:text-5xl font-(--font-display) text-[#1E3A2F] mb-8 tracking-tight">CURIOSITIES & ANSWERS</h2>
                           <p className="text-[#4A5D45]/60 text-lg font-light leading-relaxed mb-12">
                              Everything you need to know about your luxury salon experience at Liya Gole.
                           </p>
                           {/* <button className="px-8 py-3 bg-[#1E3A2F] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#819671] transition-all">
                              Download Price List
                           </button> */}
                        </div>
                     </div>
                     <div className="lg:col-span-8 space-y-4">
                        <FaqItem q="Do I need to book an appointment?" a="Yes, we recommend booking in advance to ensure availability. Personalized care takes time, and we want to ensure you receive our full attention." />
                        <FaqItem q="What is your cancellation policy?" a="We require 24-hour notice for cancellations. This allows us to offer the appointment to another client waiting for a transformation." />
                        <FaqItem q="Do you offer bridal services?" a="Absolutely. We specialize in bridal makeup and hair, offering bespoke packages that include trials and on-site services." />
                        <FaqItem q="What payment methods do you accept?" a="We accept all major credit cards, cash, and local digital payment methods including Telebirr and CBE Birr." />
                        <FaqItem q="Can I walk in for a consultation?" a="While we prefer scheduled sessions, walk-ins are welcome if a stylist is available for a brief complementary conversation." />
                     </div>
                  </div>
               </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-32 bg-white relative">
               <div className="site-container">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     <ContactInfoCard
                        icon="✦"
                        title="Direct Line"
                        lines={["+251 955 454 647", "WhatsApp Available"]}
                        linkText="Call Appointment"
                        href="tel:+251955454647"
                     />
                     <ContactInfoCard
                        icon="✉"
                        title="Digital Concierge"
                        lines={["info@liyagolesalon.com", "liyagole@gmail.com"]}
                        linkText="Send Inquiries"
                        href="mailto:info@liyagolesalon.com"
                     />
                     <ContactInfoCard
                        icon="📍"
                        title="The Sanctuary"
                        lines={["Bole Road, Addis Ababa", "Ethiopia"]}
                        linkText="Open in Maps"
                        href="https://maps.google.com"
                     />
                  </div>
               </div>
            </section>

            {/* Location & Map Experience */}
            <section className="py-0 relative">
               <div className="h-[600px] w-full relative">
                  <div className="absolute inset-0 bg-[#E8E8D0] grayscale group hover:grayscale-0 transition-all duration-1000">
                     <div className="w-full h-full bg-[#1E3A2F]/5 flex items-center justify-center">
                        <div className="bg-white p-16 rounded-[60px] shadow-2xl text-center max-w-lg relative z-20 transition-transform group-hover:scale-105">
                           <div className="w-20 h-20 bg-[#1E3A2F] text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-3xl">📍</div>
                           <h4 className="text-3xl font-(--font-display) text-[#1E3A2F] mb-4">Liya Gole Salon</h4>
                           <p className="text-[#4A5D45]/60 text-lg mb-10 font-light">Bole Road, Addis Ababa, Ethiopia <br /> Near Edna Mall Area</p>
                           <div className="flex gap-4 justify-center">
                              <a href="https://maps.google.com" target="_blank" className="bg-[#819671] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase">Directions</a>
                              <a href="tel:+251955454647" className="border border-[#1E3A2F]/10 text-[#1E3A2F] px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase">Call Us</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
}

function ContactInfoCard({ icon, title, lines, linkText, href }: { icon: string, title: string, lines: string[], linkText: string, href: string }) {
   return (
      <a href={href} className="group p-12 rounded-[50px] bg-[#F9F9F0]/50 border border-[#1E3A2F]/5 flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#1E3A2F]/5 hover:-translate-y-3">
         <div className="w-20 h-20 rounded-full border border-[#819671]/20 flex items-center justify-center text-3xl mb-10 group-hover:bg-[#819671] group-hover:text-white group-hover:border-[#819671] transition-all duration-500">
            {icon}
         </div>
         <h3 className="text-2xl font-(--font-display) text-[#1E3A2F] mb-6 tracking-tight">{title}</h3>
         <div className="space-y-2 mb-10 flex-grow">
            {lines.map((l, i) => <p key={i} className="text-[#4A5D45]/60 text-base font-light tracking-tight">{l}</p>)}
         </div>
         <span className="text-[11px] font-bold text-[#819671] uppercase tracking-[0.3em] inline-flex items-center gap-2 group-hover:gap-4 transition-all">
            {linkText} <span className="text-lg">→</span>
         </span>
      </a>
   );
}

function FaqItem({ q, a }: { q: string, a: string }) {
   return (
      <div className="p-10 rounded-[48px] bg-white border border-[#1E3A2F]/3 transition-all duration-500 hover:shadow-xl hover:shadow-[#1E3A2F]/5 group">
         <h4 className="text-2xl font-medium text-[#1E3A2F] mb-6 tracking-tight group-hover:text-[#819671] transition-colors">{q}</h4>
         <p className="text-[#4A5D45]/70 text-lg leading-relaxed font-light">{a}</p>
      </div>
   );
}
