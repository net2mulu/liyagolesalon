"use client";

import GooeyNav from "./GooeyNav";
import Link from "next/link";
import Image from "next/image";

const MainNavbar = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-[1000] flex justify-center pointer-events-none">
      <div className="gooey-nav-wrapper pointer-events-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Liya Gole Salon"
            width={120}
            height={30}
            className="nav-logo"
            priority
          />
        </Link>

        {/* Gooey Navigation */}
        <GooeyNav
          items={items}
          particleCount={11}
          particleDistances={[60, 5]}
          particleR={80}
          initialActiveIndex={0}
          animationTime={500}
          timeVariance={600}
        />

        {/* Call to Action */}
        <Link href="/#book" className="nav-cta-btn">
          Book Now
        </Link>
      </div>
    </header>
  );
};

export default MainNavbar;
