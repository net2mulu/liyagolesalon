"use client";
import { useState, useEffect } from "react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { serviceCategories } from "@/app/lib/services";

const serviceMetadata: Record<string, { img: string, desc: string }> = {
  "Hairstyling & Luxury Blowouts": {
    img: "/compressed/1.webp",
    desc: "Luxury wash and professional blowout for volume and shine that lasts."
  },
  "Hair Extensions Installation": {
    img: "/compressed/2.webp",
    desc: "Seamless, high-quality extensions for natural-looking volume and length."
  },
  "Braids & Protective Styling": {
    img: "/compressed/3.webp",
    desc: "Beautifully crafted braids designed to protect and celebrate your natural hair."
  },
  "Professional Hair Coloring": {
    img: "/compressed/13.jpg",
    desc: "Expert color transitions and vibrant hues tailored to your unique style."
  },
  "Classic & Spa Pedicure": {
    img: "/compressed/11.webp",
    desc: "Indulgent foot care including exfoliation, massage, and precision polish."
  },
  "Luxury Manicure Services": {
    img: "/compressed/12.webp",
    desc: "Refined nail care and gel services for an elegant, polished finish."
  },
  "Face & Body Waxing": {
    img: "/compressed/9.webp",
    desc: "Gentle and effective hair removal for smooth, radiant skin everywhere."
  },
  "Eyelash Extensions": {
    img: "/compressed/8.webp",
    desc: "Customized lash sets to enhance your eyes with volume and elegance."
  },
  "Japanese Head Spa": {
    img: "/compressed/14.jpg",
    desc: "Deeply relaxing scalp treatment focusing on health and total rejuvenation."
  },
  "Relaxing Foot Massage": {
    img: "/compressed/15.jpg",
    desc: "Focused pressure and soothing techniques to relieve tension and stress."
  },
  "Professional Makeup Services": {
    img: "/compressed/liyagole.JPG",
    desc: "Artistic makeup application for weddings, events, or everyday luxury."
  }
};

