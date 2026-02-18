"use client"

import Image from "next/image"

export default function Decor() {
  return (
    <main className="bg-white text-gray-800">

      <section className="py-20 text-center">
        <h1 className="text-5xl font-serif text-[#4b2e1f]">
          Acrylic & Premium Decor
        </h1>
        <p className="mt-6 text-gray-600">
          Luxury decorative panels and premium acrylic designs.
        </p>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} className="bg-white rounded-2xl p-5 shadow-lg">
              <div className="relative h-64">
                <Image
                  src={`/images/article-0${item}.png`}
                  alt={`Decor ${item}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}