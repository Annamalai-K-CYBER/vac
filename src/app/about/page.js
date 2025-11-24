"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative min-h-screen w-full font-sans overflow-x-hidden">

      {/* ========================== */}
      {/* ⭐ BACKGROUND ⭐ */}
      {/* ========================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/friend-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.85,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/40 via-pink-400/20 to-blue-400/40 
      dark:from-black/60 dark:via-purple-900/50 dark:to-indigo-900/60 -z-5"></div>

      {/* ========================== */}
      {/* ⭐ TOP NAVIGATION ⭐ */}
      {/* ========================== */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full px-4 sm:px-8 py-4 flex justify-between items-center 
        backdrop-blur-xl bg-gradient-to-r from-purple-800 via-purple-500 to-pink-500 shadow-lg fixed top-0 left-0 z-50"
      >
        <a href="/" className="text-xl sm:text-3xl font-extrabold text-white">
          Vagish & Co
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-medium text-white">
          <a href="/" className="hover:text-yellow-300 transition">Home</a>
          <a href="/about" className="hover:text-yellow-300 transition">About</a>
          <a href="/gallery" className="hover:text-yellow-300 transition">Gallery</a>
          <a href="/team" className="hover:text-yellow-300 transition">Team</a>
          <a href="/updates" className="hover:text-yellow-300 transition">Updates</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.25 }}
              className="absolute right-4 top-20 bg-white/70 dark:bg-black/70 
              backdrop-blur-xl shadow-xl rounded-xl p-5 flex flex-col gap-4 text-right md:hidden min-w-[130px]"
            >
              {["Home", "About", "Gallery", "Team", "Updates"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-purple-900 dark:text-purple-200 text-lg hover:text-yellow-300 transition"
                  onClick={() => setOpenMenu(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ========================== */}
      {/* ⭐ CONTENT WRAPPER ⭐ */}
      {/* ========================== */}
      <div className="px-4 sm:px-8 pt-36 pb-24">

        {/* PAGE TITLE */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold 
          text-white drop-shadow-xl leading-tight">
            About Us
          </h1>

          <p className="max-w-xl mx-auto mt-3 text-base sm:text-xl 
          text-zinc-200">
            The story of our gang, our friendship, and the unforgettable moments we create.
          </p>
        </motion.header>

        {/* ABOUT SECTION */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/about-hero.png"
              width={450}
              height={450}
              alt="Friendship Art"
              className="rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </motion.div>

          {/* Text Box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-zinc-200 
            space-y-5 bg-white/20 dark:bg-black/40 p-6 sm:p-8 rounded-2xl backdrop-blur-xl shadow-xl"
          >
            <p>
              We are <span className="font-bold text-purple-200">Vagish & Co</span>,
              a tight group bonded by love, loyalty, late-night talks, and endless fun.
            </p>
            <p>
              From school days to late-night rides, laughs, chaos, emotional moments, and unforgettable memories —
              we’ve built something real.
            </p>
            <p>
              Our mission is simple:  
              <span className="font-semibold text-yellow-300">
                support each other, grow together, and create memories worth living for.
              </span>
            </p>
          </motion.div>
        </section>

        {/* VALUES SECTION */}
        <section className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10 sm:mb-14">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[ 
              { title: "Loyalty", desc: "No matter what happens, we stand for each other — always." },
              { title: "Respect", desc: "Every voice matters, every feeling counts." },
              { title: "Fun", desc: "Life is too short — we make every moment exciting." },
              { title: "Growth", desc: "We push each other to become better every day." },
              { title: "Support", desc: "Through highs and lows, we stay united." },
              { title: "Memories", desc: "We create stories that last a lifetime." },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 bg-white/20 dark:bg-black/40 backdrop-blur-xl 
                rounded-2xl shadow-xl text-center"
              >
                <h3 className="text-2xl font-bold text-purple-200 mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-200 text-base sm:text-lg">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-10 text-zinc-200 text-sm sm:text-base">
        © {new Date().getFullYear()} Vagish & Co — Built with 💜, Friendship & Memories
      </footer>
    </div>
  );
}
