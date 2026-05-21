import cyberBg from "../assets/cyber-bg.png";
import chaiGlass from "../assets/chai-glass.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import chai1 from "../assets/chai1.png";
import chai2 from "../assets/chai2.png";
import chai3 from "../assets/chai3.png";
import chai4 from "../assets/chai4.png";

import Loader from "../components/Loader";


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


export default function App() {

  const [activeCard, setActiveCard] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);

  }, []);

  const cards = [
    {
      label: "Chai Bunk",
      heading: "100K+",
      title: "Cups Served",
      text: "Every cup carries conversations, friendships, and Hyderabad’s café culture.",
    },

    {
      label: "Hyderabad Nights",
      heading: "Late",
      title: "Night Conversations",
      text: "From students to creators, Chai Bunk became Hyderabad’s favorite late-night café spot.",
    },

    {
      label: "Chai Experience",
      heading: "Freshly",
      title: "Brewed Daily",
      text: "Every experience starts with warm chai, comfort, and people gathering together.",
    },
  ];

  const menuItems = [
    {
      title: "Irani Chai",
      image: chai1,
    },

    {
      title: "Bun Maska",
      image: chai2,
    },

    {
      title: "Cold Coffee",
      image: chai3,
    },

    {
      title: "Maggi",
      image: chai4,
    },
  ];

  const nextCard = () => {
    setActiveCard((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  return (

    <>
    
      {loading && <Loader />}

      

      <div className="bg-black text-white overflow-x-hidden">

        {/* HERO SECTION */}

        <section className="relative min-h-screen flex items-center overflow-hidden">

          {/* Background */}
          <img
            src={cyberBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-orange-500/20 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          {/* Navbar */}

          <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-6 md:px-16 py-6">

            <img
              src={logo}
              alt=""
              className="w-16 md:w-20 rounded-2xl"
            />

            <button className="border border-orange-400/40 bg-white/5 backdrop-blur-md px-5 md:px-7 py-2 md:py-3 rounded-full text-orange-300 hover:bg-orange-400 hover:text-black transition-all duration-500">
              Explore
            </button>

          </nav>

          {/* Hero Content */}

          <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-16 pt-32">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3 }}
            >

              <p className="uppercase tracking-[0.4em] text-orange-300 text-xs md:text-sm mb-6">
                Hyderabad Café Culture
              </p>

              <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight">
                FUTURE
                <br />
                RUNS ON
                <br />
                CHAI.
              </h1>

              <p className="mt-8 text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed">
                A cinematic chai experience inspired by conversations,
                comfort, and Hyderabad’s café culture.
              </p>

              <div className="mt-10 flex gap-5 flex-wrap">

                <button className="bg-orange-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(255,140,0,0.45)]">
                  Enter Experience
                </button>

                <button className="border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  View Menu
                </button>

              </div>

            </motion.div>

            {/* RIGHT */}

            <div className="relative flex items-center justify-center">

              {/* Glow */}
              <div className="absolute w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-orange-500/20 blur-[180px] rounded-full"></div>

              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[320px] md:w-[700px] h-[320px] md:h-[700px] border border-orange-500/10 rounded-full"
              />

              {/* Floating Chai */}
              <motion.img
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                src={chaiGlass}
                alt=""
                className="relative z-20 w-[320px] md:w-[650px] object-contain drop-shadow-[0_0_120px_rgba(255,140,0,0.9)]"
              />

            </div>

          </div>

        </section>

        {/* CLICKABLE STORY CARDS */}

        <section className="relative min-h-screen bg-black flex items-center justify-center py-20 md:py-32 overflow-hidden">

          <div className="absolute w-[300px] md:w-[900px] h-[300px] md:h-[900px] bg-orange-500/10 rounded-full blur-[180px]"></div>

          <div className="relative z-20 w-full max-w-6xl px-6 md:px-8">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeCard}

                onClick={nextCard}

                initial={{
                  opacity: 0,
                  rotateY: 90,
                  scale: 0.8,
                }}

                animate={{
                  opacity: 1,
                  rotateY: 0,
                  scale: 1,
                }}

                exit={{
                  opacity: 0,
                  rotateY: -90,
                  scale: 0.8,
                }}

                transition={{
                  duration: 0.7,
                }}

                className="
                  relative
                  min-h-[70vh]
                  rounded-[40px]
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  overflow-hidden
                  p-8 md:p-20
                  flex flex-col justify-center
                  cursor-pointer
                "
              >

                <div className="absolute top-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-orange-500/20 blur-[120px] rounded-full"></div>

                <p className="uppercase tracking-[0.4em] text-orange-300 text-xs md:text-sm relative z-10">
                  {cards[activeCard].label}
                </p>

                <h2 className="mt-10 text-6xl md:text-9xl font-black leading-none tracking-tight relative z-10">
                  {cards[activeCard].heading}
                </h2>

                <h3 className="mt-6 text-3xl md:text-5xl font-bold text-orange-300 relative z-10">
                  {cards[activeCard].title}
                </h3>

                <p className="mt-8 text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl relative z-10">
                  {cards[activeCard].text}
                </p>

              </motion.div>

            </AnimatePresence>

          </div>

        </section>
        {/* MOVING MARQUEE */}

      <section className="relative py-10 overflow-hidden border-y border-white/10">

        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap text-4xl font-black text-orange-300 gap-20"
        >
          <span>HYDERABAD VIBES</span>
          <span>IRANI CHAI</span>
          <span>LATE NIGHT CONVERSATIONS</span>
          <span>OPEN TILL 3AM</span>
          <span>CHAI BUNK EXPERIENCE</span>
          <span>HYDERABAD VIBES</span>
          <span>IRANI CHAI</span>
          <span>LATE NIGHT CONVERSATIONS</span>
        </motion.div>

      </section>

      {/* 3D MENU SHOWCASE */}

      <section className="relative min-h-screen py-32 overflow-hidden bg-black">

        {/* Mouse Glow */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-8 md:px-16">

          {/* Heading */}

          <div className="mb-20">

            <p className="uppercase tracking-[0.4em] text-orange-300 text-sm">
              Signature Experience
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              Crafted For
              <br />
              Hyderabad Nights.
            </h2>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

            {menuItems.map((item, index) => (

              <motion.div
                key={index}

                whileHover={{
                  rotateX: 10,
                  rotateY: -10,
                  scale: 1.05,
                }}

                transition={{
                  duration: 0.4,
                }}

                className="
                  relative
                  h-[500px]
                  rounded-[40px]
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  overflow-hidden
                  group
                  cursor-pointer
                "
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-orange-500/10"></div>

                {/* Image */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <motion.img
                    whileHover={{
                      scale: 1.1,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    src={item.image}
                    alt=""
                    className="w-[80%] object-contain drop-shadow-[0_0_80px_rgba(255,140,0,0.6)]"
                  />

                </div>

                {/* Bottom Content */}

                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">

                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    Signature Hyderabad flavor crafted for late-night vibes.
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
      {/* NIGHT VIBES SECTION */}

<section className="relative min-h-screen overflow-hidden bg-black py-40">

  {/* Animated Mesh Glow */}
  <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[180px] animate-pulse"></div>

  <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-orange-400/10 rounded-full blur-[180px] animate-pulse"></div>

  {/* Floating Particles */}

  <div className="absolute inset-0 overflow-hidden">

    {[...Array(30)].map((_, index) => (

      <motion.div
        key={index}

        animate={{
          y: [0, -100, 0],
          opacity: [0.2, 1, 0.2],
        }}

        transition={{
          duration: 4 + index,
          repeat: Infinity,
        }}

        className="absolute w-2 h-2 bg-orange-400 rounded-full"

        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />

    ))}

  </div>

  {/* Main Container */}

  <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT SIDE */}

    <motion.div

      initial={{
        opacity: 0,
        x: -100,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 1,
      }}
    >

      <p className="uppercase tracking-[0.5em] text-orange-300 text-sm mb-8">
        Hyderabad Nights
      </p>

      <h2 className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tight">

        OPEN
        <br />
        TILL
        <br />
        3AM.

      </h2>

      <p className="mt-10 text-zinc-400 text-xl leading-relaxed max-w-xl">

        Chai Bunk transforms nights into conversations,
        creators into communities,
        and chai into an unforgettable Hyderabad experience.

      </p>

    </motion.div>

    {/* RIGHT SIDE */}

    <motion.div

      initial={{
        opacity: 0,
        x: 100,
      }}

      whileInView={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 1,
      }}

      className="
        relative
        h-[600px]
        rounded-[50px]
        border border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >

      {/* Moving Glow */}
      <motion.div

        animate={{
          x: [-100, 200, -100],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute
          top-0
          w-[300px]
          h-full
          bg-gradient-to-r
          from-transparent
          via-orange-400/20
          to-transparent
          skew-x-12
          blur-2xl
        "
      />

      {/* Inner Content */}

      <div className="relative z-20 text-center px-10">

        {/* Steam Effect */}

        <motion.div

          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
          }}

          className="
            absolute
            top-[-120px]
            left-1/2
            -translate-x-1/2
            w-[200px]
            h-[200px]
            bg-white/10
            rounded-full
            blur-[80px]
          "
        />

        <h3 className="text-5xl md:text-7xl font-black leading-tight">

          WHERE
          <br />
          HYDERABAD
          <br />
          STAYS
          <br />
          AWAKE.

        </h3>

        <p className="mt-8 text-zinc-400 text-lg leading-relaxed">

          Late-night chai.
          Endless conversations.
          Music, creators, students,
          and memories — all under one roof.

        </p>

      </div>

    </motion.div>

  </div>

  {/* Moving Infinite Background Line */}

  <div className="absolute bottom-10 left-0 w-full overflow-hidden">

    <motion.div

      animate={{
        x: ["0%", "-100%"],
      }}

      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}

      className="
        whitespace-nowrap
        flex
        gap-20
        text-[5rem]
        md:text-[7rem]
        font-black
        text-white/[0.03]
      "
    >

      <span>HYDERABAD NIGHTS</span>
      <span>CHAI BUNK</span>
      <span>OPEN TILL 3AM</span>
      <span>LATE NIGHT VIBES</span>
      <span>HYDERABAD NIGHTS</span>
      <span>CHAI BUNK</span>
      <span>OPEN TILL 3AM</span>

    </motion.div>

  </div>

</section>
{/* FACTS SECTION */}

<section className="relative py-40 bg-black overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-orange-500/10 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2"></div>

  {/* Infinite Background Text */}

  <div className="absolute inset-0 overflow-hidden flex items-center">

    <motion.div

      animate={{
        x: ["0%", "-100%"],
      }}

      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}

      className="
        whitespace-nowrap
        flex
        gap-20
        text-[6rem]
        md:text-[9rem]
        font-black
        text-white/[0.03]
      "
    >

      <span>CHAI BUNK</span>
      <span>HYDERABAD</span>
      <span>COMMUNITY</span>
      <span>120+ OUTLETS</span>
      <span>50K CUPS DAILY</span>
      <span>CHAI BUNK</span>
      <span>HYDERABAD</span>

    </motion.div>

  </div>

  {/* Main Content */}

  <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16">

    {/* Heading */}

    <div className="text-center mb-24">

      <p className="uppercase tracking-[0.5em] text-orange-300 text-sm">
        Chai Bunk Facts
      </p>

      <h2 className="mt-6 text-5xl md:text-8xl font-black leading-tight">

        BUILT FOR
        <br />
        HYDERABAD
        <br />
        NIGHTS.

      </h2>

    </div>

    {/* Facts Grid */}

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

      {/* FACT CARD */}

      <motion.div

        whileHover={{
          y: -10,
          rotateX: 5,
          rotateY: -5,
        }}

        className="
          relative
          rounded-[40px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          p-10
          overflow-hidden
        "
      >

        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[100px]"></div>

        <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm relative z-10">
          Founded
        </p>

        <h3 className="mt-6 text-5xl font-black text-orange-300 relative z-10">
          2021
        </h3>

        <p className="mt-4 text-zinc-400 relative z-10">
          Started in Hyderabad with a vision to redefine café culture.
        </p>

      </motion.div>

      {/* FACT CARD */}

      <motion.div

        whileHover={{
          y: -10,
          rotateX: 5,
          rotateY: -5,
        }}

        className="
          relative
          rounded-[40px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          p-10
          overflow-hidden
        "
      >

        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[100px]"></div>

        <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm relative z-10">
          Founders
        </p>

        <h3 className="mt-6 text-3xl font-black text-orange-300 relative z-10 leading-tight">
          Sandeep Bandari
          <br />
          &
          <br />
          Harikanth
          Srirangavaram
        </h3>

      </motion.div>

      {/* FACT CARD */}

      <motion.div

        whileHover={{
          y: -10,
          rotateX: 5,
          rotateY: -5,
        }}

        className="
          relative
          rounded-[40px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          p-10
          overflow-hidden
        "
      >

        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[100px]"></div>

        <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm relative z-10">
          Initial Investment
        </p>

        <h3 className="mt-6 text-5xl font-black text-orange-300 relative z-10">
          ₹50K
        </h3>

        <p className="mt-4 text-zinc-400 relative z-10">
          Started with passion, ambition, and a small investment.
        </p>

      </motion.div>

      {/* FACT CARD */}

      <motion.div

        whileHover={{
          y: -10,
          rotateX: 5,
          rotateY: -5,
        }}

        className="
          relative
          rounded-[40px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          p-10
          overflow-hidden
        "
      >

        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[100px]"></div>

        <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm relative z-10">
          Footprint
        </p>

        <h3 className="mt-6 text-5xl font-black text-orange-300 relative z-10">
          120+
        </h3>

        <p className="mt-4 text-zinc-400 relative z-10">
          Outlets spread across 6 Indian states.
        </p>

      </motion.div>

      {/* FACT CARD */}

      <motion.div

        whileHover={{
          y: -10,
          rotateX: 5,
          rotateY: -5,
        }}

        className="
          relative
          rounded-[40px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          p-10
          overflow-hidden
        "
      >

        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[100px]"></div>

        <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm relative z-10">
          Daily Joy
        </p>

        <h3 className="mt-6 text-5xl font-black text-orange-300 relative z-10">
          50K+
        </h3>

        <p className="mt-4 text-zinc-400 relative z-10">
          Cups served every single day across outlets.
        </p>

      </motion.div>

      {/* FACT CARD */}

      <motion.div

        whileHover={{
          y: -10,
          rotateX: 5,
          rotateY: -5,
        }}

        className="
          relative
          rounded-[40px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          p-10
          overflow-hidden
        "
      >

        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[100px]"></div>

        <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm relative z-10">
          Livelihoods Impacted
        </p>

        <h3 className="mt-6 text-5xl font-black text-orange-300 relative z-10">
          2,000+
        </h3>

        <p className="mt-4 text-zinc-400 relative z-10">
          Families supported through the Chai Bunk ecosystem.
        </p>

      </motion.div>

    </div>

  </div>

</section>
{/* FRANCHISE CTA SECTION */}

<section className="relative py-40 bg-black overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-orange-500/10 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2"></div>

  {/* Main Content */}

  <div className="relative z-20 max-w-6xl mx-auto px-8 md:px-16 text-center">

    <motion.p

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.8,
      }}

      className="uppercase tracking-[0.5em] text-orange-300 text-sm"
    >

      Join The Journey

    </motion.p>

    <motion.h2

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
      }}

      className="
        mt-8
        text-5xl
        md:text-8xl
        font-black
        leading-tight
      "
    >

      BUILD THE
      <br />
      NEXT CHAI
      <br />
      DESTINATION.

    </motion.h2>

    <motion.p

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1.2,
      }}

      className="
        mt-10
        text-zinc-400
        text-lg
        leading-relaxed
        max-w-3xl
        mx-auto
      "
    >

      Become part of Hyderabad’s fastest-growing café culture movement.
      Start your Chai Bunk franchise and create spaces filled with conversations,
      community, and unforgettable chai experiences.

    </motion.p>

    {/* Button */}

    <motion.button

      whileHover={{
        scale: 1.08,
      }}

      whileTap={{
        scale: 0.95,
      }}

      className="
        mt-16
        relative
        overflow-hidden
        bg-orange-400
        text-black
        px-14
        py-6
        rounded-full
        text-xl
        font-black
        shadow-[0_0_80px_rgba(255,140,0,0.5)]
        hover:shadow-[0_0_120px_rgba(255,140,0,0.9)]
        transition-all
        duration-500
      "
    >

      <span className="relative z-20">
        BOOK A FRANCHISE
      </span>

      {/* Animated Shine */}

      <motion.div

        animate={{
          x: [-200, 400],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute
          top-0
          left-0
          w-[120px]
          h-full
          bg-white/40
          blur-xl
          skew-x-12
        "
      />

    </motion.button>

  </div>

</section>

{/* PREMIUM FOOTER */}

<footer className="relative bg-black border-t border-white/10 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[180px] -translate-x-1/2"></div>

  <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 py-24">

    {/* Top Grid */}

    <div className="grid md:grid-cols-4 gap-16">

      {/* BRAND */}

      <div>

        <img
          src={logo}
          alt=""
          className="w-24 rounded-2xl"
        />

        <p className="mt-8 text-zinc-400 leading-relaxed">

          Hyderabad’s late-night chai destination
          built around conversations,
          creators, and unforgettable experiences.

        </p>

      </div>

      {/* COMPANY */}

      <div>

        <h3 className="text-xl font-bold text-orange-300">
          Company
        </h3>

        <div className="mt-8 flex flex-col gap-5 text-zinc-400">

          <a href="#" className="hover:text-orange-300 transition-all">
            About
          </a>

          <a href="#" className="hover:text-orange-300 transition-all">
            Franchise
          </a>

          

          

        </div>

      </div>

     

      {/* CONTACT */}

      <div>

        <h3 className="text-xl font-bold text-orange-300">
          Connect
        </h3>

        <div className="mt-8 flex flex-col gap-5 text-zinc-400">

          <a
  href="https://www.instagram.com/chai_bunk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-orange-300 transition-all"
>
  Instagram
</a>

          <a href="https://www.facebook.com/chaibunk1" className="hover:text-orange-300 transition-all">
            Facebook
          </a>

          <a href="https://www.linkedin.com/company/chaibunk" className="hover:text-orange-300 transition-all">
            LinkedIn
          </a>

          <Link
  to="/contact"
  className="hover:text-orange-300 transition duration-300"
>
  Contact Us
</Link>

        </div>

      </div>

    </div>

    {/* Divider */}

    <div className="mt-20 h-[1px] bg-white/10"></div>

    {/* Bottom */}

    <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">

      <p className="text-zinc-500 text-sm">
        © 2026 Chai Bunk. All rights reserved.
      </p>

      <div className="flex gap-8 text-zinc-500 text-sm">

        <a href="#" className="hover:text-orange-300 transition-all">
          Privacy Policy
        </a>

        <a href="#" className="hover:text-orange-300 transition-all">
          Terms & Conditions
        </a>

      </div>

    </div>

  </div>
        
</footer>
{/* PREMIUM HEADER */}

<header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6">

  <div
    className="
      flex
      items-center
      gap-10
      px-10
      py-5
      rounded-full
      border border-white/10
      bg-[#12071f]/80
      backdrop-blur-2xl
      shadow-[0_0_80px_rgba(168,85,247,0.15)]
    "
  >

    <a
      href="/"
      className="
        text-white
        font-semibold
        text-lg
        hover:text-orange-300
        transition-all
        duration-300
      "
    >
      Home
    </a>

    <a
      href="/about"
      className="
        text-white
        font-semibold
        text-lg
        hover:text-orange-300
        transition-all
        duration-300
      "
    >
      About
    </a>

    <a
      href="/history"
      className="
        text-white
        font-semibold
        text-lg
        hover:text-orange-300
        transition-all
        duration-300
      "
    >
      History
    </a>

    <a
      href="/franchise"
      className="
        text-white
        font-semibold
        text-lg
        hover:text-orange-300
        transition-all
        duration-300
      "
    >
      Franchise
    </a>

    <a
      href="/contact"
      className="
        text-white
        font-semibold
        text-lg
        hover:text-orange-300
        transition-all
        duration-300
      "
    >
      Contact
    </a>

  </div>

</header>

      </div>

    </>
  );
}