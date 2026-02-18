"use client"

import Image from "next/image"

export default function Doors() {
  return (
    <main className="bg-white text-gray-800">

      <section className="py-20 text-center">
        <h1 className="text-5xl font-serif text-[#4b2e1f]">
          Door Design Styles
        </h1>
        <p className="mt-6 text-gray-600">
          Handcrafted teak doors combining durability and luxury.
        </p>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[1,2,3,4,5,6,7,8].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={`/door/door-0${item}.png`}
                  alt={`Door ${item}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}