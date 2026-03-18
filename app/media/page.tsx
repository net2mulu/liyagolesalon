import Link from "next/link";
import Image from "next/image";

const links = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/liya_gole_salon?igsh=N3J5c2xya2ZtZGV6&utm_source=qr",
    description: "Behind-the-scenes, results, and updates.",
    iconSrc: "/insta.svg",
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@liyagolesalon?_r=1&_t=ZS-94lWt2itbvU",
    description: "Short videos, transformations, and trends.",
    iconSrc: "/tiktok.svg",
  },
] as const;

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-14">
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
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand ring-1 ring-border transition group-hover:bg-brand/15">
                  <Image
                    src={iconSrc}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 text-brand"
                  />
                </span>
              </div>
              <p className="mt-5 text-xs font-semibold text-brand group-hover:text-brand-2">
                Open {title} →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

