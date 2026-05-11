import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "./components/ServiceCard";
import Antigravity from "./components/Antigravity";
import GlareHover from "./components/GlareHover";
import { HeroText } from "./components/HeroText";
import DragElements from "./components/DragElements";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BookingForm } from "./components/BookingForm";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The attention to detail at Liya Gole Salon is unmatched. I've never felt more confident after a styling session. Truly a premium experience.",
    name: "Eden Tilahun",
    designation: "Loyal Client",
    src: "/compressed/2.webp",
  },
  {
    quote:
      "I came in for hair extensions and the results exceeded my expectations. The seamless installation and volume are exactly what I wanted.",
    name: "Selamawit Kebede",
    designation: "Styling Enthusiast",
    src: "/compressed/3.webp",
  },
  {
    quote:
      "The Japanese Head Spa is a game-changer. It's the most relaxing treatment I've ever had. My scalp feels rejuvenated and I feel totally refreshed.",
    name: "Marta Haile",
    designation: "Wellness Advocate",
    src: "/compressed/4.webp",
  },
  {
    quote:
      "Liya and her team are true artists. They understood exactly the look I was going for and delivered it with precision and care.",
    name: "Hana Girma",
    designation: "Frequent Visitor",
    src: "/compressed/6.webp",
  },
  {
    quote:
      "The professionalism and atmosphere at the salon are top-tier. It's not just a haircut, it's a complete luxury experience every time.",
    name: "Tsion Bekele",
    designation: "Fashion Stylist",
    src: "/compressed/7.webp",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">


      <main id="home">
        <section className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden">
          <Image
            src="/compressed/natus.png"
            alt="Liya Gole Salon"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#819671]/40" />
          {/* <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/70 to-transparent" /> */}

          <div className="site-container relative">
            <HeroText />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            {/* <a href="#services" className="flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors" aria-label="Go to next section">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a> */}
          </div>
        </section>

        {/* Shared wrapper so the pattern flows across both sections */}
        <div className="relative bg-background">
          {/* Pattern: only at the boundary between Services and About, right side */}
          <div
            className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 w-56 h-80 opacity-10 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/pattern/3.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "160px",
            }}
          />

          <section id="services">
            <div className="site-container relative py-14">
              <div className="text-center">
                <h2 className="font-(--font-display) text-2xl tracking-tight">
                  Our Services
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#1E3A2F]">
                  From signature styling to restorative treatments, we offer a curated range designed to
                  elevate your natural beauty.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-4">
                <ServiceCard
                  title="Hairstyling & Luxury Blowouts"
                  body="Experience professional styling and transformative blowouts for every occasion, ensuring volume, shine, and effortless movement."
                  img="/compressed/1.webp"
                />
                <ServiceCard
                  title="Hair Extensions Installation"
                  body="Achieve the length and volume you've always dreamed of with our seamless, professional extension installation techniques."
                  img="/compressed/liya.JPG"
                />
                <ServiceCard
                  title="Classic & Spa Pedicure"
                  body="Clean technique meets modern design for elegant, durable results. Indulge in our restorative spa pedicure experience."
                  img="/compressed/11.webp"
                />
                <ServiceCard
                  title="Japanese Head Spa"
                  body="A unique, relaxing treatment focused on scalp health and total rejuvenation, blending traditional techniques with absolute luxury."
                  img="/compressed/14.jpg"
                />
              </div>

              <div className="mt-8 flex justify-end relative z-20">
                <Link
                  href="/services"
                  className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] uppercase text-[#1E3A2F] hover:text-[#819671] transition-all duration-500"
                >
                  <span className="relative">
                    View More
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#819671] group-hover:w-full transition-all duration-500" />
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" />
                </Link>
              </div>
            </div>
          </section>

          <section id="about" className="relative overflow-hidden w-full">
            <Antigravity
              count={300}
              magnetRadius={6}
              ringRadius={7}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={0.6}
              lerpSpeed={0.05}
              color="#819671"
              autoAnimate
              particleVariance={1}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="capsule"
              fieldStrength={10}
            />
            <div className="site-container py-14 relative z-10 pointer-events-none">
              <div className="grid gap-10 md:grid-cols-2 pointer-events-auto">
                <GlareHover
                  width="100%"
                  height="100%"
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  background="transparent"
                  borderColor="transparent"
                  borderRadius="1.5rem"
                  className="w-full h-full min-h-[400px] md:min-h-[550px] shadow-(--shadow)"
                >
                  <Image
                    src="/compressed/liya.JPG"
                    alt="About Liya Gole"
                    fill
                    className="object-cover"
                  />
                </GlareHover>

                <div className="flex flex-col justify-center py-6 md:py-10">
                  <h2 className="font-(--font-display) text-2xl tracking-tight">
                    About Liya Gole
                  </h2>
                  <p className="mt-4 text-sm leading-7 ">
                    Liya Gole Salon was born from a simple idea: beauty should be intentional, not rushed. What
                    began as a passion for creating refined, high quality looks has grown into a premier
                    destination where artistry meets precision, and every detail matters. Our vision is to go
                    beyond trends, focusing on the technique, care, and experience that make every client feel
                    seen and understood.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-">
                    At Liya Gole Salon, we believe that true beauty is crafted through patience and a
                    commitment to excellence, from prep to perfection. Whether you are seeking a
                    transformative color, intricate braiding, or a restorative treatment, our goal is to ensure you
                    leave feeling elevated, empowered, and effortlessly beautiful
                  </p>

                  {/* <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <InfoPill label="Hours" value="10:00am – 5:00pm" />
                    <InfoPill label="Location" value="Add your city/address" />
                    <InfoPill label="Appointments" value="Book online anytime" />
                    <InfoPill label="Support" value="24/7 message requests" />
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="relative h-[850px] w-full overflow-hidden bg-brand/5 pt-20 pb-40 flex flex-col">
          <div className="site-container relative flex-1">
            {/* Background Narrative Text */}
            <div className="absolute top-[35%] right-0 w-[30%] z-0 pointer-events-none opacity-40 select-none">
              <div className="h-px w-12 bg-[#819671] mb-6" />
              <p className="text-2xl text-[#1E3A2F] leading-tight font-(--font-display) italic mb-8">
                &quot;A place designed for those who appreciate elegance, self care, and timeless beauty.&quot;
              </p>
              <p className="text-base text-[#4A5D45] leading-relaxed font-light">
                Whether you’re here for a simple refresh or a full transformation, every visit is filled with warmth, creativity, and personalized care made just for you.
              </p>
            </div>

            <div className="mb-12 text-center relative z-20">
              <h2 className="font-(--font-display) text-3xl tracking-tight text-[#1E3A2F]">
                Moments of <span className="italic text-[#819671]">Beauty</span>
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-xs uppercase tracking-widest text-[#819671] font-bold">
                Explore our craft • Feel free to interact
              </p>
            </div>

            <DragElements className="flex-1 w-full relative z-10">
              {/* Separate Scattered Grid - Wide Distribution */}
              
              {/* Row 1 */}
              <div className="w-44 bg-white p-3 shadow-xl -rotate-6 absolute" style={{ top: '8%', left: '5%' }}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/liyagole.JPG" alt="Salon 1" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Style & Grace</p>
              </div>

              <div className="w-52 bg-white p-3 shadow-xl rotate-3 absolute" style={{ top: '5%', left: '38%' }}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/8.webp" alt="Salon 2" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Precision Cut</p>
              </div>

              <div className="w-48 bg-white p-3 shadow-xl -rotate-2 absolute" style={{ top: '10%', left: '72%' }}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/3.webp" alt="Salon 3" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Radiant Color</p>
              </div>

              {/* Row 2 */}
              <div className="w-50 bg-white p-3 shadow-xl rotate-6 absolute" style={{ top: '38%', left: '12%' }}>
                <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/14.jpg" alt="Salon 4" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">The Experience</p>
              </div>

              <div className="w-48 bg-white p-3 shadow-2xl skew-y-1 absolute" style={{ top: '42%', left: '46%' }}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/2.webp" alt="Salon 5" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Refined Edge</p>
              </div>

              <div className="w-44 bg-white p-3 shadow-xl -rotate-12 absolute" style={{ top: '35%', left: '82%' }}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/11.webp" alt="Salon 6" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Perfect Mani</p>
              </div>

              {/* Row 3 */}
              <div className="w-46 bg-white p-3 shadow-xl rotate-4 absolute" style={{ top: '72%', left: '8%' }}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/12.webp" alt="Salon 7" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Signature Look</p>
              </div>

              <div className="w-48 bg-white p-3 shadow-xl -rotate-2 absolute" style={{ top: '68%', left: '40%' }}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/13.jpg" alt="Salon 8" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Vibrant Hue</p>
              </div>

              <div className="w-52 bg-white p-3 shadow-xl rotate-12 absolute" style={{ top: '65%', left: '75%' }}>
                <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/4.webp" alt="Salon 9" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Modern Flow</p>
              </div>
            </DragElements>
          </div>
        </section>

        <section id="testimonials" className="bg-brand-2">
          <div className="site-container py-14">
            <div className="text-center">
              <h2 className="font-(--font-display) text-2xl tracking-tight text-white">
                Liya Gole Salon Experience
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/75">
                Every visit tells a story of care and precision. Hear from the community of
                clients who leave our space feeling elevated and empowered.
              </p>
            </div>

            <div className="mt-8">
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          </div>
        </section>

        <section id="book" className="bg-[#e6e8d8]">
          <div className="site-container py-16">
            <div className="text-center mb-10 text-[#819671]">
              <h2 className="font-(--font-display) text-2xl tracking-tight">
                Ready to Experience Elevated Beauty?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 opacity-80">
                Book your appointment today and experience the Liya Gole Salon
                standard.
              </p>
            </div>

            <BookingForm />
          </div>
        </section>
      </main>


    </div>
  );
}



function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border bg-surface/70 px-4 py-3">
      <p className="text-xs font-semibold text-foreground/85">{label}</p>
      <p className="text-xs text-muted">{value}</p>
    </div>
  );
}



function CtaIcon({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/15 text-brand ring-1 ring-border">
        <span className="text-lg">●</span>
      </div>
      <p className="mt-3 text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-muted">{subtitle}</p>
    </div>
  );
}


