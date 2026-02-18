"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
export default function Home() {
  return (
    <main className="bg-[#fafafa] text-gray-800 scroll-smooth">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfaf6]">

        {/* Soft luxury radial lights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(198,164,108,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(75,46,31,0.15),transparent_50%)]" />

        {/* Floating luxury panel */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-10 top-32 hidden lg:block"
        >
          <div className="w-72 h-96 rounded-3xl bg-gradient-to-br from-[#c6a46c] to-[#4b2e1f] shadow-[0_40px_80px_rgba(0,0,0,0.25)] rotate-6 blur-[1px] opacity-80" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#4b2e1f] leading-tight">
            Premium Teak <br />
            <span className="text-[#c6a46c]">Wood Creations</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Where heritage craftsmanship meets modern luxury.
            Experience handcrafted teak doors, windows and decor
            designed to elevate timeless Indian architecture.
          </p><div className="mt-12 flex justify-center gap-6 flex-wrap">

  <Link
    href="/doors"
    className="px-10 py-4 rounded-full bg-[#c6a46c] text-[#4b2e1f] font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
  >
    View Collection
  </Link>

  <Link
    href="/windows"
    className="px-10 py-4 rounded-full backdrop-blur-md bg-white/40 border border-[#c6a46c]/40 text-[#4b2e1f] font-semibold shadow-lg hover:scale-105 transition-all duration-300"
  >
    Explore Designs
  </Link>

</div>

        
        </motion.div>
      </section>


     
      {/* ================= WOOD TEXTURES ================= */}
      <section className="py-24 bg-[#f5f2ee]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#4b2e1f]">
            Wood Textures & Finishes
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Natural Grain Finish",
              "Dark Walnut Stain",
              "Golden Honey Polish",
              "Matte / Satin Finish"
            ].map((item) => (
              <div key={item}>
                <h3 className="text-lg font-semibold">
                  {item}
                </h3>
                <p className="mt-2 text-gray-600">
                  Premium finish enhancing natural teak beauty.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
</main>
  )
}
    