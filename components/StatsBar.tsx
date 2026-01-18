'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface StatItemProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

const StatItem = ({ value, suffix, label, delay = 0 }: StatItemProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 1500 })
  const displayValue = useSpring(0, { duration: 1500 })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      displayValue.set(latest)
    })
  }, [springValue, displayValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.4 }}
      className="flex-1 text-center"
    >
      <div className="flex items-baseline justify-center">
        <motion.div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
          {displayValue.get().toFixed(value % 1 !== 0 ? 1 : 0)}
        </motion.div>
        {suffix && <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 ml-1">{suffix}</span>}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-wider text-gray-600 mt-2">{label}</div>
    </motion.div>
  )
}

const StatsBar = () => {
  const stats = [
    { value: 3.95, label: 'GPA' },
    { value: 1, suffix: 'M+', label: 'Records Processed' },
    { value: 9, label: 'IEEE Publications' },
    { value: 6, suffix: 'th', label: 'Global Rank' },
  ]

  return (
    <section className="py-12 md:py-16 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
              <StatItem {...stat} delay={index * 0.05} />
              {index < stats.length - 1 && (
                <div className="hidden lg:block w-px h-16 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
