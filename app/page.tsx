import Image from "next/image";
import { ServiceCard } from "./components/ServiceCard";
import Antigravity from "./components/Antigravity";
import GlareHover from "./components/GlareHover";
import { HeroText } from "./components/HeroText";
import DragElements from "./components/DragElements";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BookingForm } from "./components/BookingForm";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">
                  From signature styling to restorative treatments, we offer a curated range designed to
                  elevate your natural beauty.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-4">
                <ServiceCard
                  title="Hair Styling"
                  body="From everyday styling to full transformations, our hair services are designed to enhance natural beauty while maintaining hair health."
                  img="/compressed/1.webp"
                />
                <ServiceCard
                  title="Pedicure and Menicure"
                  body="Clean technique meets modern design for elegant, durable and trend forward results."
                  img="/compressed/11.webp"
                />
                <ServiceCard
                  title="Treatment"
                  body="Beyond beauty, we provide relaxing treatments that support overall well being and allow clients to recharge."
                  img="/compressed/14.jpg"
                />
                <ServiceCard
                  title="Professional Coloring"
                  body="Transform your look with seamless color transitions that prioritize the health and integrity of your hair."
                  img="/compressed/13.jpg"
                />
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

        <section className="relative h-[800px] w-full overflow-hidden bg-brand/5 pt-20 pb-40 flex flex-col">
          <div className="site-container relative flex-1">
            <div className="mb-8 text-center">
              <h2 className="font-(--font-display) text-2xl tracking-tight">
                Moments of Beauty
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
                Explore our craft through these captured moments. Feel free to move them around.
              </p>
            </div>

            <DragElements className="h-full w-full">
              {/* Image 1 */}
              <div className="w-48 bg-white p-3 shadow-xl -rotate-6 transition-transform hover:rotate-0" style={{ marginTop: '40px', marginLeft: '10%' }}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/liyagole.JPG" alt="Salon Craft 1" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Style & Grace</p>
              </div>

              {/* Image 2 */}
              <div className="w-56 bg-white p-3 shadow-xl rotate-3 transition-transform hover:rotate-0" style={{ marginTop: '150px', marginLeft: '35%' }}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/8.webp" alt="Salon Craft 2" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Precision Cut</p>
              </div>

              {/* Image 3 */}
              <div className="w-52 bg-white p-3 shadow-xl -rotate-2 transition-transform hover:rotate-0" style={{ marginTop: '40px', marginLeft: '65%' }}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/3.webp" alt="Salon Craft 3" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Radiant Color</p>
              </div>

              {/* Image 4 */}
              <div className="w-60 bg-white p-3 shadow-xl rotate-6 transition-transform hover:rotate-0" style={{ marginTop: '240px', marginLeft: '15%' }}>
                <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/14.jpg" alt="Salon Craft 4" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">The Experience</p>
              </div>

              {/* Image 5 */}
              <div className="w-44 bg-white p-3 shadow-xl -rotate-12 transition-transform hover:rotate-0" style={{ marginTop: '280px', marginLeft: '70%' }}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/2.webp" alt="Salon Craft 5" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Artistry</p>
              </div>

              {/* Image 6 */}
              <div className="w-50 bg-white p-3 shadow-xl rotate-2 transition-transform hover:rotate-0" style={{ marginTop: '100px', marginLeft: '80%' }}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/11.webp" alt="Salon Craft 6" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Perfect Mani</p>
              </div>

              {/* Image 7 */}
              <div className="w-40 bg-white p-3 shadow-xl -rotate-3 transition-transform hover:rotate-0" style={{ marginTop: '350px', marginLeft: '45%' }}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/13.jpg" alt="Salon Craft 7" fill className="object-cover pointer-events-none" draggable={false} />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-widest text-center text-[#819671] font-bold">Vibrant Hue</p>
              </div>

              {/* Image 8 */}
              <div className="w-48 bg-white p-3 shadow-xl rotate-12 transition-transform hover:rotate-0" style={{ marginTop: '20px', marginLeft: '40%' }}>
                <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                  <Image src="/compressed/4.webp" alt="Salon Craft 8" fill className="object-cover pointer-events-none" draggable={false} />
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


