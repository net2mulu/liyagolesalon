import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">


      <main id="home">
        <section className="relative min-h-[520px] overflow-hidden">
          <Image
            src="/hero.svg"
            alt="Liya Gole Salon"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#819671]/40" />

          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24 md:pt-36">
            <p className="text-xs font-semibold tracking-widest text-white/75">
              YOUR BEAUTY DESTINATION
            </p>
            <h1 className="mt-3 max-w-xl font-(--font-display) text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl">
              Your Beauty,
              <br />
              Our Passion
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
              Experience luxury beauty treatments tailored to you, blending modern
              techniques with timeless style in a calm, refined space.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#book"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-foreground shadow-sm hover:bg-white/90"
              >
                Book Appointment
              </a>
              <a
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="bg-background">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="text-center">
              <h2 className="font-(--font-display) text-2xl tracking-tight">
                Our Services
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">
                From signature styling to restorative treatments, we offer a curated
                range designed to elevate your natural beauty.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-4">
              <ServiceCard
                title="Hair Styling"
                body="Precision cuts, styling, curls, braids, relaxers and more."
                img="/service-hair.svg"
              />
              <ServiceCard
                title="Facial Treatment"
                body="Fresh, radiant skin with relaxing care-focused treatments."
                img="/service-facial.svg"
              />
              <ServiceCard
                title="Makeup Artistry"
                body="Soft glam to full glam—crafted to enhance your features."
                img="/service-makeup.svg"
              />
              <ServiceCard
                title="Nail Care"
                body="Manicure and pedicure services with clean, luxe finishes."
                img="/service-nails.svg"
              />
            </div>
          </div>
        </section>

        <section id="about" className="bg-background">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="relative overflow-hidden rounded-3xl border bg-surface/70 shadow-(--shadow)">
                <Image
                  src="/about.svg"
                  alt="About Liya Gole"
                  width={900}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-(--font-display) text-2xl tracking-tight">
                  About Liya Gole
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Liya Gole Salon is a refined beauty destination where beauty
                  meets comfort, founded by Liya Gole. Rooted in a deep
                  understanding of hair, beauty, and self-expression, we deliver
                  a luxurious, personalized experience.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  With a focus on precision, creativity, and care, we bring
                  together modern techniques and timeless aesthetics—whether
                  through transformative color, signature styling, or restorative
                  treatments.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <InfoPill label="Hours" value="10:00am – 5:00pm" />
                  <InfoPill label="Location" value="Add your city/address" />
                  <InfoPill label="Appointments" value="Book online anytime" />
                  <InfoPill label="Support" value="24/7 message requests" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-brand-2">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="text-center">
              <h2 className="font-(--font-display) text-2xl tracking-tight text-white">
                What Our Clients Say
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/75">
                Don’t just take our word for it—here’s what clients love about
                their experience.
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
                Ready to Transform Your Look?
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

function ServiceCard({
  title,
  body,
  img,
}: {
  title: string;
  body: string;
  img: string;
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-surface/70 shadow-sm">
      <div className="relative h-36">
        <Image src={img} alt={title} fill className="object-cover" />
        <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-foreground shadow-sm">
          <span className="text-lg leading-none">›</span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-2 text-xs leading-6 text-muted">{body}</p>
        <a
          href="#book"
          className="mt-4 inline-flex text-xs font-semibold text-brand hover:text-brand-2"
        >
          Book Appointment
        </a>
      </div>
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


