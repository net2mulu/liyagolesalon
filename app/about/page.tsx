import Image from "next/image";
import SpaceCarousel from "@/app/components/SpaceCarousel";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "2011",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          <span className="font-bold text-[#819671] block mb-2 text-lg">The Vision</span>
          Wengelawit Liya Gole embarked on a mission to redefine the salon experience, blending artistry with an intentional, unhurried approach to beauty.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/compressed/1.webp"
            alt="The Vision"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
          />
          <Image
            src="/compressed/2.webp"
            alt="The Vision"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2014",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          <span className="font-bold text-[#819671] block mb-2 text-lg">Expanding the Craft</span>
          Building on a growing reputation for excellence, we moved to a larger space to better serve our community with enhanced precision and care.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/compressed/3.webp"
            alt="Expanding the Craft"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
          />
          <Image
            src="/compressed/4.webp"
            alt="Expanding the Craft"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          <span className="font-bold text-[#819671] block mb-2 text-lg">Global Standards</span>
          Drawing on a decade of industry expertise across Addis Ababa, Los Angeles, and the DMV area, the salon established an international benchmark for luxury beauty in the region.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/compressed/6.webp"
            alt="Global Standards"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
          />
          <Image
            src="/compressed/8.webp"
            alt="Global Standards"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          <span className="font-bold text-[#819671] block mb-2 text-lg">Innovation & Education</span>
          We launched our specialized education wing, where Liya Gole’s experience as a renowned instructor helps nurture the next generation of professional stylists.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/compressed/9.webp"
            alt="Innovation & Education"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
          />
          <Image
            src="/compressed/11.webp"
            alt="Innovation & Education"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          <span className="font-bold text-[#819671] block mb-2 text-lg">From Prep to Perfection</span>
          Today, we continue our legacy of excellence with a refreshed sanctuary and expanded services, ensuring every client leaves feeling effortlessly beautiful.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/compressed/liyagole.JPG"
            alt="From Prep to Perfection"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
          />
          <Image
            src="/compressed/14.jpg"
            alt="From Prep to Perfection"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
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
        {/* <section className="relative bg-[#819671] pt-32 pb-20 md:pt-40 md:pb-28 text-center text-white">

        </section> */}

        {/* Philosophy Section */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#FDFDF5]">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none select-none overflow-hidden hidden lg:block">
            <span className="absolute -top-20 -right-20 text-[25rem] font-(--font-display) text-[#1E3A2F]">LG</span>
          </div>

          <div className="site-container relative z-10">
            {/* Header Section */}
            <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-[#819671]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#819671]">The Foundation</span>
                </div>
                <h1 className="font-(--font-display) text-5xl md:text-8xl leading-[0.95] tracking-tighter text-[#1E3A2F]">
                  Excellence as a <br />
                  <span className="italic text-[#819671]">New Standard.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-3">
                <p className="text-lg text-[#4A5D45]/70 leading-relaxed font-light border-l-2 border-[#819671]/20 pl-8">
                  Liya Gole Salon was founded by Wengelawit Liya Gole, a renowned makeup artist whose expertise spans from Addis Ababa to Los Angeles.
                </p>
              </div>
            </div>

            {/* Content & Mission Grid */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mt-20">
              {/* Image Side */}
              <div className="lg:col-span-6 relative group">
                <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl z-20">
                  <Image
                    src="/compressed/liya.JPG"
                    alt="Wengelawit Liya Gole"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2F]/40 to-transparent" />
                </div>
                {/* Decorative floating badge */}
                <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[#819671] rounded-full flex items-center justify-center text-white z-30 shadow-xl border-8 border-[#FDFDF5]">
                  <div className="text-center">
                    <span className="block text-2xl font-bold leading-none">10+</span>
                    <span className="text-[8px] uppercase tracking-widest font-medium opacity-80">Years EXP</span>
                  </div>
                </div>
                {/* Visual accent behind image */}
                <div className="absolute -top-8 -left-8 w-64 h-64 border border-[#819671]/20 rounded-[48px] -z-10" />
              </div>

              {/* Text Side */}
              <div className="lg:col-span-6 flex flex-col justify-center h-full">
                <div className="space-y-16">
                  <div className="relative">
                    <p className="text-xl md:text-2xl text-[#1E3A2F] leading-relaxed font-light">
                      Born from a simple idea that <span className="font-medium">beauty should be intentional</span> and not rushed, the salon is the culmination of over 10 years of industry experience.
                    </p>
                    <p className="mt-8 text-neutral-600 leading-relaxed font-light">
                      What began as a deep passion for self-expression and refined artistry has grown into a premier destination where international standards of luxury meet personalized care. 
                    </p>
                  </div>

                  {/* Mission Card */}
                  <div className="relative p-10 md:p-14 bg-[#1E3A2F] text-white rounded-[48px] shadow-2xl overflow-hidden group">
                    {/* Background visual detail */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform duration-[2s] group-hover:rotate-45">
                      <span className="text-[12rem] font-(--font-display)">✦</span>
                    </div>

                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 mb-8 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                        <span className="text-[#819671]">✦</span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Our Mission</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-(--font-display) mb-8 tracking-tight italic">To enhance natural beauty through sophisticated artistry.</h2>
                      <p className="text-lg text-white/70 leading-relaxed font-light">
                        Our goal is to set a premium standard for quality that empowers you to express your truest self with confidence through restorative care and refined precision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
