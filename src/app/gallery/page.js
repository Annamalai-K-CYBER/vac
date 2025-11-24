"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// JSON for menu
const menuJson = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Gallery", link: "/gallery" },
  { title: "Team", link: "/team" },
  { title: "Updates", link: "/updates" },
];

// JSON for gallery images
const galleryJson = [
  { id: 1, src: "https://ik.imagekit.io/9t9wl5ryo/WhatsApp%20Image%202025-11-24%20at%2022.53.10_bf86af15.jpg" },
  { id: 2, src: "https://ik.imagekit.io/9t9wl5ryo/WhatsApp%20Image%202025-11-24%20at%2022.53.19_5dca8d60.jpg" },
  { id: 3, src: "https://ik.imagekit.io/9t9wl5ryo/WhatsApp%20Image%202025-11-24%20at%2022.53.15_9f28fd87.jpg" },
  { id: 4, src: "https://ik.imagekit.io/9t9wl5ryo/WhatsApp%20Image%202025-11-24%20at%2022.54.21_8fe4c826.jpg" },
  { id: 5, src: "https://ik.imagekit.io/9t9wl5ryo/1731930246447.jpg" },
  { id: 6, src: "https://ik.imagekit.io/9t9wl5ryo/PXL_20241118_042456519.jpg" },  
];

export default function GalleryPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full font-sans overflow-hidden">
      {/* Background Image */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-pink-400/20 to-blue-400/40 -z-5" />

      {/* NAVIGATION BAR */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full px-6 sm:px-10 py-5 flex justify-between items-center 
                   backdrop-blur-xl bg-gradient-to-r from-purple-800 via-purple-500 to-pink-500 
                   shadow-lg sticky top-0 z-50"
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Vagish & Co</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-10 text-lg font-medium text-white">
          {menuJson.map((item) => (
            <a key={item.title} href={item.link} className="hover:text-yellow-300 transition">
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.header>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-xl px-6 py-4 space-y-4 text-lg text-purple-900 dark:text-purple-200"
        >
          {menuJson.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="block hover:text-yellow-300 transition"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </motion.div>
      )}

      {/* PAGE HEADER */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center px-6 py-20 sm:py-24"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-xl">
          Gallery
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg sm:text-xl text-zinc-200">
          A collection of our best memories, moments, and friendship highlights.
        </p>
      </motion.header>

      {/* MASONRY GALLERY */}
      <section className="px-4 sm:px-8 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6">
          {galleryJson.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-5 sm:mb-6 break-inside-avoid rounded-2xl overflow-hidden shadow-xl 
                         bg-white/40 dark:bg-black/40 backdrop-blur-xl"
            >
              <img
                src={img.src}
                alt={`Gallery Image ${img.id}`}
                className="w-full h-auto object-cover hover:scale-[1.03] transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-zinc-200 text-lg">
        © {new Date().getFullYear()} Vagish & Co — Friendship Captured Forever 💜
      </footer>
    </div>
  );
}
