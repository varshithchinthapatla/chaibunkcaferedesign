import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const historyData = [
  {
    year: "2021",
    title: "The Genesis & Lockdown Pivot",
    content:
      "Sandeep Bandari and Harikanth launched Chai Bunk during the COVID-19 pandemic with just ₹50,000 savings. Starting from a small outlet near Kompally, Hyderabad, the brand quickly gained popularity through quality chai and customer trust.",
  },

  {
    year: "2021",
    title: "The Yellow Container Revolution",
    content:
      "Chai Bunk introduced its iconic Yellow Container Café model which became a viral hangout spot for students, youngsters, and chai lovers across Hyderabad.",
  },

  {
    year: "2022",
    title: "Expansion Beyond Telangana",
    content:
      "Chai Bunk expanded into Andhra Pradesh and strategically acquired Chai Bandi along with its 13 stores, strengthening its regional presence and operations.",
  },

  {
    year: "2023",
    title: "Corporate Growth",
    content:
      "Sanahaya Food & Beverages Private Limited was officially incorporated to support rapid expansion and franchise operations across South India.",
  },

  {
    year: "2024 - 2025",
    title: "120+ Outlets Across India",
    content:
      "Chai Bunk achieved over 120+ active outlets across 6 states while serving 50,000+ cups of chai daily and creating employment opportunities for thousands of families.",
  },

  {
    year: "2026",
    title: "South India’s Fastest Growing Chai Franchise",
    content:
      "Chai Bunk became one of South India’s leading zero-royalty franchise models with high ROI opportunities for entrepreneurs.",
  },
];

function HistoryTimeline() {

  const { scrollYProgress } = useScroll();

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (

    <div className="relative bg-black min-h-screen text-white px-6 md:px-20 py-24 overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-500/10 blur-[200px] rounded-full"></div>

      {/* HERO */}

      <div className="relative z-20 text-center mb-32">

        <motion.h1

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
            text-5xl
            md:text-8xl
            font-black
            text-yellow-400
            tracking-tight
          "
        >

          OUR
          <br />
          HISTORY

        </motion.h1>

        <motion.p

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          transition={{
            delay: 0.4,
          }}

          className="
            mt-8
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-3xl
            mx-auto
          "
        >

          From a single chai outlet during lockdown
          to one of India’s fastest-growing chai franchise brands.

        </motion.p>

      </div>

      {/* TIMELINE SECTION */}

      <div className="relative max-w-6xl mx-auto">

        {/* STATIC LINE */}

        <div className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[2px]
          h-full
          bg-white/10
        "></div>

        {/* ANIMATED LINE */}

        <motion.div

          style={{
            height: lineHeight,
          }}

          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-[4px]
            bg-gradient-to-b
            from-yellow-300
            via-orange-400
            to-yellow-500
            rounded-full
            shadow-[0_0_40px_rgba(255,200,0,0.9)]
            origin-top
          "
        />

        {/* TIMELINE ITEMS */}

        <div className="relative z-20 flex flex-col gap-32">

          {historyData.map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 100,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
              }}

              className={`
                relative
                flex
                flex-col
                md:flex-row
                items-center
                gap-10
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
              `}
            >

              {/* DOT */}

              <div className="
                absolute
                left-1/2
                -translate-x-1/2
                w-8
                h-8
                rounded-full
                bg-yellow-400
                border-4
                border-black
                shadow-[0_0_30px_rgba(255,200,0,0.9)]
                z-30
              "></div>

              {/* EMPTY SIDE */}

              <div className="hidden md:block md:w-1/2"></div>

              {/* CARD */}

              <motion.div

                whileHover={{
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: -5,
                }}

                className="
                  relative
                  w-full
                  md:w-1/2
                  rounded-[40px]
                  border
                  border-yellow-500/20
                  bg-white/[0.04]
                  backdrop-blur-3xl
                  p-10
                  overflow-hidden
                  shadow-2xl
                "
              >

                {/* CARD GLOW */}

                <div className="
                  absolute
                  top-0
                  right-0
                  w-[250px]
                  h-[250px]
                  bg-yellow-500/10
                  rounded-full
                  blur-[100px]
                "></div>

                {/* YEAR */}

                <p className="
                  uppercase
                  tracking-[0.4em]
                  text-yellow-300
                  text-sm
                  relative
                  z-10
                ">
                  {item.year}
                </p>

                {/* TITLE */}

                <h2 className="
                  mt-6
                  text-3xl
                  md:text-5xl
                  font-black
                  leading-tight
                  relative
                  z-10
                ">
                  {item.title}
                </h2>

                {/* CONTENT */}

                <p className="
                  mt-8
                  text-zinc-400
                  leading-relaxed
                  text-lg
                  relative
                  z-10
                ">
                  {item.content}
                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* END SECTION */}

      <motion.div

        initial={{
          opacity: 0,
          y: 80,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        className="mt-40 text-center"
      >

        <h2 className="
          text-5xl
          md:text-7xl
          font-black
          text-yellow-400
        ">

          THE JOURNEY
          <br />
          CONTINUES.

        </h2>

        <p className="
          mt-10
          text-zinc-400
          text-lg
          leading-relaxed
          max-w-4xl
          mx-auto
        ">

          Chai Bunk is more than chai.
          It is a movement built on entrepreneurship,
          community, innovation,
          and unforgettable experiences.

        </p>

      </motion.div>

    </div>
  );
}

export default HistoryTimeline;