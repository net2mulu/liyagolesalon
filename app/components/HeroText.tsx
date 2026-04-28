"use client";

import { motion, type Variants } from "framer-motion";

export function HeroText() {
  const heroContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headingVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.12,
        when: "beforeChildren",
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const textLines = ["Where Beauty,", "Meets Intentionality"];

  return (
    <motion.div variants={heroContainer} initial="hidden" animate="visible">
      <motion.p
        variants={item}
        className="text-xs font-semibold tracking-widest text-white/75"
      >
        YOUR BEAUTY DESTINATION
      </motion.p>
      
      <motion.h1
        variants={headingVariant}
        className="mt-3 max-w-xl font-(--font-display) text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl"
        aria-label={textLines.join(" ")}
      >
        <span className="flex flex-col">
          {textLines.map((line, index) => (
            <motion.span
              key={line + index}
              variants={item}
              className="block"
              aria-hidden="true"
            >
              {line}
            </motion.span>
          ))}
        </span>
        <span className="sr-only">{textLines.join(" ")}</span>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-5 max-w-xl text-sm leading-7 text-white/75"
      >
        A refined beauty destination founded by Liya Gole, where artistry meets
        precision and every detail matters.
      </motion.p>

      <motion.div variants={item} className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="/services"
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
        >
          View Services
        </a>
      </motion.div>
    </motion.div>
  );
}
