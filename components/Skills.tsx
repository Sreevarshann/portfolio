'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillItemProps {
  name: string
  percent: number
}

const SkillItem = ({ name, percent }: SkillItemProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="space-y-3">
      <span className="text-[15px] font-medium text-gray-700">{name}</span>
      <div ref={ref} className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="h-full bg-black rounded-full"
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Core',
      skills: [
        { name: 'Python (NumPy, Pandas, SciPy, Scikit-Learn)', percent: 95 },
        { name: 'SQL', percent: 93 },
        { name: 'R & JavaScript', percent: 85 },
      ],
    },
    {
      title: 'Data Engineering & ML/AI',
      skills: [
        { name: 'Python ETL, dbt, Airflow', percent: 92 },
        { name: 'AI/ML Frameworks & LLMs', percent: 90 },
        { name: 'REST APIs, Docker, Git', percent: 88 },
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'PostgreSQL, MS SQL, MySQL', percent: 91 },
        { name: 'MongoDB, Snowflake', percent: 87 },
        { name: 'AWS (S3, Redshift, SageMaker, Bedrock)', percent: 85 },
      ],
    },
    {
      title: 'Analytics & Visualization',
      skills: [
        { name: 'Power BI', percent: 94 },
        { name: 'Tableau & Looker Studio', percent: 89 },
        { name: 'Excel (Pivot Tables, Advanced Functions)', percent: 92 },
      ],
    },
    {
      title: 'Business & Others',
      skills: [
        { name: 'KPI Tracking & Process Optimization', percent: 90 },
        { name: 'Data Communication & Documentation', percent: 93 },
        { name: 'Vue, Streamlit, Technical Documentation', percent: 85 },
      ],
    },
  ]

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.15em] uppercase text-gray-500 mb-4">
            Expertise
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-black mb-8">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <SkillItem key={i} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-black mb-8">Certifications & Awards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-black mb-3">Certifications</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Google Professional Data Analytics</li>
                <li>• AWS Cloud Practitioner Essentials</li>
                <li>• Cloud Technical Essentials</li>
                <li>• CISCO - Data Analytics</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-black mb-3">Awards</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>🏆 6th Place Worldwide - SAUVC (350+ teams)</li>
                <li>🥇 1st Place - Course Hackathon (Data Storytelling)</li>
                <li>🥉 3rd Place - Google Cloud x Northeastern Hackathon</li>
                <li>📄 IEEE-Published Researcher (Multiple Papers)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
