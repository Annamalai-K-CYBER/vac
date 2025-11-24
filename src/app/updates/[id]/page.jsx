"use client";

import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";

/*** -------------------------
 * NAVBAR COMPONENT
 * ------------------------- ***/
const Navbar = ({ openMenu, setOpenMenu }) => (
  <motion.header
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full px-6 sm:px-10 py-6 flex justify-between items-center backdrop-blur-xl bg-gradient-to-r from-purple-800 via-purple-500 to-pink-500 shadow-lg fixed top-0 left-0 z-50"
  >
    <Link href="/" className="text-2xl sm:text-3xl font-extrabold text-purple-300">
      Vagish & Co
    </Link>

    <nav className="hidden md:flex gap-10 text-lg font-medium text-purple-300">
      <Link href="/" className="hover:text-white transition">Home</Link>
      <Link href="/about" className="hover:text-white transition">About</Link>
      <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
      <Link href="/team" className="hover:text-white transition">Team</Link>
      <Link href="/updates" className="hover:text-white transition">Updates</Link>
    </nav>

    <button
      onClick={() => setOpenMenu(!openMenu)}
      className="md:hidden text-purple-300 text-3xl"
    >
      ☰
    </button>

    {openMenu && (
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        className="absolute right-4 top-20 bg-black/70 backdrop-blur-xl shadow-xl rounded-xl p-5 flex flex-col gap-4 text-right md:hidden"
      >
        <Link href="/" onClick={() => setOpenMenu(false)} className="text-purple-300 text-lg">Home</Link>
        <Link href="/gallery" onClick={() => setOpenMenu(false)} className="text-purple-300 text-lg">Gallery</Link>
        <Link href="/team" onClick={() => setOpenMenu(false)} className="text-purple-300 text-lg">Team</Link>
        <Link href="/updates" onClick={() => setOpenMenu(false)} className="text-purple-300 text-lg">Updates</Link>
      </motion.div>
    )}
  </motion.header>
);

/*** -------------------------
 * AUDIO CARD COMPONENT
 * ------------------------- ***/
const playingAnimation = keyframes`
  0% { transform: scaleY(0.1); }
  33% { transform: scaleY(0.6); }
  66% { transform: scaleY(0.9); }
  100% { transform: scaleY(0.1); }
`;

