'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export default function DashboardSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isHoveringTestimonial, setIsHoveringTestimonial] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(false)
  const [hoveredPrimary, setHoveredPrimary] = useState(false)

  const testimonials = useMemo(
    () => [
      {
        text: 'Sreevarshan demonstrates strong ownership and reliable execution. His work on data pipelines and ML systems consistently exceeds expectations.',
        author: 'Dr. Sarah Chen',
        role: 'Professor, Northeastern University',
      },
      {
        text: 'Quick learner with excellent communication skills. He bridges the gap between technical complexity and business value seamlessly.',
        author: 'Rajesh Kumar',
        role: 'Data Science Lead, Flare Innovation',
      },
      {
        text: 'His ability to design and implement production-grade AI systems is impressive. A true problem solver who thinks end-to-end.',
        author: 'Michael Torres',
        role: 'Engineering Manager',
      },
      {
        text: 'Sreevarshan brought clarity and structure to our data infrastructure. His analytical thinking and attention to detail are exceptional.',
        author: 'Priya Sharma',
        role: 'Project Mentor, SAUVC',
      },
    ],
    []
  )

  useEffect(() => {
    if (isHoveringTestimonial) return
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [isHoveringTestimonial, testimonials.length])

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)

  const prevTestimonial = () =>
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const roles = [
    { title: 'Software Engineer', dot: 'bg-blue-500' },
    { title: 'AI/ML Builder', dot: 'bg-green-500' },
    { title: 'Data Engineer', dot: 'bg-orange-500' },
    { title: 'Problem Solver', dot: 'bg-yellow-500' },
  ]

  return (
    <section className="relative overflow-hidden py-10 md:py-10">
      {/* subtle page bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-sky-100/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* ✅ Removed outer dashboard border/frame — tiles only */}
        <div>
          {/* BENTO GRID: (UNCHANGED layout) */}
          <div
            className="
              grid grid-cols-1 gap-3 md:gap-4
              md:grid-cols-12
              md:[grid-template-rows:clamp(210px,26vh,260px)_clamp(170px,22vh,220px)_clamp(190px,24vh,240px)]
            "
          >
{/* TOP ROW — LEFT (PRIMARY / ROLES) */}
<motion.div
  initial={{ opacity: 0, y: 14 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45 }}
  onMouseEnter={() => setHoveredPrimary(true)}
  onMouseLeave={() => setHoveredPrimary(false)}
  className="
    relative overflow-hidden
    bg-white rounded-2xl border border-black/10
    shadow-lg p-6 md:p-7
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300
    md:col-span-8 md:row-start-1
  "
>
  {/* ✅ Corner bloom — behind everything */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: hoveredPrimary ? 1 : 0 }}
    transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
    className="absolute inset-0 pointer-events-none z-0"
    style={{
      background: `
        radial-gradient(
          320px 260px at 100% 100%,
          rgba(194, 65, 12, 0.70) 0%,
          rgba(194, 65, 12, 0.42) 32%,
          rgba(194, 65, 12, 0.18) 55%,
          transparent 72%
        )
      `,
    }}
  />

  {/* ✅ Content above bloom */}
  <div className="relative z-10 h-full flex flex-col">
    <div className="space-y-1 md:space-y-1.5">
      {roles.map((role, index) => (
        <div key={index} className="flex items-center gap-2">
          <h2 className="text-[26px] sm:text-[20px] md:text-[24px] lg:text-[34px] leading-[1.1] font-bold text-black">
            {role.title}
          </h2>
          <motion.div
            animate={{ x: hoveredPrimary ? 6 : 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 ${role.dot} rounded-full`}
          />
        </div>
      ))}
    </div>

    {/* ✅ Incoming pill stays top-right AND above bloom */}
    <div className="absolute top-4 right-4 md:top-1 md:right-2 z-20">
      <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/70 backdrop-blur border border-black/10 rounded-full">
        <span className="text-[11px] md:text-xs font-semibold text-black">
          Incoming Software Engineering Intern @ RightRev
        </span>
      </div>
    </div>
  </div>
</motion.div>


                {/* TOP ROW — RIGHT (AWARDS) */}
<motion.div
  initial={{ opacity: 0, y: 14 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45, delay: 0.05 }}
  className="
    bg-white rounded-2xl border border-black/10
    shadow-lg p-5
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300
    md:col-span-4 md:row-start-1
  "
>
  <h3 className="text-lg md:text-xl font-bold text-black mb-1.5">
    Awards
  </h3>

  <p className="text-gray-600 mb-3 text-xs md:text-sm">
    I thrive in fast-paced problem solving.
  </p>

  <ul className="space-y-4">
    {/* Award item 1 */}
    <li className="group flex items-start gap-4 cursor-default">
      {/* expanding strip */}
      <span
        className="
          h-5 w-[4px] bg-orange-400 rounded-full
          transition-all duration-300
          group-hover:w-6
        "
      />
      <span className="text-sm md:text-base text-black">
        Best Hack, BrickHack 2025
      </span>
    </li>

    {/* Award item 2 */}
    <li className="group flex items-start gap-4 cursor-default">
      <span
        className="
          h-5 w-[4px] bg-emerald-500 rounded-full
          transition-all duration-300
          group-hover:w-6
        "
      />
      <span className="text-sm md:text-base text-black">
        Best Sustainability Hack, BrickHack 2024
      </span>
    </li>

    {/* Award item 3 */}
    <li className="group flex items-start gap-4 cursor-default">
      <span
        className="
          h-5 w-[4px] bg-blue-500 rounded-full
          transition-all duration-300
          group-hover:w-6
        "
      />
      <span className="text-sm md:text-base text-black">
        6th Worldwide, SAUVC
      </span>
    </li>
  </ul>
</motion.div>


            {/* MIDDLE — LEFT (TALL TILE: TESTIMONIALS) */}
            <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                onMouseEnter={() => setIsHoveringTestimonial(true)}
                onMouseLeave={() => setIsHoveringTestimonial(false)}
                className="
                    bg-white rounded-2xl border border-black/10
                    shadow-lg p-5 md:p-6
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                    md:col-span-4 md:row-start-2 md:row-span-2
                "
                >
                <div className="h-full min-h-0 flex flex-col">
                    {/* centered heading */}
                    <h3 className="text-lg md:text-xl font-bold text-black text-center mb-3">
                    What people I’ve worked with say.
                    </h3>

                    {/* ✅ inner DARK testimonial box (dark gray bg + white text) */}
                    <div className="relative flex-1 min-h-0 overflow-hidden rounded-2xl bg-[#2f2f2f] border border-white/10 p-4 md:p-5 text-white">
                    {/* subtle top accent */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[6px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                    <AnimatePresence mode="wait">
                        <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.9, 0.2, 1] }}
                        className="h-full flex flex-col justify-between"
                        >
                        {/* header row: avatar + name/role */}
                        <div className="flex items-start gap-3">
                            {/* photo tile (placeholder) */}
                            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 shadow-sm flex items-center justify-center overflow-hidden">
                            <div className="w-8 h-8 rounded-full bg-white/15" />
                            </div>

                            <div className="min-w-0">
                            <p className="text-base md:text-lg font-semibold text-white leading-tight truncate">
                                {testimonials[currentTestimonial].author}
                            </p>
                            <p className="text-sm text-white/70 leading-tight">
                                {testimonials[currentTestimonial].role}
                            </p>
                            </div>
                        </div>

                        {/* quote block */}
                        <div className="mt-4 flex-1 min-h-0">
                            <div className="text-white/25 text-5xl leading-none select-none">“</div>
                            <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-white/85">
                            {testimonials[currentTestimonial].text}
                            </p>
                        </div>

                        {/* footer: progress + controls */}
                        <div className="mt-4 flex items-center justify-between gap-3">
                            {/* dots */}
                            <div className="flex items-center gap-1.5">
                            {testimonials.map((_, i) => (
                                <button
                                key={i}
                                onClick={() => setCurrentTestimonial(i)}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                    i === currentTestimonial ? 'bg-white w-10' : 'bg-white/25 w-2'
                                }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                            </div>

                            {/* next/prev (inside box, subtle) */}
                            <div className="flex items-center gap-1.5">
                            <button
                                onClick={prevTestimonial}
                                aria-label="Previous testimonial"
                                className="w-8 h-8 rounded-full bg-white/10 border border-white/10 shadow-sm hover:bg-white/15 transition-colors flex items-center justify-center"
                            >
                                <ChevronLeft className="w-4 h-4 text-white/80" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                aria-label="Next testimonial"
                                className="w-8 h-8 rounded-full bg-white/10 border border-white/10 shadow-sm hover:bg-white/15 transition-colors flex items-center justify-center"
                            >
                                <ChevronRight className="w-4 h-4 text-white/80" />
                            </button>
                            </div>
                        </div>

                        {/* small hover hint */}
                        <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{
                            opacity: isHoveringTestimonial ? 1 : 0,
                            y: isHoveringTestimonial ? 0 : 6,
                            }}
                            transition={{ duration: 0.2 }}
                            className="mt-3 text-[11px] text-white/55 text-center"
                        >
                            Paused on hover
                        </motion.div>
                        </motion.div>
                    </AnimatePresence>
                    </div>
                </div>
            </motion.div>



            {/* MIDDLE — CENTER (SHORT TILE: STAT) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="
                bg-white rounded-2xl border border-black/10
                shadow-lg p-5
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                md:col-span-4 md:row-start-2
                flex items-center
              "
            >
              <div className="flex items-baseline gap-3">
                <div className="text-4xl md:text-5xl font-bold text-black">2+</div>
                <p className="text-sm md:text-base text-gray-700">
                  years building software & ML systems
                </p>
              </div>
            </motion.div>

{/* MIDDLE — RIGHT (MEDIUM TILE: EDUCATION) */}
<motion.div
  initial={{ opacity: 0, y: 14 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45, delay: 0.2 }}
  className="
    group
    bg-white rounded-2xl border border-black/10
    shadow-lg p-5
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300
    md:col-span-4 md:row-start-2
    overflow-hidden
  "
>

  {/* Title */}
  <h3 className="text-[24px] md:text-[24px] font-semibold text-black mb-5 leading-tight">
    I hold 2 degrees,
  </h3>

  <div className="space-y-2">
    {/* Degree 1 */}
    <div className="flex items-start justify-between gap-3">
      {/* left strip + text */}
      <div className="flex items-start gap-3 min-w-0 flex-1">
        <span className="mt-1 h-9 w-[5px] rounded-full bg-orange-400 flex-shrink-0" />
        <div className="min-w-0">
          <p className="text-[15px] md:text-[14px] font-bold text-black leading-snug truncate">
            MS Data Analytics Engineering
          </p>
          <p className="text-[13px] md:text-[14px] text-black/70 leading-snug truncate">
            Northeastern University
          </p>
        </div>
      </div>

      {/* logo tile */}
      <div className="flex-shrink-0">
        <div
            className="
                w-11 h-11 md:w-12 md:h-12 rounded-2xl
                bg-white shadow-sm
                flex items-center justify-center
                transition-transform duration-300 ease-out
                group-hover:scale-[1.34]
                origin-center
            "
            >
          <img
            src="/logos/northeastern.png"
            alt="Northeastern"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
          />
        </div>
      </div>
    </div>

    {/* Degree 2 */}
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-start gap-3 min-w-0 flex-1">
        <span className="mt-1 h-9 w-[5px] rounded-full bg-blue-600 flex-shrink-0" />
        <div className="min-w-0">
          <p className="text-[15px] md:text-[14px] font-bold text-black leading-snug truncate">
            BE in ECE
          </p>
          <p className="text-[13px] md:text-[14px] text-black/70 leading-snug truncate">
            Anna University
          </p>
        </div>
      </div>

      <div className="flex-shrink-0">
        <div
            className="
                w-11 h-11 md:w-12 md:h-12 rounded-2xl
                bg-white shadow-sm
                flex items-center justify-center
                transition-transform duration-300 ease-out
                group-hover:scale-[1.34]
                origin-center
            "
            >

          <img
            src="/logos/anna-university.png"
            alt="Anna University"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</motion.div>


            {/* BOTTOM ROW — WIDE (PROJECTS) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
              onMouseEnter={() => setHoveredProject(true)}
              onMouseLeave={() => setHoveredProject(false)}
              className="
                relative overflow-hidden
                bg-white rounded-2xl border border-black/10
                shadow-lg p-5
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                md:col-span-8 md:row-start-3
                flex items-center justify-between
              "
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold text-black mb-1">10+</div>
                <p className="text-sm md:text-base text-gray-700 font-semibold mb-1">Projects</p>
                <p className="text-xs text-gray-600">Production-grade systems from pipelines to AI apps</p>
              </div>

              <AnimatePresence>
                {hoveredProject && (
                  <div className="relative w-40 h-24">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: 10, y: -10 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.22 }}
                      className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg shadow-lg"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: 18, y: 10 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.22, delay: 0.08 }}
                      className="absolute bottom-0 right-10 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg shadow-lg"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: -4, y: 10 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.22, delay: 0.16 }}
                      className="absolute bottom-8 right-0 w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
