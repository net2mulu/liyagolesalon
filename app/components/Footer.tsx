import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#819671] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="relative inline-flex h-10 w-[150px] items-center">
              <Image
                src="/logo.png"
                alt="Liya Gole Salon"
                width={320}
                height={100}
                className="h-10 w-auto object-contain opacity-90"
              />
            </div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              More than a salon—confidence is crafted, individuality is
              celebrated, and beauty is redefined.
            </p>
          </div>

          <FooterCol
            title="Quick Links"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Book", href: "/#book" },
              { label: "Gallery", href: "/gallery" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <FooterCol
            title="Our Services"
            items={[
              { label: "Hair Styling", href: "/services" },
              { label: "Color & Treatments", href: "/services" },
              { label: "Manicure & Pedicure", href: "/services" },
              { label: "Beauty", href: "/services" },
            ]}
          />

          <div>
            <p className="text-sm font-semibold">Contact Us</p>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <p>Phone: add your number</p>
              <p>Email: booking@liyagolesalon.com</p>
              <p>Address: add your address</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/liya_gole_salon?igsh=N3J5c2xya2ZtZGV6&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 hover:bg-white/15"
                aria-label="Instagram"
              >
                <Image src="/insta.svg" alt="" width={20} height={20} />
              </a>
              <a
                href="https://www.tiktok.com/@liyagolesalon?_r=1&_t=ZS-94lWt2itbvU"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 hover:bg-white/15"
                aria-label="TikTok"
              >
                <Image src="/tiktok.svg" alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Liya Gole Salon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-3 grid gap-2 text-sm text-white/70">
        {items.map((it) => (
          <li key={it.label}>
            <Link className="hover:text-white" href={it.href}>
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