export default function ServicesPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBook = (service: string) => {
    router.push(`/contact?service=${encodeURIComponent(service)}`);
  };
  const slides = [
    { img: "/compressed/liyagole.JPG", label: "International Standards" },
    { img: "/compressed/liya.JPG", label: "Artistic Precision" },
    { img: "/compressed/13.jpg", label: "Luxury Care" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#FDFDF5]">
      <main>
        {/* Hero Section with Automated Slider */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-[#1E3A2F] flex items-center">
          {/* Sliding Background Images */}
          <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="relative min-w-full h-full"
              >
                <NextImage
                  src={slide.img}
                  alt={slide.label}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>

          {/* Raw Media Container Overlay (Very subtle to keep text readable) */}
          <div className="absolute inset-0 z-10 bg-black/20" />

          <div className="site-container relative z-20 w-full">
            <div className="max-w-4xl">
              <h1 className="font-(--font-display) text-6xl md:text-8xl leading-none text-white tracking-tighter mb-8">
                Elevated <br />
                <span className="text-[#819671] italic translate-x-12 md:translate-x-24 block">Artistry.</span>
              </h1>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mt-16">
                 {/* Slide Indicator */}
                 <div className="flex gap-3">
                    {slides.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 transition-all duration-700 ${i === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/20'}`} 
                      />
                    ))}
                 </div>
                 <p className="max-w-md text-white/70 text-lg md:text-xl font-light leading-relaxed">
                   Discover our curated range of premium services, where every treatment is a blend of international excellence and personalized care.
                 </p>
              </div>
            </div>
          </div>
        </section>


        {/* Featured Service Detail */}
        <section className="site-container py-24">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden group shadow-2xl">
              <NextImage
                src="/compressed/liya.JPG"
                alt="Liya Gole Excellence"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2F]/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block text-white/70">Featured Specialist</span>
                <h3 className="text-4xl font-(--font-display) mb-4 tracking-tight leading-tight italic">The Liya Gole Signature</h3>
                <p className="text-white/80 text-base leading-relaxed font-light max-w-sm">
                  Our signature approach blends mastery from Los Angeles and Addis Ababa to redefine your beauty journey.
                </p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A2F]/5 text-[#819671]">
                <span className="text-lg">✦</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Our Philosophy</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-(--font-display) text-[#1E3A2F] tracking-tighter leading-[1.1]">
                Precision in Every <br />
                <span className="text-[#819671] italic">Detail.</span>
              </h2>
              <div className="space-y-8 text-lg text-[#4A5D45]/80 leading-relaxed font-light">
                <p>
                  At Liya Gole Salon, we believe beauty isn't rushed—it's crafted. Our team of specialists is trained to international standards, ensuring your experience is both restorative and transformative.
                </p>
                <div className="grid gap-6 pt-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#819671] mt-2.5" />
                    <p className="text-base text-[#1E3A2F]/70 italic">Licensed experts with over 10 years of global experience.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#819671] mt-2.5" />
                    <p className="text-base text-[#1E3A2F]/70 italic">Premium international products curated for all hair types.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-[#F4F4E4]/40 py-32">
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {serviceCategories[0].items.map((item) => {
                const meta = serviceMetadata[item] || { img: "/compressed/1.webp", desc: "Premium service designed for your needs." };
                return (
                  <div 
                    key={item} 
                    onClick={() => handleBook(item)}
                    className="group flex flex-col h-full bg-white rounded-[40px] overflow-hidden border border-[#1E3A2F]/5 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(30,58,47,0.1)] hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <NextImage
                        src={meta.img}
                        alt={item}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#1E3A2F]/5 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col flex-1">
                      <h4 className="text-2xl font-medium text-[#1E3A2F] mb-4 tracking-tight group-hover:text-[#819671] transition-colors">{item}</h4>
                      <p className="text-base text-[#4A5D45]/70 mb-10 font-light leading-relaxed flex-1">
                        {meta.desc}
                      </p>
                      <div className="pt-6 border-t border-[#1E3A2F]/5 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#819671]">Starting at $40</span>
                        <div className="text-[11px] font-bold uppercase tracking-widest text-[#1E3A2F] group-hover:text-[#819671] transition-all flex items-center gap-2">
                          Book Now
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-[#1E3A2F] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <NextImage src="/pattern/3.png" alt="" fill className="object-cover" />
          </div>

          <div className="site-container relative z-10 text-center max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#819671] mb-8 block">Experience the Difference</span>
            <h2 className="text-4xl md:text-6xl font-(--font-display) text-white mb-10 tracking-tight leading-tight italic line-clamp-2">Beyond Beauty, We Craft <br /> Confidence.</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-16 px-6 md:px-0">
              Liya Gole Salon introduces bespoke care through elegant services tailored to every client&apos;s unique hair history, texture, and style goal.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function PackageCard({ title, price, features, onBook, highlight = false }: { title: string, price: string, features: string[], onBook: () => void, highlight?: boolean }) {
  return (
    <div className={`rounded-[40px] p-10 flex flex-col text-left transition-all ${highlight ? 'bg-[#1E3A2F] text-white shadow-2xl scale-105' : 'bg-white text-[#1E3A2F] border border-[#1E3A2F]/5'
      }`}>
      {highlight && <div className="bg-[#F4F4E4] text-[#1E3A2F] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-end mb-4">Most Popular</div>}
      <h3 className="text-2xl font-medium mb-2 tracking-tight">{title}</h3>
      <div className="flex items-baseline gap-1 mb-10">
        <span className="text-4xl font-semibold">${price}</span>
        <span className={`text-sm ${highlight ? 'text-white/60' : 'text-[#4A5D45]/60'}`}>Starting</span>
      </div>
      <ul className="space-y-5 mb-12 flex-grow">
        {features.map(f => (
          <li key={f} className="flex gap-3 text-[15px] font-light">
            <span className={highlight ? 'text-white/40' : 'text-[#1E3A2F]/30'}>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={onBook}
        className={`w-full py-4 rounded-full font-semibold transition-all ${highlight ? 'bg-[#FDFDF5] text-[#1E3A2F] hover:bg-white' : 'bg-[#1E3A2F] text-white hover:bg-[#2A4D3E]'
        }`}>
        Book Now
      </button>
    </div>
  );
}