const AudioCard = ({ songSrc, title, artist }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      const progressPercent = (audio.currentTime / audio.duration) * 100 || 0;
      setProgress(progressPercent);

      const curMin = Math.floor(audio.currentTime / 60);
      const curSec = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
      setCurrentTime(`${curMin}:${curSec}`);

      const durMin = Math.floor(audio.duration / 60) || 0;
      const durSec = Math.floor(audio.duration % 60).toString().padStart(2, "0");
      setDuration(`${durMin}:${durSec}`);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);
    audio.addEventListener("ended", () => setIsPlaying(false));

    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
    };
  }, [songSrc]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play().catch(() => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  };

  const skipTime = (seconds) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(0, audio.currentTime + seconds), audio.duration || 0);
  };

  return (
    <CardWrapper>
      <audio ref={audioRef} src={songSrc} />
      <div className="card">
        <div className="top">
          <div className="pfp">
            <div className="playing">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`greenline line-${i + 1}`} />
              ))}
            </div>
          </div>
          <div className="texts">
            <p className="title-1">{title}</p>
            <p className="title-2">{artist}</p>
          </div>
        </div>

        <div className="controls">
          <button onClick={() => skipTime(-10)} className="skip-button">
            <ArrowLeft size={16} /> 10s
          </button>
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <button onClick={() => skipTime(10)} className="skip-button">
            10s <ArrowRight size={16} />
          </button>
        </div>

        <div className="time">
          <div className="elapsed" style={{ width: `${progress}%` }} />
        </div>
        <p className="timetext time_now">{currentTime}</p>
        <p className="timetext time_full">{duration}</p>

        {!isPlaying && (
          <div className="play-overlay" onClick={togglePlay}>
            ▶ Tap to play
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    max-width: 360px;
    background: linear-gradient(135deg, #0b0b0b, #1f1f1f);
    border-radius: 15px;
    padding: 15px;
    color: white;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.5);
  }

  .top { display: flex; gap: 10px; align-items: center; }
  .pfp { width: 50px; height: 50px; background:#2c2c2c; border-radius:10px; display:flex; justify-content:center; align-items:center; }
  .texts { display:flex; flex-direction:column; }
  .title-1 { font-size: 16px; font-weight:600; }
  .title-2 { font-size: 12px; color:#aaa; margin-top:-3px; }

  .playing { display:flex; gap:2px; width:30px; height:20px; }
  .greenline { background-color:#1db954; width:3px; height:100%; transform-origin:bottom; animation:${playingAnimation} 1s ease-in-out infinite; }
  .line-1 { animation-delay: 0.1s; }
  .line-2 { animation-delay: 0.3s; }
  .line-3 { animation-delay: 0.5s; }
  .line-4 { animation-delay: 0.2s; }
  .line-5 { animation-delay: 0.4s; }

  .controls { display:flex; justify-content:center; align-items:center; gap:12px; margin-top:10px; flex-wrap: wrap; }
  .play-button { width:50px; height:50px; font-size:20px; border-radius:50%; border:none; background:#1db954; cursor:pointer; color:white; transition: transform 0.2s; }
  .play-button:hover { transform: scale(1.1); }
  .skip-button { background:none; border:none; color:#aaa; font-size:12px; display:flex; align-items:center; gap:4px; cursor:pointer; }
  .skip-button:hover { color:#1db954; }

  .time { width: 100%; background: #2c2c2c; height: 6px; border-radius: 3px; position: relative; margin-top:8px; }
  .elapsed { background: #1db954; height: 100%; border-radius: 3px; width: 0%; }

  .timetext { font-size: 10px; position: absolute; color: #fff; }
  .time_now { bottom: -18px; left: 0; }
  .time_full { bottom: -18px; right: 0; }

  .play-overlay {
    position: absolute;
    top: 0; left:0; right:0; bottom:0;
    background: rgba(0,0,0,0.5);
    display:flex; justify-content:center; align-items:center;
    color:#1db954; font-size:16px; font-weight:bold;
    border-radius: 15px;
    cursor:pointer;
  }

  @media(max-width: 480px){
    .card { padding: 12px; }
    .title-1 { font-size: 14px; }
    .title-2 { font-size: 10px; }
    .play-button { width:40px; height:40px; font-size:16px; }
    .skip-button { font-size:10px; }
  }
`;

/*** -------------------------
 * MAIN UPDATE DETAILS PAGE
 * ------------------------- ***/
export default function UpdateDetailsPage() {
  const params = useParams();
  const { id } = params;
  const [openMenu, setOpenMenu] = useState(false);

  const updates = {
  "1": {
    title: "Site Launch & Vagish Birthday 🎉",
    details: "Celebrating Vagish’s birthday and the official launch of our friendship website! 💜",
    date: "Nov 2025",
    image: "https://ik.imagekit.io/9t9wl5ryo/1731930246447.jpg",
    song: "https://ik.imagekit.io/9t9wl5ryo/123.mp3",
  },
};


  const updateIds = Object.keys(updates);
  const currentIndex = updateIds.indexOf(id);
  const prevId = updateIds[currentIndex - 1] || null;
  const nextId = updateIds[currentIndex + 1] || null;

  const update = updates[id];

  if (!update) return <p className="text-center mt-40 text-purple-300 text-xl">Update not found!</p>;

  return (
    <PageWrapper>
      <div className="bg-overlay" />
      <div className="gradient-overlay" />
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="content">
        <Link href="/updates" className="back-link">← Back to Updates</Link>
        <motion.h1
          initial={{ opacity:0, y:-20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="update-title"
        >
          {update.title}
        </motion.h1>
        <p className="update-date">{update.date}</p>

        <motion.img
          initial={{ opacity:0, scale:0.95 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.6 }}
          src={update.image}
          alt={update.title}
          className="update-image"
        />

        <motion.p
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="update-details"
        >
          {update.details}
        </motion.p>

        {update.song && (
          <AudioCard songSrc={update.song} title={update.title} artist="Vagish & Co" />
        )}

        <div className="update-nav">
          {prevId && <Link href={`/updates/${prevId}`} className="prev"><ArrowLeft /> Previous</Link>}
          {nextId && <Link href={`/updates/${nextId}`} className="next">Next <ArrowRight /></Link>}
        </div>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  font-family: sans-serif;
  overflow-x: hidden;
  background: #0b0b0b;

  .bg-overlay {
    position: absolute;
    inset: 0;
    background-image: url("/friend-bg.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.85;
    z-index: -10;
  }

  .gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(139,92,246,0.5), rgba(74,222,128,0.3), rgba(255,78,193,0.4));
    z-index: -5;
  }

  .content {
    max-width: 720px;
    margin: 0 auto;
    padding: 140px 20px 50px 20px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .back-link { color:#d8b4fe; text-decoration:underline; }
  .update-title { font-size: 3rem; font-weight: 800; color:#fff; }
  .update-date { color:#d8b4fe; font-weight:600; }
  .update-image { width:100%; border-radius:20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  .update-details { background: rgba(0,0,0,0.5); padding:20px; border-radius:20px; line-height:1.6; font-size:1.1rem; }

  .update-nav { display:flex; justify-content:space-between; margin-top:20px; font-weight:600; }
  .update-nav a { color:#a78bfa; text-decoration:underline; display:flex; align-items:center; gap:6px; }
  .update-nav a:hover { color:#fbbf24; }

  @media(max-width:480px){
    .update-title { font-size:2rem; }
    .update-details { font-size:1rem; }
    .update-nav { flex-direction:column; gap:10px; }
  }
`;
