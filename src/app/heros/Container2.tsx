"use client";

import { AnimationCont2 } from "@/components/config/features";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";

export default function ContainerTwo() {
  return (
    <div className="relative flex items-center justify-center w-full text-white">
      {/* Background Animated Squares */}

      {/* Hero Content */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center text-center px-6 max-w-6xl">
        <div className="flex flex-col gap-1.5 text-left">
            <h1 className="text-[#41A8B0] text-sm md:text-3xl font-semibold">Conheça a nossa plataforma</h1>
            <h2 className="text-[1.3rem] md:text-5xl font-extrabold text-white leading-tight">
            E os seus <span className="text-[#41A8B0]">Benefícios</span>!
            </h2>
            <p className="mt-4 mb-4 text-sm md:text-[16px] max-w-2xl text-gray-300">
            Trata-se de uma plataforma, onde qualquer investidor, de indivíduos a instituições, podem comprar e vender ativos digitais e criptomoedas em um ambiente confiável, regulamentado e de alta liquidez. Uma troca, que é capaz de suportar todas as condições do mercado. Aproveitando a tecnologia mais poderosa disponível, para oferecer uma experiência robusta, livre de falhas e segura. Uma bolsa onde os investidores podem negociar com confiança.
            </p>
            <Button variant="outline" className="w-fit px-6 py-3 text-black dark:text-white rounded-full text-sm font-semibold shadow-lg cursor-pointer transition">
              Abrir conta
            </Button>
        </div>

        {/* Animation */}
      {AnimationCont2.map(({ animation }, index) => (
        <div key={index} className="flex flex-col items-center">
        <motion.div
          className="w-[180px]  sm:w-full"
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
      </div>
    </div>
  );
}
