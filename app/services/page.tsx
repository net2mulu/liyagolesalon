import Image from "next/image";
import { serviceCategories } from "@/app/lib/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">


      <main>
        {/* Hero Section */}
        <section className="relative bg-[#819671] pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-2 text-white/80 mb-6">
              <span className="text-lg">✦</span>
              <span className="text-[13px] font-medium tracking-wide uppercase">Curated Services for Every Need</span>
            </div>
            <h1 className="font-(--font-display) text-5xl md:text-7xl text-white mb-8 tracking-tight">
              Our Services
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed font-light">
              From precision styling to transformative treatments, every service is delivered with intention, sophistication, and attention to detail.
            </p>
          </div>
        </section>

        {/* Category Pills */}
        <div className="bg-[#819671] border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex gap-4 overflow-x-auto no-scrollbar">
            {serviceCategories.map((cat, idx) => (
              <button
                key={cat.title}
                className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-[13px] font-medium transition-all ${idx === 0 ? 'bg-[#FDFDF5] text-[#1E3A2F]' : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
              >
                <span className="text-base">✦</span>
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Service Detail */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden group">
              <Image
                src="/service-hair.svg"
                alt="Hair Styling"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Hair Styling</h3>
                <p className="text-white/80 text-sm max-w-md leading-relaxed">
                  Personal styling services tailored to your unique hair type and facial features.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-(--font-display) text-[#1E3A2F] tracking-tight">Professional Excellence</h2>
              <div className="space-y-6 text-[#4A5D45]/80 leading-relaxed">
                <p>
                  At Liya Gole Salon, every service is thoughtfully curated to prioritize both style and health. Our licensed experts use premium products and advanced techniques to ensure you leave feeling confident, refreshed, and effortlessly elevated.
                </p>
                <p>
                  Experience luxury beauty treatments tailored to you, blending modern techniques with timeless style in a calm, refined space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-[#F4F4E4]/50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories[0].items.map((item) => (
                <div key={item} className="bg-white rounded-3xl p-6 border border-[#1E3A2F]/5 hover:shadow-xl hover:shadow-[#1E3A2F]/5 transition-all group">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-10 h-10 rounded-full bg-[#F4F4E4] flex items-center justify-center text-[#1E3A2F]">
                      <span className="text-lg">✦</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-[#1E3A2F] mb-2 tracking-tight">{item}</h4>
                  <p className="text-sm text-[#4A5D45]/70 mb-8 font-light">
                    Precision service designed for your daily needs and comfort.
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#1E3A2F]/5">
                    <button className="text-[13px] font-semibold text-white bg-[#1E3A2F] px-6 py-2.5 rounded-full hover:bg-[#2A4D3E] transition-colors">
                      Book This Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Packages */}
        <section className="bg-[#FDFDF5] py-24 border-t border-[#1E3A2F]/5">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-4xl font-(--font-display) text-[#1E3A2F] mb-4 tracking-tight">Special Packages</h2>
            <p className="text-[#4A5D45]/60 mb-16 text-lg font-light">Save more with our curated service packages</p>

            <div className="grid md:grid-cols-3 gap-8">
              <PackageCard
                title="Bridal Package"
                price="550"
                features={["Bridal Makeup & Hair Styling", "Manicure & Pedicure", "Skin Care Prep", "Consultation & Trials"]}
              />
              <PackageCard
                title="Luxury Spa Day"
                price="380"
                highlight
                features={["Full Hair Treatment", "Premium Facial", "Luxury Manicure & Pedi", "Aromatherapy Session"]}
              />
              <PackageCard
                title="Refresh & Renew"
                price="220"
                features={["Hair Wash & Dry Blow", "Basic Facial", "Gel Manicure", "Brow Threading"]}
              />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex justify-center mb-8">
              <span className="text-3xl text-[#1E3A2F]">✦</span>
            </div>
            <h2 className="text-4xl font-(--font-display) text-[#1E3A2F] mb-8 tracking-tight">Beyond Beauty</h2>
            <p className="text-lg text-[#4A5D45]/80 leading-relaxed font-light mb-12">
              Liya Gole Salon introduces bespoke care through tailoring elegant services tailored to દરેક client&apos;s unique hair history, texture, and style goal. Every service is brought to life locally by our experts taking your hair health and style to the next level.
            </p>
            <button className="px-10 py-4 bg-[#1E3A2F] text-white rounded-full font-medium hover:bg-[#2A4D3E] transition-all">
              Learn More About Us
            </button>
          </div>
        </section>

        {/* Book Now Section */}
        {/* <section className="bg-[#819671] py-24 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 relative z-10 text-center text-white">
             <h2 className="text-4xl md:text-5xl font-(--font-display) mb-6 tracking-tight">Ready to Book Your Service?</h2>
             <p className="text-white/80 mb-12 text-lg font-light">Experience the refined beauty standard where beauty meets comfort.</p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="px-10 py-4 bg-[#FDFDF5] text-[#1E3A2F] rounded-full font-semibold hover:bg-white transition-all">
                 Book Appointment
               </button>
               <button className="px-10 py-4 bg-transparent border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                 Call +251 912 345 678
               </button>
             </div>
          </div>
        </section> */}

      </main>


    </div>
  );
}

function PackageCard({ title, price, features, highlight = false }: { title: string, price: string, features: string[], highlight?: boolean }) {
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
      <button className={`w-full py-4 rounded-full font-semibold transition-all ${highlight ? 'bg-[#FDFDF5] text-[#1E3A2F] hover:bg-white' : 'bg-[#1E3A2F] text-white hover:bg-[#2A4D3E]'
        }`}>
        Book Now
      </button>
    </div>
  );
}
