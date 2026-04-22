import Image from "next/image";
import { ServiceCard } from "./components/ServiceCard";

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

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <p className="text-xs font-semibold tracking-widest text-white/75">
              YOUR BEAUTY DESTINATION
            </p>
            <h1 className="mt-3 max-w-xl font-(--font-display) text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl">
              Where Beauty,
              <br />
              Meets Intentionality
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
              A refined beauty destination founded by Liya Gole, where artistry meets
              precision and every detail matters.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {/* <a
                href="#book"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-foreground shadow-sm hover:bg-white/90"
              >
                Book Appointment
              </a> */}
              <a
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                View Services
              </a>
            </div>
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
            <div className="relative mx-auto max-w-6xl px-6 py-14">
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

          <section id="about">
            <div className="mx-auto max-w-6xl px-6 py-14">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="relative min-h-[400px] overflow-hidden rounded-3xl border bg-surface/70 shadow-(--shadow) md:h-full md:min-h-[550px]">
                  <Image
                    src="/compressed/liya.JPG"
                    alt="About Liya Gole"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center py-6 md:py-10">
                  <h2 className="font-(--font-display) text-2xl tracking-tight">
                    About Liya Gole
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Liya Gole Salon was born from a simple idea: beauty should be intentional, not rushed. What
                    began as a passion for creating refined, high quality looks has grown into a premier
                    destination where artistry meets precision, and every detail matters. Our vision is to go
                    beyond trends, focusing on the technique, care, and experience that make every client feel
                    seen and understood.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
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

        <section id="testimonials" className="bg-brand-2">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="text-center">
              <h2 className="font-(--font-display) text-2xl tracking-tight text-white">
                Liya Gole Salon Experience
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/75">
                Every visit tells a story of care and precision. Hear from the community of
                clients who leave our space feeling elevated and empowered.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <ReviewCard
                quote="The consultation was so thoughtful—and the finish was flawless. I left feeling like the best version of myself."
                name="Client Review"
              />
              <ReviewCard
                quote="Beautiful space, professional service, and the styling held perfectly. The attention to detail is next level."
                name="Client Review"
              />
            </div>
          </div>
        </section>

        <section id="book" className="bg-background">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center">
              <h2 className="font-(--font-display) text-2xl tracking-tight">
                Ready to Experience Elevated Beauty?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">
                Book your appointment today and experience the Liya Gole Salon
                standard.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-3">
              <CtaIcon title="Easy Booking" subtitle="Fast & simple" />
              <CtaIcon title="Pro Results" subtitle="Expert finish" />
              <CtaIcon title="Great Location" subtitle="Add address" />
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="mailto:booking@liyagolesalon.com?subject=Appointment%20Request%20%E2%80%94%20Liya%20Gole%20Salon"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white shadow hover:bg-brand-2"
              >
                Book Your Appointment
              </a>
            </div>
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

function ReviewCard({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="rounded-3xl bg-white/10 p-6 text-white ring-1 ring-white/15 backdrop-blur">
      <div className="text-xs font-semibold tracking-widest text-white/80">
        ★★★★★
      </div>
      <blockquote className="mt-4 text-sm leading-7 text-white/85">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xs font-bold">
          LG
        </span>
        <span className="text-xs font-semibold text-white/80">{name}</span>
      </figcaption>
    </figure>
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


