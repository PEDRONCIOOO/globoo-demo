"use client";

import { AnimationCont2 } from "@/components/config/features";
import { motion } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Particles from "@/components/ui/Particles/Particles";

export default function ContainerTwo() {
  // Define animation variants for reveal effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger children animations
        delayChildren: 0.2,   // Delay before children animate
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="w-full h-[30vh] absolute mt-30 opacity-50 z-5">
        <Particles
          className="w-full"
          particleColors={["#41A8B0", "#41A8B0"]}
          particleCount={200}
          particleSpread={30}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative flex items-center justify-center w-full text-white dark:bg-black">
        {/* Background Animated Squares - No animation needed here to avoid interference with Particles */}

        {/* Hero Content with Animation */}
        <motion.div
          className="flex flex-col-reverse sm:flex-row items-center justify-center text-center sm:ml-7 px-6 max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger only once when in view, with a 20% threshold
        >
          <motion.div
            className="flex flex-col gap-1.5 text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-[#0febff] text-sm md:text-3xl font-semibold"
              variants={itemVariants}
            >
              Conheça a nossa plataforma
            </motion.h1>
            <motion.h2
              className="text-[1.3rem] md:text-5xl font-extrabold text-black dark:text-white leading-tight"
              variants={itemVariants}
            >
              E os seus <span className="text-[#0febff]">Benefícios</span>!
            </motion.h2>
            <motion.p
              className="mt-4 mb-4 text-sm md:text-[16px] max-w-2xl text-black dark:text-gray-300"
              variants={itemVariants}
            >
              Trata-se de uma plataforma, onde qualquer investidor, de
              indivíduos a instituições, podem comprar e vender ativos digitais
              e criptomoedas em um ambiente confiável, regulamentado e de alta
              liquidez. Uma troca, que é capaz de suportar todas as condições do
              mercado. Aproveitando a tecnologia mais poderosa disponível, para
              oferecer uma experiência robusta, livre de falhas e segura. Uma
              bolsa onde os investidores podem negociar com confiança.
            </motion.p>
          </motion.div>

          {/* Animation with Motion */}
          {AnimationCont2.map(({ animation }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.div
                className="w-[180px] sm:w-full"
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 1,
                }}
              >
                <DotLottiePlayer
                  autoplay
                  loop
                  className="direction-alternate-reverse"
                  src={animation}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}