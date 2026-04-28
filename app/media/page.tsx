import Link from "next/link";
import Image from "next/image";

const links = [
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@liyagolesalon?_r=1&_t=ZS-94lWt2itbvU",
    description: "Short videos, transformations, and trends.",
    iconSrc: "/tiktok.png",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/liya_gole_salon?igsh=N3J5c2xya2ZtZGV6&utm_source=qr",
    description: "Behind-the-scenes, results, and updates.",
    iconSrc: "/insta.png",
  },
] as const;

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="site-container py-14">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted">
              SOCIAL MEDIA
            </p>
            <h1 className="mt-2 font-(--font-display) text-3xl tracking-tight sm:text-4xl">
              Follow Liya Gole Salon
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              Stay connected for inspiration, transformations, and updates.
            </p>
          </div>
          <Link
            href="/"
            className="hidden h-10 items-center justify-center rounded-full border bg-surface/70 px-5 text-sm font-semibold text-foreground shadow-sm hover:bg-surface md:inline-flex"
          >
            Back home
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {links.map(({ title, href, description, iconSrc }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border bg-surface/70 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-surface"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {description}
                  </p>
                </div>
                <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl ring-1 ring-border transition group-hover:ring-brand/30">
                  <Image
                    src={iconSrc}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 object-cover"
                  />
                </span>
              </div>
              <p className="mt-5 text-xs font-semibold text-brand group-hover:text-brand-2">
                Open {title} →
              </p>
            </a>
          ))}

          <Link
            href="/"
            className="group rounded-3xl border bg-surface/70 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-surface"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">Website</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Tap to preview the site—home, services, and booking.
                </p>
              </div>
              <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl ring-1 ring-border transition group-hover:ring-brand/30">
                <Image
                  src="/favicon-32x32.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
              </span>
            </div>

            <div className="mt-5">
              <div className="perspective-[1000px]">
                <div className="relative overflow-hidden rounded-2xl border bg-background shadow-sm transition duration-300 group-hover:-rotate-x-6 group-hover:rotate-y-6 group-hover:shadow-(--shadow)">
                  <div className="flex items-center gap-2 border-b bg-surface px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    <div className="ml-2 h-6 flex-1 rounded-xl bg-background/70" />
                  </div>
                  <div className="relative p-4">
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
                    <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
                    <div className="relative">
                      <p className="text-xs font-semibold tracking-widest text-muted">
                        LIYA GOLE SALON
                      </p>
                      <p className="mt-2 font-(--font-display) text-xl tracking-tight">
                        Your Beauty, Our Passion
                      </p>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl border bg-surface/70" />
                        <div className="h-16 rounded-xl border bg-surface/70" />
                        <div className="h-16 rounded-xl border bg-surface/70" />
                      </div>
                      <div className="mt-4 h-10 w-36 rounded-full bg-brand" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs font-semibold text-brand group-hover:text-brand-2">
              Open Website →
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
