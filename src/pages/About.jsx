import founder from "../assets/sandeep_edited.avif";
import chaiStory from "../assets/chai.avif";
import containerCafe from "../assets/Toopran.avif";
import harikanth from "../assets/harikanth chaibunk co founder.avif";

import { motion } from "framer-motion";

export default function About() {

  return (

    <div className="relative bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOWS */}

      <div className="absolute top-[-300px] left-[-300px] w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[180px]"></div>

      <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] bg-orange-400/10 rounded-full blur-[180px]"></div>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center py-40">

        <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

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

            className="relative"
          >

            <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[150px]"></div>

            <div
              className="
                relative
                rounded-[40px]
                overflow-hidden
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                p-5
              "
            >

              <img
                src={chaiStory}
                alt=""
                className="
                  w-full
                  h-[700px]
                  object-cover
                  rounded-[30px]
                "
              />

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}

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

          >

            <p className="uppercase tracking-[0.5em] text-orange-300 text-sm mb-8">
              Our Story
            </p>

            <h1
              className="
                text-5xl
                md:text-8xl
                font-black
                leading-[0.9]
                tracking-tight
              "
            >

              BREWING
              <br />
              A CHAI
              <br />
              REVOLUTION.

            </h1>

            <p
              className="
                mt-10
                text-zinc-400
                text-lg
                leading-relaxed
                max-w-2xl
              "
            >

              Chai Bunk was born in Hyderabad during one of the toughest
              periods for the café industry. While many businesses chose
              survival mode during lockdowns, Chai Bunk chose vision,
              ambition, and fearless growth.

              <br />
              <br />

              Founded by Sandeep Bandari and co-founded by Harikanth,
              the brand was built by two dreamers who walked away from
              secure high-paying careers to create something meaningful.

              <br />
              <br />

              What started as a simple chai café quickly became
              a movement powered by conversations, entrepreneurship,
              community, and unforgettable chai experiences.

            </p>

            {/* BUTTON */}

            <button
              className="
                mt-14
                bg-orange-400
                text-black
                px-10
                py-5
                rounded-full
                font-black
                tracking-wide
                hover:scale-105
                transition-all
                duration-500
                shadow-[0_0_80px_rgba(255,140,0,0.5)]
              "
            >

              APPLY FOR FRANCHISE

            </button>

          </motion.div>

        </div>

      </section>

      {/* TURNING POINT SECTION */}

      <section className="relative py-40">

        <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <motion.div

            initial={{
              opacity: 0,
              y: 100,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}

          >

            <p className="uppercase tracking-[0.5em] text-orange-300 text-sm mb-8">
              The Turning Point
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
              "
            >

              FROM ONE
              <br />
              STORE TO
              <br />
              120+ OUTLETS.

            </h2>

            <p
              className="
                mt-10
                text-zinc-400
                text-lg
                leading-relaxed
              "
            >

              Within just five months,
              Chai Bunk expanded from one store to five,
              proving that even during uncertainty,
              people always return for warmth,
              comfort, and meaningful conversations.

              <br />
              <br />

              In August 2021,
              the iconic yellow container café transformed
              the brand into a cultural phenomenon.

              <br />
              <br />

              Cozy interiors,
              Instagram-worthy spaces,
              and unforgettable chai experiences sparked
              rapid expansion across Telangana,
              Andhra Pradesh, Maharashtra,
              Karnataka, Gujarat, and Tamil Nadu.

            </p>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 1,
            }}

            className="relative"
          >

            <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[150px]"></div>

            <div
              className="
                relative
                rounded-[40px]
                overflow-hidden
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                p-5
              "
            >

              <img
                src={containerCafe}
                alt=""
                className="
                  w-full
                  h-[650px]
                  object-cover
                  rounded-[30px]
                "
              />

            </div>

          </motion.div>

        </div>

      </section>

      {/* FOUNDERS */}

      <section className="relative py-40">

        <div className="max-w-7xl mx-auto px-8 md:px-16">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.5em] text-orange-300 text-sm">
              Founders
            </p>

            <h2
              className="
                mt-8
                text-5xl
                md:text-8xl
                font-black
                leading-tight
              "
            >

              BUILT WITH
              <br />
              VISION &
              <br />
              PURPOSE.

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-14">

            {/* FOUNDER CARD */}

            <motion.div

              whileHover={{
                y: -10,
              }}

              className="
                relative
                rounded-[40px]
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                overflow-hidden
                p-6
              "
            >

              <img
                src={founder}
                alt=""
                className="
                  w-full
                  h-[500px]
                  object-cover
                  rounded-[30px]
                "
              />

              <div className="mt-8">

                <p className="uppercase tracking-[0.4em] text-orange-300 text-sm">
                  Founder
                </p>

                <h3 className="mt-4 text-4xl font-black">
                  SANDEEP BANDARI
                </h3>

                <p className="mt-6 text-zinc-400 leading-relaxed">

                  To empower people with employment
                  and entrepreneurship opportunities.

                  <br />
                  <br />

                  Every cup served at Chai Bunk carries
                  warmth, ambition, and the dream of creating
                  meaningful opportunities for thousands.

                </p>

              </div>

            </motion.div>

            {/* CO FOUNDER */}

            <motion.div

              whileHover={{
                y: -10,
              }}

              className="
                relative
                rounded-[40px]
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                overflow-hidden
                p-6
              "
            >

              <img
                src={harikanth}
                alt=""
                className="
                  w-full
                  h-[500px]
                  object-cover
                  rounded-[30px]
                "
              />

              <div className="mt-8">

                <p className="uppercase tracking-[0.4em] text-orange-300 text-sm">
                  Co-Founder
                </p>

                <h3 className="mt-4 text-4xl font-black">
                  HARIKANTH
                </h3>

                <p className="mt-6 text-zinc-400 leading-relaxed">

                  Our mission is to serve high-quality tea
                  and snacks at affordable prices in warm,
                  welcoming spaces that bring people together.

                  <br />
                  <br />

                  Chai Bunk represents comfort,
                  conversations,
                  community,
                  and unforgettable Hyderabad nights.

                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* WHY CHAI BUNK */}

      <section className="relative py-40">

        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">

          <p className="uppercase tracking-[0.5em] text-orange-300 text-sm">
            Why Chai Bunk
          </p>

          <h2
            className="
              mt-8
              text-5xl
              md:text-8xl
              font-black
              leading-tight
            "
          >

            MORE THAN
            <br />
            JUST A
            <br />
            CHAI CAFÉ.

          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-24">

            {/* CARD */}

            <div
              className="
                rounded-[40px]
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                p-10
              "
            >

              <h3 className="text-4xl font-black text-orange-300">
                Great
                <br />
                Ambience
              </h3>

              <p className="mt-6 text-zinc-400 leading-relaxed">

                Cozy spaces designed for conversations,
                creativity, productivity,
                and peaceful chai breaks.

              </p>

            </div>

            {/* CARD */}

            <div
              className="
                rounded-[40px]
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                p-10
              "
            >

              <h3 className="text-4xl font-black text-orange-300">
                Great
                <br />
                Chai
              </h3>

              <p className="mt-6 text-zinc-400 leading-relaxed">

                Specialty teas brewed with authenticity,
                warmth, and unforgettable flavor.

              </p>

            </div>

            {/* CARD */}

            <div
              className="
                rounded-[40px]
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                p-10
              "
            >

              <h3 className="text-4xl font-black text-orange-300">
                Great
                <br />
                Value
              </h3>

              <p className="mt-6 text-zinc-400 leading-relaxed">

                Premium quality experiences at affordable prices
                for chai lovers across India.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
