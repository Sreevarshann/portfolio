'use client'

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'

type Milestone = {
  id: string
  role: string
  company: string
  range: string
  t: number
  color: string
  labelSide: 'above' | 'below'
  details: {
    points: string[]
    tools: string[]
  }
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const pathRef = useRef<SVGPathElement | null>(null)

  const [dashOffset, setDashOffset] = useState(1)
  const [head, setHead] = useState({ x: 1920, y: 360 })
  const [hovered, setHovered] = useState<string | null>(null)

  const milestones: Milestone[] = useMemo(
    () => [
      {
        id: 'do',
        role: 'Data Operations Intern',
        company: 'RightRev India',
        range: 'Mar 2023 – Apr 2023',
        t: 0.13,
        color: '#22c55e',
        labelSide: 'below',
        details: {
          points: [
            'Supported data operations within DevOps team',
            'Monitored revenue and contract data flows',
            'Gained hands-on exposure to revenue workflows',
          ],
          tools: ['DevOps', 'Data Operations', 'Revenue Analytics', 'SaaS'],
        },
      },
      {
        id: 'ds',
        role: 'Data Science & Insights',
        company: 'Sri SaiRam Techno Incubator',
        range: 'May 2022 – Oct 2022',
        t: 0.37,
        color: '#fb923c',
        labelSide: 'below',
        details: {
          points: [
            'Analyzed thousands of autonomous-vehicle run logs',
            'Built 5+ Tableau dashboards for KPI visualization',
            'Reduced debugging cycles by 25%',
            'Achieved 6th place worldwide (320+ teams)',
          ],
          tools: ['Python', 'SQL', 'Snowflake', 'Tableau', 'TensorFlow'],
        },
      },
      {
        id: 'bi',
        role: 'Data & BI Analyst',
        company: 'Flare Innovation',
        range: 'Jan 2024 – Aug 2024',
        t: 0.63,
        color: '#a855f7',
        labelSide: 'below',
        details: {
          points: [
            'Orchestrated Python ETL pipelines (1M+ IoT records)',
            'Automated diagnostics improving reliability by 25%',
            'Delivered Power BI dashboards cutting latency by 30%',
            'Containerized ML workflows with Docker',
          ],
          tools: ['Python', 'ETL', 'PostgreSQL', 'Power BI', 'Docker', 'Scikit-learn'],
        },
      },
      {
        id: 'se',
        role: 'SWE Intern',
        company: 'RightRev',
        range: 'Jan 2026 – Present',
        t: 0.86,
        color: '#60a5fa',
        labelSide: 'below',
        details: {
          points: [
            'Building scalable data pipelines for revenue recognition',
            'Developing ML-enabled document extraction',
            'Optimizing backend data processing logic',
            'Supporting ASC 606 and IFRS compliance',
          ],
          tools: ['Python', 'Data Pipelines', 'Machine Learning', 'ASC 606', 'IFRS'],
        },
      },
    ],
    []
  )

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setDashOffset(1 - v)
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    const p = path.getPointAtLength(len * v)
    setHead({ x: p.x, y: p.y })
  })

  const getPointAtT = (t: number) => {
    const path = pathRef.current
    if (!path) return { x: 0, y: 0 }
    const len = path.getTotalLength()
    return path.getPointAtLength(len * t)
  }

  const isReached = (t: number) => {
    const v = 1 - dashOffset
    return v >= t - 0.02
  }

  return (
    <section ref={sectionRef} id="experience" className="relative w-full bg-white">
      <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
            Professional Journey
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Scroll to reveal the path — each stop marks a role, timeline, and what I shipped.
          </p>
        </div>
      </div>

      <div className="w-full px-0">
        <div className="relative h-[550vh]">
          <div className="sticky top-[180px] h-[calc(100vh-200px)] w-full">
            <div className="relative h-full w-full overflow-visible">
              <svg
                viewBox="0 0 1920 720"
                className="h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <path
                    ref={pathRef}
                    id="roadPath"
                    d="
                      M 1920 360
                      C 1700 320, 1550 280, 1380 310
                      C 1210 340, 1080 300, 920 220
                      C 760 140, 580 110, 420 170
                      C 280 220, 320 320, 480 290
                      C 640 260, 800 350, 960 400
                      C 1080 435, 1050 540, 920 570
                      C 760 610, 620 500, 480 430
                      C 340 360, 180 390, 0 480
                    "
                  />
                  <mask id="revealMask">
                    <motion.use
                      href="#roadPath"
                      fill="none"
                      stroke="white"
                      strokeWidth="52"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength={1}
                      strokeDasharray="1"
                      style={{ strokeDashoffset: dashOffset }}
                    />
                  </mask>
                  <filter id="roadShadow" x="-40%" y="-40%" width="180%" height="180%">
                    <feDropShadow
                      dx="0"
                      dy="10"
                      stdDeviation="12"
                      floodColor="#000000"
                      floodOpacity="0.18"
                    />
                  </filter>
                </defs>

                <use
                  href="#roadPath"
                  fill="none"
                  stroke="#111"
                  strokeWidth="34"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={0.14}
                />

                <use
                  href="#roadPath"
                  fill="none"
                  stroke="rgba(255,255,255,0.65)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="10 14"
                  opacity={0.12}
                />

                <g mask="url(#revealMask)" filter="url(#roadShadow)">
                  <use
                    href="#roadPath"
                    fill="none"
                    stroke="#141414"
                    strokeWidth="34"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <use
                    href="#roadPath"
                    fill="none"
                    stroke="rgba(255,255,255,0.14)"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <use
                    href="#roadPath"
                    fill="none"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 14"
                  />

{/* Sleek Red Sports Car - No Black */}
<g transform={`translate(${head.x}, ${head.y})`}>
  {/* Car shadow */}
  <ellipse cx="0" cy="20" rx="32" ry="8" fill="rgba(100,100,100,0.3)" />
  
  {/* Main body - RED - sleeker profile */}
  <path 
    d="M -28 0 L -30 8 L -28 14 L 28 14 L 30 8 L 28 0 Z" 
    fill="#dc2626" 
  />
  
  {/* Top body panel */}
  <path 
    d="M -28 0 L -26 -6 L 26 -6 L 28 0 Z" 
    fill="#ef4444" 
  />
  
  {/* Windshield/cabin - grey */}
  <path 
    d="M -12 -6 L -8 -12 L 10 -12 L 14 -6 Z" 
    fill="#71717a" 
    opacity="0.9"
  />
  
  {/* Side windows - light grey */}
  <rect x="-6" y="-10" width="8" height="4" rx="0.5" fill="#a1a1aa" opacity="0.8" />
  <rect x="4" y="-10" width="8" height="4" rx="0.5" fill="#a1a1aa" opacity="0.8" />
  
  {/* Front wheels - dark grey instead of black */}
  <circle cx="-16" cy="14" r="6" fill="#3f3f46" stroke="#52525b" strokeWidth="1" />
  <circle cx="-16" cy="14" r="3.5" fill="#52525b" />
  <circle cx="-16" cy="14" r="1.5" fill="#71717a" />
  
  {/* Back wheels - dark grey */}
  <circle cx="16" cy="14" r="6" fill="#3f3f46" stroke="#52525b" strokeWidth="1" />
  <circle cx="16" cy="14" r="3.5" fill="#52525b" />
  <circle cx="16" cy="14" r="1.5" fill="#71717a" />
  
  {/* Headlights - bright yellow */}
  <rect x="-30" y="1" width="2.5" height="3" rx="0.5" fill="#fde047" />
  <rect x="-30" y="6" width="2.5" height="3" rx="0.5" fill="#fde047" />
  
  {/* Racing stripe - darker red */}
  <rect x="-24" y="-3" width="48" height="1.5" fill="#7f1d1d" opacity="0.6" />
  
  {/* Taillights - bright red/orange */}
  <rect x="27" y="2" width="3" height="2" rx="0.5" fill="#fb923c" />
  <rect x="27" y="6" width="3" height="2" rx="0.5" fill="#fb923c" />
  
  {/* Spoiler - dark red */}
  <rect x="24" y="-8" width="5" height="2" fill="#991b1b" />
  
  {/* Front grille - grey */}
  <rect x="-29" y="10" width="1.5" height="3" fill="#71717a" opacity="0.7" />
</g>
                </g>

                {[...milestones]
                  .sort((a, b) => {
                    const aHovered = hovered === a.id ? 1 : 0
                    const bHovered = hovered === b.id ? 1 : 0
                    return aHovered - bHovered
                  })
                  .map((m) => {
                    const p = getPointAtT(m.t)
                    const reached = isReached(m.t)

                    const baseDy = 45
                    const isActive = hovered === m.id

                    return (
                      <g key={m.id} style={{ isolation: 'isolate' }}>
                        <motion.circle
                          cx={p.x}
                          cy={p.y}
                          r={36}
                          fill={m.color}
                          opacity={0.0}
                          initial={false}
                          animate={{
                            opacity: reached ? (isActive ? 0.25 : 0.18) : 0,
                          }}
                          transition={{ duration: 0.25 }}
                        />

                        <motion.g
                          initial={false}
                          animate={{
                            opacity: reached ? 1 : 0,
                            y: reached ? 0 : 8,
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          <circle cx={p.x} cy={p.y} r="24" fill="white" stroke={m.color} strokeWidth="5" />
                          <circle cx={p.x} cy={p.y} r="16" fill="white" />

                          <foreignObject x={p.x - 14} y={p.y - 14} width={28} height={28}>
                            <div
                              style={{
                                width: 28,
                                height: 28,
                                borderRadius: 8,
                                background: 'rgba(0,0,0,0.06)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 11,
                                fontWeight: 700,
                                color: 'rgba(0,0,0,0.55)',
                              }}
                            >
                              {m.id.toUpperCase()}
                            </div>
                          </foreignObject>

                          <foreignObject x={p.x - 170} y={p.y + baseDy} width={340} height={520}>
                            <div
                              onMouseEnter={() => setHovered(m.id)}
                              onMouseLeave={() => setHovered(null)}
                              style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                pointerEvents: 'auto',
                                position: 'relative',
                                zIndex: isActive ? 999999 : 1,
                              }}
                            >
                              <div style={{ textAlign: 'center', width: '100%' }}>
                                <div style={{ fontSize: 17, fontWeight: 800, color: '#0b0b0b' }}>
                                  {m.role}
                                </div>
                                <div style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)', marginTop: 2 }}>
                                  {m.company}
                                </div>
                                <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: 1 }}>
                                  {m.range}
                                </div>

                                <AnimatePresence>
                                  {isActive && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                      animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                      transition={{ duration: 0.25 }}
                                      style={{
                                        padding: '14px 16px',
                                        borderRadius: 16,
                                        background: 'white',
                                        border: '1px solid rgba(0,0,0,0.12)',
                                        boxShadow: '0 14px 40px rgba(0,0,0,0.16)',
                                        color: 'rgba(0,0,0,0.85)',
                                        fontSize: 13,
                                        lineHeight: 1.5,
                                        textAlign: 'left',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        zIndex: 999999,
                                      }}
                                    >
                                      <div style={{ fontWeight: 700, marginBottom: 8, color: '#0b0b0b' }}>
                                        Key Contributions
                                      </div>
                                      <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', marginBottom: 10 }}>
                                        {m.details.points.map((point, i) => (
                                          <li
                                            key={i}
                                            style={{ marginBottom: 6, paddingLeft: 16, position: 'relative' }}
                                          >
                                            <span
                                              style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: m.color,
                                                fontWeight: 'bold',
                                              }}
                                            >
                                              →
                                            </span>
                                            {point}
                                          </li>
                                        ))}
                                      </ul>

                                      <div
                                        style={{
                                          fontWeight: 700,
                                          marginBottom: 6,
                                          color: '#0b0b0b',
                                          fontSize: 12,
                                        }}
                                      >
                                        Technologies
                                      </div>
                                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                        {m.details.tools.map((tool, i) => (
                                          <span
                                            key={i}
                                            style={{
                                              padding: '4px 10px',
                                              background: 'rgba(0,0,0,0.04)',
                                              border: '1px solid rgba(0,0,0,0.08)',
                                              borderRadius: 20,
                                              fontSize: 11,
                                              fontWeight: 600,
                                              color: 'rgba(0,0,0,0.7)',
                                            }}
                                          >
                                            {tool}
                                          </span>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          </foreignObject>
                        </motion.g>
                      </g>
                    )
                  })}
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16" />
    </section>
  )
}