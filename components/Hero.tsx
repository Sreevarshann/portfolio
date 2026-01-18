'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center
        pt-20 pb-14 overflow-hidden
        bg-gradient-to-r from-white via-white to-sky-300
      "
    >
      {/* Right-side blue fade (≈40%) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-sky-300/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-[65%_35%] gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div className="max-w-none">
          {/* MAIN QUOTE */}
          <h1
            className="
              text-[2rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.6rem]
              leading-snug font-medium text-black
            "
          >
            Architecting the backbone of modern intelligence. I help teams{' '}
            <motion.span
              initial={{ backgroundSize: '0% 0.85em' }}
              animate={{ backgroundSize: '100% 0.85em' }}
              transition={{
                duration: 1.6,        // ⬅️ slower, reading-paced
                delay: 0.6,           // ⬅️ starts after user begins reading
                ease: [0.25, 1, 0.4, 1],
              }}
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(186,230,253,0.45), rgba(186,230,253,0.45))', // ⬅️ softer intensity
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 72%',
              }}
              className="
                inline
                [box-decoration-break:clone]
                px-2 py-0.5
                rounded-full
              "
            >
              design, build, and scale the data and AI infrastructure
            </motion.span>{' '}
            required to solve real-world problems at production grade.
          </h1>

          {/* SUB-LINE */}
          <p className="mt-6 text-lg text-black/70">
            Engineering software with purpose. Delivering intelligence with impact.
          </p>

          {/* ACCENT DIVIDER */}
          <div className="mt-5 flex h-[4px] w-full max-w-2xl overflow-hidden rounded">
            <span className="w-1/4 bg-blue-600" />
            <span className="w-1/4 bg-emerald-500" />
            <span className="w-1/4 bg-orange-400" />
            <span className="w-1/4 bg-yellow-400" />
          </div>

          {/* META INFO */}
          <div className="mt-6 space-y-2 text-lg">
            <p className="font-semibold text-black text-xl">
              Incoming Software Engineering Intern @ RightRev ↗
            </p>

            <p className="text-black/75">
              Software Engineering • AI / ML • Data Science • MLOps
            </p>

            <p className="inline-block font-semibold text-black bg-black/5 px-3 py-1 rounded-md">
              Boston, Massachusetts
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE TILE */}
        <div className="relative hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -6, y: 20 }}
            animate={{ opacity: 1, rotate: -6, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              w-[300px] h-[300px]
              bg-white rounded-2xl
              shadow-2xl border border-black/10
              flex items-center justify-center
            "
          >
            <span className="text-black/40 text-sm">Image Placeholder</span>
          </motion.div>

          <div className="pointer-events-none absolute -inset-8 -z-10 bg-white/40 blur-2xl" />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 right-10 flex items-center gap-2 text-sm text-black/60">
        <span>Scroll</span>
        <span className="text-lg">↓</span>
      </div>
    </section>
  )
}
