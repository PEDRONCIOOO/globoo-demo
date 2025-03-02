"use client";

import { motion } from "framer-motion";
import CircularText from "@/components/ui/CircularText/CircularText";
import Squares from "@/components/ui/Squares/Squares";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FeaturesTab, AnimationLogo } from "@/components/config/features";
import { DotLottiePlayer } from "@dotlottie/react-player";

export default function ContainerOne() {
  return (
    <div className="relative h-[130vh] sm:pt-0 sm:h-screen w-full overflow-hidden bg-[#000000cb] flex items-center px-6 md:px-12">
      {/* Background Animated Squares (Now Full-Screen) */}
      <div className="absolute inset-0 -z-10 bg-[#41A8B0] dark:bg-black">
        <Squares
          speed={0.2}
          squareSize={20}
          direction="diagonal"
          borderColor="#24e0f127"
          hoverFillColor="#222"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto h-full flex flex-col md:flex-row items-center justify-center relative z-10 sm:justify-evenly">
        {/* Left: Logo + Circular Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center md:justify-start mb-5 mt-10 md:mb-0"
        >
          <div className="relative flex items-center justify-center">
            {/* Logo */}
            {AnimationLogo.map(({ animation }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <motion.div
                    className="w-[180px] mt-1 sm:w-full"
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      mass: 1,
                    }}
                  >
                    <DotLottiePlayer autoplay loop className="direction-alternate-reverse" src={animation} />
                  </motion.div>
                </div>
              ))}
            {/* Circular Text */}
            <CircularText
              text="GLOBOO*CRYPTO*COINS*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute inset-0 text-sm md:text-lg -ml-2 sm:mt-0 sm:-ml-0 sm:scale-75 sm:left-7/12"
            />
          </div>
        </motion.div>

        {/* Right: Animated Text & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center md:items-start text-white text-center md:text-left max-w-lg gap-1.5"
        >
          {/* Heading */}
          <motion.h1
            className="text-[#41A8B0] text-sm md:text-3xl font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Facilidade e segurança.
          </motion.h1>

          {/* Main Title */}
          <motion.h2
            className="text-[1.3rem] md:text-5xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Tudo em um <span className="text-[#41A8B0]">só lugar:</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-sm md:text-xl mt-2 text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="text-[#41A8B0] font-semibold">Carteira</span> criptográfica e{" "}
            <span className="text-[#41A8B0] font-semibold">banco digital</span>
          </motion.p>

          {/* Features Tab */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl">
              {FeaturesTab.map(({ icon, title }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <motion.div
                    className="w-16 h-16 border border-[#24E0F1] rounded-full mb-4 flex items-center justify-center"
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      mass: 1,
                    }}
                  >
                    <DotLottiePlayer autoplay loop className="size-8" src={icon} />
                  </motion.div>
                  <h3 className="text-sm font-bold">{title}</h3>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6 flex gap-2 sm:gap-3"
          >
            <Button
              variant="outline"
              className="px-6 py-3 text-black dark:text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer transition"
            >
              <Download /> Baixe o App
            </Button>

            <Button
              variant="outline"
              className="px-6 py-3 text-black dark:text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer transition"
            >
              Abrir conta
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
