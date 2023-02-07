import * as React from "react"
import { Link } from "gatsby"

import heroVideo from "../assets/heroVideo.mp4"

const Hero = () => (
  <section class="min-h-96 max-w-screen-2xl mx-auto  flex justify-center items-center flex-1 shrink-0 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-56 mb-6">
    <video
      class="w-full h-full object-cover object-center absolute inset-0"
      src={heroVideo}
      type="video/mp4"
      autoPlay
      muted
      loop
    />

    <div class=" bg-amber-300 mix-blend-multiply absolute inset-0"></div>

    <div class="sm:max-w-xl lg:max-w-4xl flex flex-col items-center relative p-4">
      <h2 class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 md:mb-12">
        Stwórz swoją wizytówkę w internecie z nami!
      </h2>

      <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
        <Link
          to="/pomoc"
          class="inline-block bg-gradient-to-tr hover:text-amber-900 from-orange-300 to-orange-600  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-0 transition duration-200  hover:scale-105 px-8 py-3"
        >
          Wiecej Informacji
        </Link>

        <Link
          to="/portfolio"
          class="inline-block bg-gradient-to-tr from-gray-50 via-white to-amber-100 hover:scale-105 hover:text-amber-600 focus-visible:ring text-black active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200 px-8 py-3"
        >
          Nasze Strony
        </Link>
      </div>
    </div>
  </section>
)

export default Hero
