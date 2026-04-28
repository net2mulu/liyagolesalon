import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">


      <main>
        {/* Contact Hero */}
        <section className="relative bg-[#819671] pt-32 pb-20 md:pt-40 md:pb-28 text-white">
          <div className="site-container">
            <div className="flex items-center gap-2 text-white/80 mb-6">
              <span className="text-lg">✉</span>
              <span className="text-[13px] font-medium tracking-wide uppercase">We&apos;d Love to Hear From You</span>
            </div>
            <h1 className="font-(--font-display) text-5xl md:text-7xl mb-8 tracking-tight">Get In Touch</h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Have questions or ready to book? Reach out and let&apos;s start your beauty journey together.
            </p>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-24">
           <div className="site-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <ContactInfoCard 
                    icon="📞" 
                    title="Phone" 
                    lines={["+251 912 345 678", "+251 911 234 567"]} 
                    linkText="Call Us →"
                 />
                 <ContactInfoCard 
                    icon="✉" 
                    title="Email" 
                    lines={["info@liyagolesalon.com", "bookings@liyagolesalon.com"]} 
                    linkText="Send Email →"
                 />
                 <ContactInfoCard 
                    icon="📍" 
                    title="Address" 
                    lines={["Bole Road, Addis Ababa", "Near Edna Mall, Ethiopia"]} 
                    linkText="Get Directions →"
                 />
                 <ContactInfoCard 
                    icon="🕒" 
                    title="Hours" 
                    lines={["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"]} 
                    linkText="View Calendar →"
                 />
              </div>
           </div>
        </section>

        {/* Form & Sidebar Section */}
        <section className="bg-[#F4F4E4]/50 py-24">
           <div className="site-container">
              <div className="grid lg:grid-cols-3 gap-16">
                 {/* Contact Form */}
                 <div className="lg:col-span-2 bg-white p-12 rounded-[40px] shadow-sm">
                    <h2 className="text-3xl font-(--font-display) text-[#1E3A2F] mb-4 tracking-tight">Send Us a Message</h2>
                    <p className="text-[#4A5D45]/60 mb-10 font-light">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                    
                    <form className="space-y-8">
                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[12px] font-bold uppercase tracking-widest text-[#1E3A2F]/40">Full Name *</label>
                             <input type="text" placeholder="Enter your name" className="w-full bg-[#FDFDF5] border border-[#1E3A2F]/5 rounded-2xl px-6 py-4 outline-none focus:border-[#4A5D45]/20" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[12px] font-bold uppercase tracking-widest text-[#1E3A2F]/40">Email Address *</label>
                             <input type="email" placeholder="Enter your email" className="w-full bg-[#FDFDF5] border border-[#1E3A2F]/5 rounded-2xl px-6 py-4 outline-none focus:border-[#4A5D45]/20" />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[12px] font-bold uppercase tracking-widest text-[#1E3A2F]/40">Message *</label>
                          <textarea rows={5} placeholder="Tell us about your needs or questions..." className="w-full bg-[#FDFDF5] border border-[#1E3A2F]/5 rounded-2xl px-6 py-4 outline-none focus:border-[#4A5D45]/20 resize-none"></textarea>
                       </div>
                       <button className="bg-[#1E3A2F] text-white px-10 py-5 rounded-full font-semibold hover:bg-[#2A4D3E] transition-all flex items-center gap-3">
                          <span>Send Message</span>
                          <span className="text-lg">↗</span>
                       </button>
                    </form>
                 </div>

                 {/* Sidebar */}
                 <div className="space-y-8">
                    {/* Business Hours Sidebar */}
                    <div className="bg-white p-10 rounded-[40px] border border-[#1E3A2F]/5">
                       <h3 className="text-xl font-medium text-[#1E3A2F] mb-6 tracking-tight">Business Hours</h3>
                       <div className="space-y-4 text-sm">
                          <div className="flex justify-between pb-4 border-b border-[#1E3A2F]/5">
                             <span className="font-medium text-[#4A5D45]">Monday</span>
                             <span className="text-[#1E3A2F]/60">9:00 AM - 8:00 PM</span>
                          </div>
                          <div className="flex justify-between pb-4 border-b border-[#1E3A2F]/5">
                             <span className="font-medium text-[#4A5D45]">Tuesday</span>
                             <span className="text-[#1E3A2F]/60">9:00 AM - 8:00 PM</span>
                          </div>
                          {/* ... other days */}
                          <div className="flex justify-between pt-2">
                             <span className="font-medium text-[#4A5D45]">Saturday</span>
                             <span className="text-[#1E3A2F]/60">10:00 AM - 6:00 PM</span>
                          </div>
                       </div>
                       <div className="mt-8 bg-[#F4F4E4] p-4 rounded-2xl text-[12px] text-[#4A5D45]/80 leading-relaxed font-light italic">
                          Note: Hours may vary on holidays. Please call ahead to confirm.
                       </div>
                    </div>

                    {/* Follow Us */}
                    <div className="bg-[#819671] p-10 rounded-[40px] text-white">
                       <h3 className="text-xl font-medium mb-4 tracking-tight">Follow Us</h3>
                       <p className="text-white/60 text-sm font-light leading-relaxed mb-8">Stay connected for beauty tips, special offers, and behind-the-scenes content.</p>
                       <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">IG</div>
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">TK</div>
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">FB</div>
                       </div>
                    </div>

                    {/* Quick Book */}
                    <div className="bg-[#FDFDF5] p-10 rounded-[40px] border border-[#1E3A2F]/10">
                       <h3 className="text-xl font-medium text-[#1E3A2F] mb-4 tracking-tight">Ready to Book?</h3>
                       <p className="text-[#4A5D45]/60 text-sm font-light mb-8">Skip the form and book your appointment directly.</p>
                       <div className="space-y-3">
                          <button className="w-full bg-[#1E3A2F] text-white py-4 rounded-full font-semibold">Book Online Now</button>
                          <button className="w-full bg-transparent border border-[#1E3A2F]/10 text-[#1E3A2F] py-4 rounded-full font-semibold">Call +251 912 345 678</button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-[#FDFDF5]">
           <div className="site-container">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-(--font-display) text-[#1E3A2F] mb-4 tracking-tight">Frequently Asked Questions</h2>
                 <p className="text-[#4A5D45]/60 font-light">Quick answers to common questions</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                 <FaqItem q="Do I need to book an appointment?" a="Yes, we recommend booking in advance to ensure availability. Walk-ins are welcome based on stylist availability." />
                 <FaqItem q="What is your cancellation policy?" a="We require 24-hour notice for cancellations. Late cancellations may be subject to a fee." />
                 <FaqItem q="Do you offer consultations?" a="Yes! We offer complementary consultations for all services to discuss your beauty goals." />
                 <FaqItem q="What payment methods do you accept?" a="We accept cash, all major credit cards, and local mobile payment methods (Telebirr/CBE Birr)." />
              </div>
              <div className="mt-16 text-center">
                 <p className="text-[#4A5D45]/60 mb-6">Can&apos;t find what you&apos;re looking for?</p>
                 <button className="px-10 py-3 border border-[#1E3A2F]/10 text-[#1E3A2F] rounded-full text-sm font-medium">View All FAQs</button>
              </div>
           </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-white">
           <div className="site-container text-center">
              <h2 className="text-4xl font-(--font-display) text-[#1E3A2F] mb-4 tracking-tight">Visit Our Salon</h2>
              <p className="text-[#4A5D45]/60 font-light mb-16">Conveniently located in the heart of the city</p>
              
              <div className="relative h-[500px] w-full bg-[#F4F4E4] rounded-[60px] overflow-hidden group shadow-2xl">
                 <div className="absolute inset-0 bg-[#E8E8D0] flex items-center justify-center">
                    <div className="text-center space-y-6">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg text-2xl">📍</div>
                       <div>
                          <h4 className="text-2xl font-medium text-[#1E3A2F] mb-1">Liya Gole Salon</h4>
                          <p className="text-[#4A5D45]/60">Bole Road, Addis Ababa, Ethiopia</p>
                       </div>
                       <button className="bg-[#1E3A2F] text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase">Get Directions</button>
                    </div>
                 </div>
              </div>

              <div className="grid md:grid-cols-3 gap-12 mt-20">
                 <div>
                    <h5 className="font-bold text-[#1E3A2F] mb-4 uppercase tracking-widest text-[13px]">Parking</h5>
                    <p className="text-[#4A5D45]/60 text-sm font-light">Free street parking and nearby parking garage.</p>
                 </div>
                 <div>
                    <h5 className="font-bold text-[#1E3A2F] mb-4 uppercase tracking-widest text-[13px]">Public Transit</h5>
                    <p className="text-[#4A5D45]/60 text-sm font-light">2 blocks from Bole Medhanealem Light Rail Station.</p>
                 </div>
                 <div>
                    <h5 className="font-bold text-[#1E3A2F] mb-4 uppercase tracking-widest text-[13px]">Accessibility</h5>
                    <p className="text-[#4A5D45]/60 text-sm font-light">Wheelchair accessible entrance and facilities.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>


    </div>
  );
}

function ContactInfoCard({ icon, title, lines, linkText }: { icon: string, title: string, lines: string[], linkText: string }) {
  return (
    <div className="bg-white p-10 rounded-[40px] border border-[#1E3A2F]/5 flex flex-col items-center text-center group hover:shadow-xl transition-all">
       <div className="w-16 h-16 rounded-full bg-[#F4F4E4] flex items-center justify-center text-2xl mb-8 group-hover:bg-[#1E3A2F] group-hover:text-white transition-all">
          {icon}
       </div>
       <h3 className="text-xl font-medium text-[#1E3A2F] mb-6 tracking-tight">{title}</h3>
       <div className="space-y-2 mb-8 flex-grow">
          {lines.map((l, i) => <p key={i} className="text-[#4A5D45]/70 text-sm font-light">{l}</p>)}
       </div>
       <span className="text-[13px] font-bold text-[#1E3A2F] uppercase tracking-widest group-hover:translate-x-1 transition-transform cursor-pointer">{linkText}</span>
    </div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="bg-white p-10 rounded-[40px] text-left border border-[#1E3A2F]/3 group hover:border-[#4A5D45]/10 transition-all">
       <h4 className="text-xl font-medium text-[#1E3A2F] mb-4 tracking-tight">{q}</h4>
       <p className="text-[#4A5D45]/70 text-sm leading-relaxed font-light">{a}</p>
    </div>
  );
}
