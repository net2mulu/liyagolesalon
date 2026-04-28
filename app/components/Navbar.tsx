import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="site-container flex items-center justify-between py-5">
        <a href="/" className="inline-flex items-center gap-3">
          <span className="relative inline-flex h-8 w-[110px] items-center">
            <Image
              src="/logo.png"
              alt="Liya Gole Salon"
              width={260}
              height={80}
              priority
              className="h-8 w-auto object-contain filter-[drop-shadow(0_2px_8px_rgba(0,0,0,0.35))]"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white md:flex">
          <a className="text-white/90 hover:text-white" href="/">
            Home
          </a>
          <a className="text-white/90 hover:text-white" href="/about">
            About
          </a>
          <a className="text-white/90 hover:text-white" href="/services">
            Services
          </a>
          <a className="text-white/90 hover:text-white" href="/gallery">
            Gallery
          </a>
          <a className="text-white/90 hover:text-white" href="/contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* <a
            href="tel:+251912345678"
            className="hidden h-9 items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 text-xs font-semibold text-white shadow-sm backdrop-blur hover:bg-white/15 md:inline-flex"
          >
            Call Us
          </a> */}
          <a
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-[#1E3A2F] shadow-sm hover:bg-white/90"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
