import Image from "next/image";
import SpaceCarousel from "@/app/components/SpaceCarousel";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I usually run out of copy, but when I see content this big, I try to
          integrate lorem ipsum.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Changelog",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Deployed 5 new components on Aceternity today
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Card grid component
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Startup template Aceternity
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Random file upload lol
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">


      <main>
        {/* Hero Section */}
        <section className="relative bg-[#819671] pt-32 pb-20 md:pt-40 md:pb-28 text-center text-white">

        </section>

        {/* Philosophy Section */}
        <section className="py-24 text-center">
          <div className="site-container">
            <h1 className="font-(--font-display) text-5xl md:text-7xl mb-8 tracking-tight">The Foundation of Excellence</h1>
            <p>
              Liya Gole Salon was founded by Wengelawit Liya Gole, a renowned makeup artist and
              instructor whose expertise spans Addis Ababa, Los Angeles, and the DMV Area. Born from
              a simple idea that beauty should be intentional and not rushed, the salon is the culmination
              of over 10 years of industry experience. What began as a deep passion for self expression
              and refined artistry has grown into a premier destination where international standards of
              luxury meet personalized care.
            </p>
          </div>

          <div className="site-container max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-(--font-display) text-[#1E3A2F] mb-10 tracking-tight">OUR MISSION</h2>
            <div className="space-y-8 text-lg text-[#4A5D45]/80 leading-relaxed font-light">
              <p>
                Our mission is to enhance your natural beauty through a curated blend of sophisticated
                artistry and restorative care, setting a premium standard for quality that empowers you to
                express your truest self with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-[#F4F4E4]/50 py-24">
          <div className="site-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-(--font-display) text-[#1E3A2F] mb-4 tracking-tight">Our Core Values</h2>
              <p className="text-[#4A5D45]/60 font-light">At Liya Gole Salon, our philosophy is that beauty is not rushed; it is crafted. We are guided
                by these foundational beliefs:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard
                title="Process Driven Excellence"
                desc="Great results start with the right process, from consultation to
execution."
              />
              <ValueCard
                title="Intentional Detail"
                desc="Every braid, stroke, and finish is intentional because details define the final
outcome."
              />
              <ValueCard
                title="Intentional Detail"
                desc="Every braid, stroke, and finish is intentional because details define the final
outcome."
              />
              <ValueCard
                title="Holistic Confidence"
                desc="Confidence is the ultimate goal, achieved by elevating natural beauty
while maintaining health and well being."
              />
              <ValueCard
                title="Commitment to Quality"
                desc="We believe true beauty is achieved through patience, expertise and
a commitment to excellence from prep to perfection."
              />
            </div>
          </div>
        </section>

        {/* Our Journey (Timeline) */}
        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>

        {/* Our Space */}
        <section className="py-24 text-[#4A5D45]">
          <div className="site-container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-(--font-display) mb-8 tracking-tight">Our Space</h2>
                <p className="text-[#4A5D45]/60 text-lg leading-relaxed font-light mb-12">
                  Liya Gole Salon is a refined beauty destination where luxury meets comfort. Designed to feel
                  elevated yet welcoming, our space is a sanctuary where clients can escape the rush of
                  everyday life to unwind, recharge, and feel fully restored.
                </p>
                <p>
                  Every corner of our salon reflects our commitment to excellence and high end aesthetics
                </p>
              </div>
              <SpaceCarousel />
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-24 bg-[#FDFDF5]">
          <div className="site-container text-center">
            <h2 className="text-4xl font-(--font-display) text-[#1E3A2F] mb-16 tracking-tight">Awards & Recognition</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <AwardItem title="Best Beauty Salon" year="2023" />
              <AwardItem title="Excellence in Service" year="2021" />
              <AwardItem title="Innovation Award" year="2024" />
              <AwardItem title="Top Rated 5/5" year="2025" />
            </div>
          </div>
        </section>
      </main>


    </div >
  );
}

function ValueCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-3xl border border-[#1E3A2F]/5 hover:shadow-xl hover:shadow-[#1E3A2F]/5 transition-all group">
      <div className="w-12 h-12 rounded-2xl bg-[#F4F4E4] flex items-center justify-center text-[#1E3A2F] mb-8 group-hover:bg-[#1E3A2F] group-hover:text-white transition-all">
        <span className="text-xl">✦</span>
      </div>
      <h3 className="text-xl font-medium text-[#1E3A2F] mb-4 tracking-tight">{title}</h3>
      <p className="text-[#4A5D45]/70 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}



function AwardItem({ title, year }: { title: string, year: string }) {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-[#1E3A2F]/10 mb-6 group-hover:bg-[#F4F4E4] transition-all">
        <span className="text-3xl">🏆</span>
      </div>
      <h4 className="text-lg font-medium text-[#1E3A2F] mb-1 tracking-tight">{title}</h4>
      <p className="text-[#4A5D45]/50 text-sm font-light">{year}</p>
    </div>
  );
}
