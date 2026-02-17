"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <a
              href="#doors"
              className="px-10 py-4 rounded-full bg-[#c6a46c] text-[#4b2e1f] font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Collection
            </a>

            <a
              href="#decor"
              className="px-10 py-4 rounded-full backdrop-blur-md bg-white/40 border border-[#c6a46c]/40 text-[#4b2e1f] font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Explore Designs
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= DOOR DESIGN STYLES ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Door Design Styles
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Classic Teak Entrance Doors",
                desc: "Rich golden brown finish with deep wood grains. Perfect for heritage homes."
              },
              {
                title: "Modern Minimalist Doors",
                desc: "Clean lines and matte finish ideal for contemporary interiors."
              },
              {
                title: "Panel & Groove Doors",
                desc: "Multi-layered geometric panels adding strong visual depth."
              },
              {
                title: "Carved Decorative Doors",
                desc: "Intricate handcrafted carvings for luxury villas."
              }
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DOORS GALLERY ================= */}
      <section id="doors" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-[#4b2e1f] mb-16">
            Teak Doors Gallery
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-500"
              >
                <div className="relative h-80">
                  <Image
                    src={`/door/door-0${item}.png`}
                    alt={`Door ${item}`}
                    fill
                    className="object-contain group-hover:scale-110 transition duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
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

      {/* ================= WINDOWS GALLERY ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Teak Windows Collection
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[1,2,3,4,5,6,7,8,9].map((item) => (
              <div
                key={item}
                className="group bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
              >
                <div className="relative h-72">
                  <Image
                    src={`/windows/window-0${item}.png`}
                    alt={`Window ${item}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DECOR ================= */}
      <section id="decor" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-[#4b2e1f] mb-16">
            Acrylic Home Decor Collection
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[1,2,3,4,5,6].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-2xl p-5 shadow-lg hover:scale-105 transition duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={`/images/article-0${item}.png`}
                    alt={`Decor ${item}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="mt-4 font-serif text-lg text-[#4b2e1f]">
                  Premium Decorative Panel
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}