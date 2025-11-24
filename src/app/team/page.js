"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import styled from "styled-components";

export default function Team() {
  const [open, setOpen] = useState(false);

  const members = [
  { pet: "Vagish", role: "Leader", name: "Vagish", emoji: "🔥", gradient: "linear-gradient(135deg, #6b21a8, #a78bfa, #c4b5fd)" },
  { pet: "Natu", role: "Introvert", name: "Natu", emoji: "🤫", gradient: "linear-gradient(135deg, #047857, #10b981, #34d399)" },
  { pet: "AK", role: "Chess Legend", name: "AK", emoji: "♟️", gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6, #60a5fa)" },
  { pet: "Whity", role: "Scientist", name: "Whity", emoji: "🧪", gradient: "linear-gradient(135deg, #be185d, #ec4899, #f472b6)" },
  { pet: "Annamalai", role: "Web Developer", name: "Annamalai", emoji: "💻", gradient: "linear-gradient(135deg, #d97706, #fbbf24, #fcd34d)" },
  { pet: "Sahaswath", role: "Extrovert", name: "Sahaswath", emoji: "😎", gradient: "linear-gradient(135deg, #7c3aed, #c084fc, #d8b4fe)" },
  { pet: "Pari", role: "Pet Lover", name: "Pari", emoji: "🐶", gradient: "linear-gradient(135deg, #f97316, #fb923c, #fcd34d)" },
  { pet: "Kanthra", role: "THR Dancer", name: "Kanthra", emoji: "💃", gradient: "linear-gradient(135deg, #9333ea, #a855f7, #c084fc)" },
  { pet: "Boku", role: "Joker", name: "Boku", emoji: "🤣", gradient: "linear-gradient(135deg, #0ea5e9, #3b82f6, #60a5fa)" },
];

  const navItems = ["Home", "About", "Gallery", "Team", "Updates"];

  return (
    <Container>
      {/* NAVBAR */}
      <Header>
        <h1>Vagish & Co</h1>
        <Nav>
          {navItems.map(item => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={item === "Team" ? "active" : ""}
            >
              {item}
            </a>
          ))}
        </Nav>
        <MenuButton onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </MenuButton>
      </Header>

      {/* Mobile Menu */}
      {open && (
        <MobileNav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          {navItems.map(item => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={item === "Team" ? "active" : ""}
            >
              {item}
            </a>
          ))}
        </MobileNav>
      )}

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet The Squad 🔥
      </motion.h2>

      {/* TEAM GRID */}
      <Grid>
        {members.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
          >
            <Card>
              <Inner>
                <Front style={{ background: m.gradient }}>
                  <h3>{m.pet}</h3>
                  <p>{m.role}</p>
                </Front>
                <Back>
                  <span>{m.emoji}</span>
                  <h3>{m.name}</h3>
                </Back>
              </Inner>
            </Card>
          </motion.div>
        ))}
      </Grid>

      {/* FOOTER */}
      <Footer>
        © {new Date().getFullYear()} Vagish & Co — United by Friendship 🔥
      </Footer>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to bottom right, #111827, #1e293b);
  color: #fff;
  overflow-x: hidden;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    margin: 3rem 0;
    color: #a78bfa;
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(30, 30, 40, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.2);
  border-radius: 0 0 20px 20px;

  h1 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #c084fc;
  }
`;

const Nav = styled.nav`
  display: none;
  gap: 2rem;
  font-weight: 600;
  @media(min-width:768px){
    display: flex;
  }
  a {
    color: #e0e7ff;
    text-decoration: none;
    font-size: 1rem;
    &.active { text-decoration: underline; color: #a78bfa; font-weight: 700; }
    &:hover { color: #c084fc; }
  }
`;

const MenuButton = styled.button`
  display: block;
  @media(min-width:768px){ display: none; }
  background: none;
  border: none;
  cursor: pointer;
  color: #e0e7ff;
`;

const MobileNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: rgba(30,30,40,0.85);
  backdrop-filter: blur(8px);
  padding: 1rem 2rem;
  a {
    margin: 0.5rem 0;
    text-decoration: none;
    color: #e0e7ff;
    font-weight: 600;
    font-size: 1rem;
    &.active { text-decoration: underline; color: #a78bfa; font-weight: 700; }
    &:hover { color: #c084fc; }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Card = styled.div`
  width: 100%;
  height: 320px;
  perspective: 2000px;
  cursor: pointer;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  transform-style: preserve-3d;
  ${Card}:hover & { transform: rotateY(180deg); }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.6);
  color: #fff;
  text-align: center;
  padding: 1rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.3;
  }
`;

const Back = styled(Front)`
  background: #1f2937;
  color: #f3f4f6;
  transform: rotateY(180deg);
  span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    display: block;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  color: #e0e7ff;
  font-size: 1rem;
`;
