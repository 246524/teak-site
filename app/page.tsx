"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-[#fafafa] text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfaf6]">

        {/* Soft Radial Lights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(198,164,108,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(75,46,31,0.15),transparent_50%)]" />

        {/* Floating Decorative Panel */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-10 top-32 hidden lg:block"
        >
          <div className="w-72 h-96 rounded-3xl bg-gradient-to-br from-[#c6a46c] to-[#4b2e1f] shadow-[0_40px_80px_rgba(0,0,0,0.25)] rotate-6 opacity-80" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#4b2e1f] leading-tight">
            Premium Teak <br />
            <span className="text-[#c6a46c]">Wood Creations</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Where heritage craftsmanship meets modern luxury.
            Experience handcrafted teak doors, windows and decor
            designed to elevate timeless Indian architecture.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex justify-center gap-6 flex-wrap">

            <Link
              href="/doors"
              className="px-10 py-4 rounded-full bg-[#c6a46c] text-[#4b2e1f] font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Doors
            </Link>

            <Link
              href="/windows"
              className="px-10 py-4 rounded-full bg-white border border-[#4b2e1f]/20 text-[#4b2e1f] font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Explore Windows
            </Link>

            <Link
              href="/decor"
              className="px-10 py-4 rounded-full bg-[#4b2e1f] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Decor
            </Link>

          </div>
        </motion.div>
      </section>


      {/* ================= WOOD TEXTURE PREVIEW ================= */}
      <section className="py-24 bg-[#f5f2ee]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-serif text-[#4b2e1f] mb-10">
            Wood Textures & Finishes
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mb-16">
            Our teak wood is known for its natural oil content, dense grain,
            and unmatched durability. Each finish enhances the depth, warmth,
            and richness of the material.
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            {[
              "Natural Grain Finish",
              "Dark Walnut Stain",
              "Golden Honey Polish",
              "Matte / Satin Finish",
            ].map((item) => (
              <div key={item}>
                <h3 className="text-lg font-semibold text-[#4b2e1f]">
                  {item}
                </h3>
                <p className="mt-3 text-gray-600">
                  Premium finishing technique designed to enhance the elegance and strength of teak wood.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= FEATURE HIGHLIGHT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-serif text-[#4b2e1f] mb-6">
              Why Choose Teak Wood?
            </h2>

            <p className="text-gray-600 mb-6">
              Teak wood is naturally resistant to termites, moisture,
              and environmental damage. Its strength and timeless texture
              make it the preferred choice for luxury homes.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ High Durability</li>
              <li>✔ Termite & Moisture Resistant</li>
              <li>✔ Low Maintenance</li>
              <li>✔ Long Lifespan</li>
            </ul>
          </div>

          <div className="relative h-96">
            <Image
              src="/door/door-01.png"
              alt="Premium Teak Wood"
              fill
              className="object-contain rounded-2xl"
            />
          </div>

        </div>
      </section>

    </main>
  )
}