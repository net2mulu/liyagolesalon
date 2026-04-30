"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Instagram, Scissors, Heart } from "lucide-react";

const GALLERY_CARDS = [
  {
    id: 1,
    title: "Effortless Transformation",
    category: "Signature",
    img: "/compressed/1.webp",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square md:aspect-auto h-full"
  },
  {
    id: 2,
    title: "Sharp, Clean Cut",
    category: "Precision",
    img: "/compressed/8.webp",
    span: "",
    aspect: "aspect-square"
  },
  {
    id: 3,
    title: "Bold Expression",
    category: "Coloring",
    img: "/compressed/3.webp",
    span: "",
    aspect: "aspect-square"
  },
  {
    id: 4,
    title: "Modern Flow",
    category: "Trend",
    img: "/compressed/4.webp",
    span: "md:col-span-2",
    aspect: "aspect-[16/8]"
  },
  {
    id: 5,
    title: "Restore Ritual",
    category: "Treatment",
    img: "/compressed/14.jpg",
    span: "",
    aspect: "aspect-square"
  },
  {
    id: 6,
    title: "Luxe Nail Art",
    category: "Nails",
    img: "/compressed/11.webp",
    span: "",
    aspect: "aspect-square"
  },
  {
    id: 7,
    title: "Editorial Style",
    category: "Premium",
    img: "/compressed/2.webp",
    span: "",
    aspect: "aspect-square"
  },
  {
    id: 8,
    title: "Vibrant Hue",
    category: "Art Art",
    img: "/compressed/13.jpg",
    span: "md:col-span-2",
    aspect: "aspect-[16/8]"
  },
  {
    id: 9,
    title: "Salon Ambience",
    category: "Vibes",
    img: "/compressed/9.webp",
    span: "",
    aspect: "aspect-square"
  },
  {
    id: 10,
    title: "Perfect Mani",
    category: "Details",
    img: "/compressed/10.webp",
    span: "",
    aspect: "aspect-square"
  },
  {
    id: 11,
    title: "Pure Bloom",
    category: "Beauty",
    img: "/compressed/7.webp",
    span: "",
    aspect: "aspect-square"
  },
  {
    id: 12,
    title: "Liya Look",
    category: "Icon",
    img: "/compressed/liyagole.JPG",
    span: "md:col-span-2",
    aspect: "aspect-[16/8]"
  },
];

const TEAM = [
  { name: "Liya Gole", role: "Owner & Lead Stylist", exp: "12 years", img: "/compressed/liya.JPG" },
  { name: "Hannah Mulu", role: "Advanced Colorist", exp: "8 years", img: "/compressed/13.jpg" },
  { name: "Selamawit Tadesse", role: "Skin Care Expert", exp: "6 years", img: "/compressed/14.jpg" },
  { name: "Beti Alemu", role: "Nail Art Specialist", exp: "5 years", img: "/compressed/11.webp" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#FDFDF5]">
      {/* Reduced Height Hero Section */}
      <section className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden">
        <Image
          src="/space/269A5540.JPG"
          alt="Our Signature Style"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A2F]/80 via-[#1E3A2F]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#819671]/10 backdrop-blur-[1px]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <div className="flex justify-center mb-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                <Sparkles size={10} className="text-[#819671]" />
                The Portfolio
              </span>
            </div>
            {/* <h1 className="font-(--font-display) text-4xl md:text-6xl text-white tracking-tight leading-tight">
              Signature <span className="italic serif text-[#819671]">Styles ✨</span>
            </h1> */}
            <p className="max-w-md mx-auto text-white/70 text-sm md:text-base font-light italic">
              “Crafting confidence through every strand.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* Denser Grid Section */}
      <section className="py-16 md:py-20 text-[#819671]">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`${card.span} group relative overflow-hidden rounded-[2rem] bg-white shadow-lg transition-all duration-500 hover:-translate-y-1.5`}
              >
                <div className={`relative ${card.aspect} w-full overflow-hidden`}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />

                  {/* Glass Top Label - Scaled down */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[8px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {card.category}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

                  {/* Content Reveal - Scaled down */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 pointer-events-none">
                    <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="h-[1px] w-4 bg-[#819671]" />
                        <span className="text-[#819671] text-[8px] font-bold uppercase tracking-[0.2em]">{card.category}</span>
                      </div>
                      <h3 className="text-white text-lg md:text-xl font-medium tracking-tight leading-tight">
                        {card.title}
                      </h3>

                      <div className="pt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-[9px] font-bold text-white uppercase tracking-widest border-b border-[#819671]/40 pb-0.5">Explore</span>
                        <ArrowRight size={10} className="text-[#819671]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team - Scaled Down */}
      <section className="bg-[#e6e8d8] py-20 md:py-24 overflow-hidden relative">
        <div className="site-container relative">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 px-4">
            <div className="max-w-xl">
              <span className="text-[#819671] text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">Our Crew</span>
              <h2 className="text-4xl md:text-5xl font-(--font-display) text-[#819671] tracking-tight leading-none">
                The <span className="italic opacity-80">Excellence</span> Team
              </h2>
            </div>
            <p className="max-w-xs text-[#819671]/70 font-light text-xs leading-relaxed md:text-right">
              Master artists dedicated to bringing your unique beauty vision to life in every chair.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="group relative h-[380px] md:h-[420px] rounded-[2rem] overflow-hidden bg-[#FDFDF5] shadow-xl"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2F]/90 via-[#1E3A2F]/5 to-transparent p-6 md:p-8 flex flex-col justify-end">
                  <div className="space-y-1 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-medium tracking-tight">{member.name}</h3>
                    <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-4">{member.role}</p>

                    <div className="pt-4 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="text-white/40 text-[9px] font-light">Exp: {member.exp}</span>
                      <div className="flex gap-2.5">
                        <Instagram size={14} className="text-white hover:text-[#819671] cursor-pointer" />
                        <Heart size={14} className="text-white hover:text-[#819671] cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Banner - Scaled Down */}
      <section className="py-20 bg-white">
        <div className="site-container px-4">
          <div className="bg-[#819671] rounded-[2.5rem] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 space-y-6">
              <div className="flex justify-center">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white/20 border border-white/30 backdrop-blur-sm">
                  <Instagram size={24} />
                </div>
              </div>
              <h2 className="text-3xl font-(--font-display) tracking-tight">Stay Inspired</h2>
              <p className="max-w-xs mx-auto text-white/80 font-light text-sm">
                Discover beauty secrets daily on our Instagram.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#819671] rounded-full font-bold tracking-widest uppercase text-[10px] hover:scale-105 transition-transform"
              >
                Join Us
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
