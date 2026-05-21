import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Loader() {

  return (

    <motion.div

      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3.5,
        duration: 1,
      }}

      className="
        fixed
        inset-0
        z-[99999]
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* Background Glow */}

      <div className="
        absolute
        w-[700px]
        h-[700px]
        bg-orange-500/20
        rounded-full
        blur-[180px]
      "></div>

      {/* Steam Effect */}

      <motion.div

        animate={{
          y: [0, -80, 0],
          opacity: [0.2, 0.7, 0.2],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
        }}

        className="
          absolute
          top-[35%]
          w-[250px]
          h-[250px]
          bg-white/10
          rounded-full
          blur-[100px]
        "
      />

      {/* Rotating Ring */}

      <motion.div

        animate={{
          rotate: 360,
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute
          w-[450px]
          h-[450px]
          border
          border-orange-500/20
          rounded-full
        "
      />

      {/* Logo */}

      <motion.img

        initial={{
          scale: 0.6,
          opacity: 0,
        }}

        animate={{
          scale: 1,
          opacity: 1,
        }}

        transition={{
          duration: 1.5,
        }}

        src={logo}

        alt="logo"

        className="
          relative
          z-20
          w-40
          rounded-[30px]
          shadow-[0_0_80px_rgba(255,140,0,0.5)]
        "
      />

      {/* Bottom Text */}

      <motion.p

        initial={{
          opacity: 0,
          y: 30,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 1,
          duration: 1,
        }}

        className="
          absolute
          bottom-28
          text-zinc-400
          tracking-[0.5em]
          uppercase
          text-sm
        "
      >

        Brewing Hyderabad Nights

      </motion.p>

    </motion.div>
  );
}