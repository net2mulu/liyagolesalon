import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">


      <main>
        {/* Hero Section */}
        <section className="relative bg-[#819671] pt-32 pb-20 md:pt-40 md:pb-28 text-center text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex justify-center mb-8">
              <Image src="/logo.png" alt="Liya Gole" width={120} height={40} className="brightness-0 invert opacity-60" />
            </div>
            <h1 className="font-(--font-display) text-5xl md:text-7xl mb-8 tracking-tight">Our Story</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed font-light">
              10 years of dedication to beauty, wellness, and empowering confidence through exceptional service.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <div className="inline-flex items-center gap-2 text-[#4A5D45]/60 mb-8 px-4 py-1.5 rounded-full bg-[#F4F4E4] text-[12px] font-bold uppercase tracking-widest">
              OUR MISSION
            </div>
            <h2 className="text-4xl md:text-5xl font-(--font-display) text-[#1E3A2F] mb-10 tracking-tight">Empowering Beauty, Inside and Out</h2>
            <div className="space-y-8 text-lg text-[#4A5D45]/80 leading-relaxed font-light">
              <p>
                At Liya Gole Salon, we believe that beauty is not just about appearance—it&apos;s about confidence, self-care, and feeling your absolute best. Since 2011, we&apos;ve dedicated ourselves to providing a sanctuary where luxury meets relaxation, and every client is treated like family.
              </p>
              <p>
                Our team of passionate professionals combines artistic vision with technical excellence to deliver personalized beauty experiences that exceed expectations. We use only premium products and stay at the forefront of industry trends to ensure you always leave feeling refreshed, confident, and beautiful.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-[#F4F4E4]/50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-(--font-display) text-[#1E3A2F] mb-4 tracking-tight">Our Core Values</h2>
               <p className="text-[#4A5D45]/60 font-light">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard 
                title="Client-Centered Care" 
                desc="Your satisfaction is our priority. We listen, understand, and tailor every service to your needs."
              />
              <ValueCard 
                title="Excellence & Quality" 
                desc="We never compromise on quality. From products to techniques, we strive for perfection in every detail."
              />
              <ValueCard 
                title="Expert Team" 
                desc="Our stylists are highly trained professionals who are passionate about their craft and continuous learning."
              />
               <ValueCard 
                title="Honesty & Integrity" 
                desc="We believe in transparent pricing and honest consultations to build lasting trust with our clients."
              />
               <ValueCard 
                title="Safety & Hygiene" 
                desc="Your health is paramount. We maintain the highest standards of cleanliness and sterilization in our salon."
              />
               <ValueCard 
                title="Innovation" 
                desc="We stay ahead of trends and embrace new techniques to bring you the best that the beauty world has to offer."
              />
            </div>
          </div>
        </section>

        {/* Our Journey (Timeline) */}
        <section className="py-24 overflow-hidden">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-24">
               <h2 className="text-3xl font-(--font-display) text-[#1E3A2F] mb-4 tracking-tight">Our Journey</h2>
               <p className="text-[#4A5D45]/60 font-light">Milestones that shaped our story</p>
            </div>
            
            <div className="relative">
              {/* Vertical line - hidden on mobile */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1E3A2F]/10 hidden md:block" />
              
              <div className="space-y-16">
                <TimelineItem year="2011" title="The Beginning" desc="Liya Gole opened her first boutique salon with a vision to redefine the salon experience." side="left" />
                <TimelineItem year="2014" title="Expansion Move" desc="Moved to a larger prime location to accommodate our growing community of clients." side="right" />
                <TimelineItem year="2018" title="Award Recognition" desc="Named 'Best Salon in Addis' by local beauty and lifestyle associations." side="left" />
                <TimelineItem year="2021" title="Innovation Center" desc="Launched our specialized hair treatment and education wing for professional stylists." side="right" />
                <TimelineItem year="2025" title="The Next Chapter" desc="Continuing our legacy of excellence with new services and a refreshed space." side="left" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Space */}
        <section className="bg-[#819671] py-24 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-(--font-display) mb-8 tracking-tight">Our Space</h2>
                <p className="text-white/80 text-lg leading-relaxed font-light mb-12">
                  Step into a sanctuary of calm and elegance. Every detail of our salon has been thoughtfully designed to create a soothing atmosphere where you can relax and feel pampered. From our minimalist aesthetic to our curated soundtrack, your comfort is guaranteed.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-3xl font-semibold mb-1">3,500 sq ft</span>
                    <span className="text-white/50 text-sm font-light uppercase tracking-widest">Premium Space</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-semibold mb-1">12</span>
                    <span className="text-white/50 text-sm font-light uppercase tracking-widest">Styling Stations</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-semibold mb-1">5</span>
                    <span className="text-white/50 text-sm font-light uppercase tracking-widest">Private Treatment Rooms</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-semibold mb-1">100%</span>
                    <span className="text-white/50 text-sm font-light uppercase tracking-widest">Solar Powered</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-white/5">
                   {/* Placeholder for an elegant interior shot */}
                   <Image src="/hero.svg" alt="Salon Space" fill className="object-cover opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-24 bg-[#FDFDF5]">
          <div className="mx-auto max-w-6xl px-6 text-center">
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


    </div>
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

function TimelineItem({ year, title, desc, side }: { year: string, title: string, desc: string, side: 'left' | 'right' }) {
  return (
    <div className={`flex items-center w-full ${side === 'left' ? 'md:flex-row-reverse' : ''} mb-8`}>
       <div className="hidden md:block w-1/2" />
       <div className="z-20 flex items-center order-1 bg-[#1E3A2F] shadow-xl w-10 h-10 rounded-full border-4 border-white">
          <h1 className="mx-auto font-semibold text-lg text-white" />
       </div>
       <div className={`order-1 bg-white rounded-3xl border border-[#1E3A2F]/5 shadow-sm w-full md:w-1/2 px-8 py-6 ${side === 'left' ? 'md:mr-8' : 'md:ml-8'}`}>
          <span className="text-[#1E3A2F] font-bold text-lg mb-1 block">{year}</span>
          <h3 className="mb-2 font-medium text-xl text-[#1E3A2F] tracking-tight">{title}</h3>
          <p className="text-sm leading-relaxed text-[#4A5D45]/70 font-light">{desc}</p>
       </div>
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
