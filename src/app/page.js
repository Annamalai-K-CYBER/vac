"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false);

  // Single update JSON with dynamic ID
  const updates = {
    1: {
      title: "Site Launch & Vagish Birthday 🎉",
      details:
        "Celebrating Vagish’s birthday and the official launch of our friendship website! 💜",
      date: "Nov 2025",
      image: "https://ik.imagekit.io/9t9wl5ryo/1731930246447.jpg",
      song: "https://ik.imagekit.io/9t9wl5ryo/123.mp3",
    },
    2: {
    title: "Whity BirthDay 🎉",
    details: "Celebrating Whity's birthday! 💜",
    date: "2nd Jan 2026",
    image: "https://ik.imagekit.io/9t9wl5ryo/IMG_20260102_111451.png",
    song: "https://ik.imagekit.io/9t9wl5ryo/WhatsApp%20Audio%202026-01-02%20at%207.52.21%20AM.mpeg",
  },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-400 dark:from-black dark:via-purple-900 dark:to-indigo-900 font-sans">
      {/* ========================== */}
      {/* ⭐ HEADER WITH FULL NAVIGATION ⭐ */}
      {/* ========================== */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full px-6 sm:px-10 py-6 flex justify-between items-center backdrop-blur-md bg-gradient-to-r from-purple-800 via-purple-500 to-pink-500 shadow-lg sticky top-0 z-50"
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Vagish & Co
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-lg font-medium text-white">
          <a href="/" className="hover:text-yellow-300 transition">
            Home
          </a>
          <a href="/about" className="hover:text-yellow-300 transition">
            About
          </a>
          <a href="/gallery" className="hover:text-yellow-300 transition">
            Gallery
          </a>
          <a href="/team" className="hover:text-yellow-300 transition">
            Team
          </a>
          <a href="/updates" className="hover:text-yellow-300 transition">
            Updates
          </a>
        </nav>

        {/* Mobile Dropdown Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="absolute right-4 top-20 bg-white/70 dark:bg-black/70 backdrop-blur-xl shadow-xl rounded-xl p-5 flex flex-col gap-4 text-right md:hidden"
            >
              {["Home", "About", "Gallery", "Team", "Updates"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-purple-900 dark:text-purple-200 text-lg hover:text-yellow-300 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ========================== */}
      {/* ⭐ HERO SECTION ⭐ */}
      {/* ========================== */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center px-6 sm:px-8 py-20 sm:py-32"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl leading-tight">
            Celebrate
            <br className="sm:hidden" /> Friendship 💖
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-xl mt-6 text-lg sm:text-xl text-zinc-200 px-2"
        >
          A colourful world filled with joy, connections, and endless good
          vibes.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 rounded-full text-lg sm:text-xl shadow-lg transition"
          onClick={() => alert("Friendship Forever! 🌟💜")}
        >
          Spread Love
        </motion.button>

        <motion.div
          className="mt-10 flex gap-6 text-4xl sm:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            💜
          </motion.span>
          <motion.span
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🚀
          </motion.span>
          <motion.span
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            🔥
          </motion.span>
        </motion.div>
      </motion.section>
      {/* ========================== */}
      {/* ⭐ UPDATE SECTION ⭐ */}
      {/* ========================== */}
      <section
        id="updates"
        className="py-20 px-6 sm:px-10 bg-white/30 dark:bg-black/20 backdrop-blur-xl"
      >
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6"
        >
          Latest Update 📰
        </motion.h3>

        <p className="max-w-2xl mx-auto text-center text-lg text-zinc-200 mb-12">
          A special moment for our group — click to read more!
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {Object.keys(updates).map((key) => {
            const update = updates[key];
            return (
              <motion.a
                key={key}
                href={`/updates/${key}`} // <-- dynamic ID route
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-tr from-purple-700/40 via-pink-500/40 to-blue-400/40 backdrop-blur-xl shadow-2xl rounded-3xl text-white font-semibold transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="flex-shrink-0 w-full md:w-48 h-48 rounded-2xl overflow-hidden">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-2">{update.title}</h4>
                  <p className="text-sm text-zinc-200 mb-3">{update.date}</p>
                  <p className="text-base">{update.details}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>
      {/* ========================== */}
      {/* ⭐ EXTRA CONTENT SECTION ⭐ */}
      {/* ========================== */}
      <section className="py-20 px-6 sm:px-10 bg-white/40 dark:bg-white/5 backdrop-blur-xl">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6"
        >
          What Makes Us Special 💫
        </motion.h3>

        <p className="max-w-2xl mx-auto text-center text-lg text-zinc-200">
          Vagish & Co isn’t just a group — it’s a family. Built on love, chaos,
          memories, support, and pure vibes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {[
            "Unbreakable Bond",
            "Endless Memories",
            "Real Support",
            "True Friendship",
            "Zero Judgement",
            "Full Vibes Always",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-xl rounded-3xl text-center text-white font-semibold"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-zinc-200">
        © {new Date().getFullYear()} Vagish & Co — Built with 💜, Friendship,
        and Vibes
      </footer>
    </div>
  );
}
