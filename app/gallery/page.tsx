import Image from "next/image";

export default function GalleryPage() {
  const galleryItems = [
    { id: 1, title: "Precision Hair Styling", category: "Hair", img: "/service-hair.svg" },
    { id: 2, title: "Luxe Facial Treatment", category: "Skin", img: "/service-facial.svg" },
    { id: 3, title: "Glamour Makeup Art", category: "Beauty", img: "/service-makeup.svg" },
    { id: 4, title: "Professional Nail Care", category: "Nails", img: "/service-nails.svg" },
    { id: 5, title: "Creative Braiding", category: "Hair", img: "/service-hair.svg" },
    { id: 6, title: "Elite Color & Tone", category: "Hair", img: "/service-hair.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">


      <main>
        {/* Gallery Hero */}
        <section className="relative bg-[#819671] pt-32 pb-20 md:pt-40 md:pb-28 text-center text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex justify-center mb-8">
              <span className="text-3xl">✦</span>
            </div>
            <h1 className="font-(--font-display) text-5xl md:text-7xl mb-8 tracking-tight">Gallery</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed font-light">
              A visual journey through our finest work, showcasing transformation, artistry, and the Liya Gole standard.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {galleryItems.map((item) => (
                <div key={item.id} className="relative group overflow-hidden rounded-[32px] break-inside-avoid">
                  <div className="relative aspect-[4/5] bg-[#F4F4E4]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                      <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                      <h3 className="text-white text-2xl font-medium tracking-tight mb-4">{item.title}</h3>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <span className="text-xl">↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team Section (From Image) */}
        <section className="bg-[#F4F4E4]/50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-(--font-display) text-[#1E3A2F] mb-4 tracking-tight">Meet Our Team</h2>
              <p className="text-[#4A5D45]/60 font-light">The dedicated professionals behind our beauty journey</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamCard name="Liya Gole" role="Owner & Lead Stylist" exp="12 years" img="/service-hair.svg" />
              <TeamCard name="Hannah Mulu" role="Advanced Colorist" exp="8 years" img="/service-hair.svg" />
              <TeamCard name="Selamawit Tadesse" role="Skin Care Expert" exp="6 years" img="/service-facial.svg" />
              <TeamCard name="Beti Alemu" role="Nail Art Specialist" exp="5 years" img="/service-nails.svg" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="bg-[#819671] py-24 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 relative z-10 text-center text-white">
             <h2 className="text-4xl md:text-5xl font-(--font-display) mb-6 tracking-tight">Your Transformation Awaits</h2>
             <p className="text-white/80 mb-12 text-lg font-light max-w-xl mx-auto">Join the hundreds of satisfied clients who have found their confidence at Liya Gole Salon.</p>
             <button className="px-10 py-4 bg-[#FDFDF5] text-[#1E3A2F] rounded-full font-semibold hover:bg-white transition-all">
               Book Your Experience
             </button>
          </div>
        </section> */}
      </main>


    </div>
  );
}

function TeamCard({ name, role, exp, img }: { name: string, role: string, exp: string, img: string }) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden border border-[#1E3A2F]/5 group hover:shadow-2xl transition-all">
      <div className="relative aspect-square">
        <Image src={img} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-medium text-[#1E3A2F] mb-1 tracking-tight">{name}</h3>
        <p className="text-[#4A5D45]/60 text-sm mb-4">{role}</p>
        <div className="pt-4 border-t border-[#1E3A2F]/5 flex justify-between items-center text-[12px] text-[#4A5D45]/40 font-bold uppercase tracking-widest">
          <span>Experience</span>
          <span className="text-[#1E3A2F]">{exp}</span>
        </div>
      </div>
    </div>
  );
}
