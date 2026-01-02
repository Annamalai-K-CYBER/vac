"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function UpdatesPage() {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentSong, setCurrentSong] = useState(""); 
  const [isPlaying, setIsPlaying] = useState(false);

  const updates = [
  {
    id: "1",
    title: "Site Launch & Vagish Birthday 🎉",
    desc: "Celebrating Vagish’s birthday and the official launch of our friendship website! 💜",
    date: "Nov 2025",
    song: "https://ik.imagekit.io/9t9wl5ryo/123.mp3",
  },{
    id: "2",
    title: "Whity BirthDay 🎉",
    desc: "Celebrating Whity's birthday! 💜",
    date: "2nd Jan 2026",
    image: "https://ik.imagekit.io/9t9wl5ryo/IMG_20260102_111451.png",
    song: "https://ik.imagekit.io/9t9wl5ryo/WhatsApp%20Audio%202026-01-02%20at%207.52.21%20AM.mpeg",
  },
];


  const navItems = ["Home", "About", "Gallery", "Team", "Updates"];

  const playSong = (songUrl) => {
    setCurrentSong(songUrl);
    setIsPlaying(true);
  };

  return (
    <div className="relative min-h-screen w-full font-sans overflow-hidden">
      
      {/* AUDIO ELEMENT */}
      {currentSong && <audio key={currentSong} src={currentSong} autoPlay loop controls={false} />}

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          backgroundImage: "url('/friend-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-pink-900/40 to-blue-900/60 -z-5"></div>

      {/* NAVBAR */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full px-6 sm:px-10 py-6 flex justify-between items-center backdrop-blur-xl bg-black/30 shadow-lg fixed top-0 left-0 z-50"
      >
        <Link href="/" className="text-2xl sm:text-3xl font-extrabold text-purple-300">
          Vagish & Co
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 text-lg font-medium text-purple-300">
          {navItems.map(item => (
            <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className={item === "Updates" ? "underline font-semibold" : ""}>
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-purple-300 text-3xl"
        >
          ☰
        </button>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="absolute right-4 top-20 bg-black/70 backdrop-blur-xl shadow-xl rounded-xl p-6 flex flex-col gap-4 text-right md:hidden"
            >
              {navItems.map(item => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setOpenMenu(false)}
                  className={item === "Updates" ? "underline font-semibold text-purple-300" : "text-purple-300"}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* PAGE HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center pt-40 pb-10 px-6"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-purple-300 drop-shadow-xl">Updates</h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-purple-100">
          Stay up-to-date with everything happening in our gang.
        </p>
      </motion.header>

      {/* UPDATES LIST */}
      <div className="px-6 sm:px-12 pb-32 max-w-5xl mx-auto">
        <div className="grid gap-8 sm:gap-10">
          {updates.map(u => (
            <motion.div
              key={u.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/40 p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-xl hover:scale-[1.03] transition cursor-pointer"
              onClick={() => playSong(u.song)}
            >
              <Link href={`/updates/${u.id}`}>
                <h3 className="text-3xl font-bold text-purple-300">{u.title}</h3>
                <p className="text-purple-100 mt-2 text-lg">{u.desc}</p>
                <p className="text-purple-400 mt-3 font-semibold">{u.date}</p>
                <p className="mt-5 text-purple-300 font-semibold underline text-lg">Read More →</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
